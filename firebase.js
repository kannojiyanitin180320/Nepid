import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
    import { getFirestore, collection, addDoc, getDocs, doc, setDoc, query } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
    import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, signInWithPhoneNumber, RecaptchaVerifier } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

    const firebaseConfig = {
        apiKey: "AIzaSyDkd_utFNH69pEIjgIzjHGrNJVxS-0I3AU",
        authDomain: "nepid-b33d7.firebaseapp.com",
        projectId: "nepid-b33d7",
        storageBucket: "nepid-b33d7.firebasestorage.app",
        messagingSenderId: "845921958780",
        appId: "1:845921958780:web:26873958fe1c1247b502f9",
        measurementId: "G-RNCTQ9K8EJ"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);

    window.db = db;
    window.auth = auth;
    window.getAuth = () => auth;
    window.collection = collection;
    window.addDoc = addDoc;
    window.getDocs = getDocs;
    window.query = query;
    window.doc = doc;
    window.setDoc = setDoc;
    window.isOtpSent = false;
    window.confirmationResult = null;
    window.generatedOTP = null;

    const savedName = localStorage.getItem("userName");
    if (savedName && typeof window.updateAuthButton === "function") {
        window.updateAuthButton(savedName);
    }

    const setupRecaptcha = () => {
        if (!window.recaptchaVerifier) {
            const signupView = document.getElementById('signup-view');
            if (signupView) {
                window.recaptchaVerifier = new RecaptchaVerifier(auth, 'signup-view', {  
                    'size': 'invisible',
                    'callback': (response) => {}
                });
            }
        }
    };

    // ==========================================
    // 🚀 LATEST UPDATES FUNCTION
    // ==========================================
    window.loadUpdates = async function() {
        const container = document.getElementById('latest-updates-list');
        if (!container) return;

        let allUpdates = [];
        const categories = ['notes', 'syllabus', 'question_paper', 'reference_book'];

        try {
            for (const cat of categories) {
                const collectionName = "uploaded_" + cat;
                try {
                    const querySnapshot = await window.getDocs(window.collection(window.db, collectionName));
                    querySnapshot.forEach((docSnap) => {
                        let data = docSnap.data();
                        if (data.date) {
                            allUpdates.push({ id: docSnap.id, category: cat, ...data });
                        }
                    });
                } catch (err) {
                    console.warn(`Error loading collection ${collectionName}:`, err);
                }
            }

            if (allUpdates.length === 0) {
                container.innerHTML = '<tr><td colspan="3" style="text-align:center; padding: 40px; color: var(--text-muted);">No updates available yet.</td></tr>';
                return;
            }

            allUpdates.sort((a, b) => new Date(b.date) - new Date(a.date));
            const latestTop10 = allUpdates.slice(0, 10);

            let html = '';
            latestTop10.forEach((item) => {
                let badgeText = "Update";
                let badgeColor = "#8b5cf6"; 

                if (item.category === "notes") { badgeText = "New Notes"; badgeColor = "#38bdf8"; } 
                else if (item.category === "syllabus") { badgeText = "Syllabus"; badgeColor = "#ef4444"; } 
                else if (item.category === "question_paper") { badgeText = "Question Paper"; badgeColor = "#10b981"; } 
                else if (item.category === "reference_book" || item.category === "reference_books") { badgeText = "Reference Book"; badgeColor = "#8b5cf6"; } 

                const uploadDate = new Date(item.date);
                const now = new Date();
                const diffMs = now - uploadDate;
                const diffMins = Math.round(diffMs / 60000);
                const diffHours = Math.round(diffMs / 3600000);
                const diffDays = Math.round(diffMs / 86400000);

                let timeAgo = "";
                if (diffMins < 60) timeAgo = diffMins <= 1 ? "Just now" : `${diffMins} minutes ago`;
                else if (diffHours < 24) timeAgo = diffHours === 1 ? "1 hour ago" : `${diffHours} hours ago`;
                else if (diffDays < 7) timeAgo = diffDays === 1 ? "1 day ago" : `${diffDays} days ago`;
                else timeAgo = uploadDate.toLocaleDateString();

                html += `
                <tr style="border-bottom: 1px solid var(--border-color, rgba(0,0,0,0.06));">
                    <td style="padding: 24px 20px; vertical-align: top; width: 15%; min-width: 140px;">
                        <span style="background: ${badgeColor}; color: white; padding: 6px 16px; border-radius: 20px; font-size: 11px; font-weight: bold; display: inline-block;">
                            ${badgeText}
                        </span>
                    </td>
                    <td style="padding: 24px 20px; vertical-align: top; width: auto;">
                        <div style="color: var(--main-text, #1e293b); font-size: 16px; font-weight: 500; margin-bottom: 8px;">
                            ${item.course || ''} - ${item.title || item.subject || ''}
                        </div>
                        <div style="color: var(--text-muted, #64748b); font-size: 13px;">
                            <i class="far fa-clock"></i> Uploaded: ${timeAgo}
                        </div>
                    </td>
                    <td style="padding: 24px 20px; vertical-align: top; text-align: right; width: 15%; min-width: 140px;">
                        <a href="${item.link}" target="_blank" style="background: var(--brand-color, #6366f1); color: white; padding: 8px 18px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 500; display: inline-block;">
                            View File <i class="fas fa-arrow-right" style="margin-left: 5px;"></i>
                        </a>
                    </td>
                </tr>`;
            });
            
            container.innerHTML = html;
        } catch (error) {
            console.error("Updates Load Error:", error);
            container.innerHTML = `<tr><td colspan="3" style="text-align:center; color:red; padding: 20px;">Error loading updates: ${error.message}</td></tr>`;
        }
    };

    // ==========================================
    // 📤 ADMIN UPLOAD CONTENT FUNCTION (NEW & FIXED)
    // ==========================================
     window.handleUploadContent = function(event) {
        if(event) event.preventDefault();

        if (!auth.currentUser) {
            alert("Security Error: Only logged-in Admins can upload content!");
            if(typeof window.showAdminLogin === 'function') window.showAdminLogin();
            return;
        }

        const category = document.getElementById('upCategory').value;
        const btn = document.getElementById('uploadBtn');
        btn.innerText = "Uploading...";
        btn.disabled = true;

        const collectionName = "uploaded_" + category;

        addDoc(collection(db, collectionName), {
            category: category,
            course: document.getElementById('upCourse').value,
            semester: document.getElementById('upSem').value,
            subject: document.getElementById('upSubject').value,
            title: document.getElementById('upTitle').value,
            link: document.getElementById('upLink').value,
            uploadedBy: auth.currentUser.email,
            date: new Date().toISOString()
        })
        .then(() => {
            alert(category.toUpperCase().replace('_', ' ') + " Uploaded Successfully! 🎉");
            document.getElementById('uploadContentForm').reset();
            btn.innerText = "Upload Content to Database";
            btn.disabled = false;
        })
        .catch((error) => {
            alert("Error uploading: " + error.message);
            btn.innerText = "Upload Content to Database";
            btn.disabled = false;
        });
    };

    // ==========================================
    // 🚀 CATEGORY LOAD FUNCTION
    // ==========================================
   window.loadCategoryData = async function(category, courseName, subjectName, tableBodyId) {
        const tbody = document.getElementById(tableBodyId);
        if (!tbody) return;

        tbody.innerHTML = '<tr><td colspan="3" style="text-align:center; color: var(--text-muted); padding: 15px;">Loading data from database... <i class="fas fa-spinner fa-spin"></i></td></tr>';

        // Fix Reference Book Category Spelling
        let safeCategory = (category || "").trim().toLowerCase().replace(/\s+/g, "_").replace(/-/g, "_");
        const collectionName = "uploaded_" + safeCategory; 

        try {
            const querySnapshot = await getDocs(collection(db, collectionName));
            
            if (querySnapshot.empty) {
                tbody.innerHTML = '<tr><td colspan="3" style="text-align:center; color: var(--text-muted); padding: 15px;">No entries uploaded yet.</td></tr>';
                return;
            }

            let docsArray = [];
            querySnapshot.forEach((docSnap) => {
                let data = docSnap.data();
                
                // Flexible Match for ALL / General
                let dbCourse = (data.course || "").toUpperCase();
                let askCourse = (courseName || "").toUpperCase();
                let matchCourse = (askCourse === "ALL" || dbCourse === askCourse || dbCourse.includes("ALL"));

                let matchSubject = true;
                if (subjectName !== "ALL") {
                    let dbSub = (data.subject || "").toLowerCase();
                    let askSub = (subjectName || "").toLowerCase();
                    matchSubject = dbSub.includes(askSub) || askSub.includes(dbSub);
                }

                if (matchCourse && matchSubject) {
                    docsArray.push(data);
                }
            });

            if (docsArray.length === 0) {
                tbody.innerHTML = '<tr><td colspan="3" style="text-align:center; color: var(--text-muted); padding: 15px;">No data found matching your filters.</td></tr>';
                return;
            }

            docsArray.sort((a, b) => {
                let titleA = (a.title || "").toLowerCase();
                let titleB = (b.title || "").toLowerCase();
                if (titleA < titleB) return -1;
                if (titleA > titleB) return 1;
                return 0;
            });

            let html = '';
            let count = 1;
            
            docsArray.forEach((item) => {
                let buttonText = "Open Link";
                let iconClass = "fas fa-file-pdf";

                if(safeCategory === "syllabus") {
                    buttonText = "Open Syllabus";
                    iconClass = "fas fa-book"; 
                } else if(safeCategory === "notes") {
                    buttonText = "Open Note";
                } else if(safeCategory === "question_paper") {
                    buttonText = "Open Paper";
                } else if(safeCategory === "mu_result") {
                    buttonText = "Open Result";
                } else if(safeCategory === "reference_book" || safeCategory === "reference_books") {
                    buttonText = "Open Book";
                    iconClass = "fas fa-book-open";
                }

                html += `
                <tr>
                    <td class="col-no">${count}</td>
                    <td>
                        <span class="sem-name">
                            <span class="folder-icon" style="background-color: rgba(244, 63, 94, 0.12); color: #dc2626;">
                                <i class="${iconClass}"></i>
                            </span> 
                            ${item.title || item.subject} 
                        </span>
                    </td>
                    <td class="col-action">
                        <a href="${item.link}" target="_blank" class="btn-open">${buttonText} <i class="fas fa-external-link-alt"></i></a>
                    </td>
                </tr>`;
                count++;
            });
            
            tbody.innerHTML = html;
            
        } catch (error) {
            console.error("Error loading data:", error);
            tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; color:red; padding: 15px;">Error loading content: ${error.message}</td></tr>`;
        }
    };

    window.showReferenceBook = function() {
        if (typeof window.hideAllViews === 'function') window.hideAllViews();
        
        var refView = document.getElementById('reference-book-view');
        if (refView) refView.style.display = 'block';
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const mainNav = document.getElementById('mainNav');
        if (typeof mainNav !== 'undefined' && mainNav) mainNav.classList.remove('nav-open');

        if (typeof window.loadCategoryData === 'function') {
            window.loadCategoryData("reference_book", "ALL", "ALL", "table-reference-book"); 
        }
    };

    // ==========================================
    // 🚀 GLOBAL SEARCH SYSTEM
    // ==========================================
    window.executeSearch = async function() {
        let inputField = document.getElementById("globalSearchInput");
        if (!inputField) return;
        
        let input = inputField.value.trim().toLowerCase();
        if(!input) { 
            alert("Please enter something to search!"); 
            return; 
        }

        if(typeof window.hideAllViews === 'function') window.hideAllViews();
        const searchView = document.getElementById('search-view');
        if(searchView) searchView.style.display = 'block';
        
        const searchKeywordDisplay = document.getElementById('search-keyword-display');
        if(searchKeywordDisplay) searchKeywordDisplay.innerText = 'Showing results for: "' + input + '"';
        
        const tbody = document.getElementById("search-results-table");
        if(!tbody) return;

        tbody.innerHTML = '<tr><td colspan="3" style="text-align:center; padding: 40px; color: var(--text-muted);">Searching in database... <i class="fas fa-spinner fa-spin"></i></td></tr>';

        try {
            let resultsHTML = '';
            let count = 0;
            const categories = ['notes', 'syllabus', 'question_paper', 'reference_book'];

            for (const cat of categories) {
                const collectionName = "uploaded_" + cat;
                try {
                    const snap = await window.getDocs(window.collection(window.db, collectionName));
                    
                    snap.forEach((docSnap) => {
                        let data = docSnap.data();
                        
                        if((data.title && data.title.toLowerCase().includes(input)) || 
                           (data.subject && data.subject.toLowerCase().includes(input)) || 
                           (data.course && data.course.toLowerCase().includes(input))) {
                            
                            let badgeColor = cat === 'notes' ? '#38bdf8' : cat === 'syllabus' ? '#ef4444' : cat === 'question_paper' ? '#10b981' : '#8b5cf6';
                            let badgeText = cat.replace('_', ' ').toUpperCase();

                            resultsHTML += `
                            <tr style="border-bottom: 1px solid var(--border-color, rgba(0,0,0,0.05));">
                                <td style="padding: 16px 20px;">
                                    <span style="background: ${badgeColor}; color: white; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: bold;">${badgeText}</span>
                                </td>
                                <td style="padding: 16px 20px; font-weight: 500; color: var(--main-text, #333);">
                                    ${data.course || ''} - ${data.title || data.subject || ''}
                                </td>
                                <td style="padding: 16px 20px; text-align: right;">
                                    <a href="${data.link}" target="_blank" style="background: var(--brand-color, #6366f1); color: white; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: bold; display: inline-block;">
                                        Open Pdf <i class="fas fa-arrow-right" style="margin-left:4px;"></i>
                                    </a>
                                </td>
                            </tr>`;
                            count++;
                        }
                    });
                } catch (e) { 
                    console.warn(`Error searching in ${cat}:`, e); 
                }
            }

            if(count === 0) {
                tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; padding: 40px; color: var(--text-muted);">Oops! No results found for "<b>${input}</b>"</td></tr>`;
            } else {
                tbody.innerHTML = resultsHTML;
            }
        } catch (error) {
            console.error("Search Error:", error);
            tbody.innerHTML = '<tr><td colspan="3" style="text-align:center; color:red; padding: 20px;">Error loading search results. Please try again.</td></tr>';
        }
    };

    // ==========================================
    // 🚀 OTP & AUTHENTICATION MANAGEMENT
    // ==========================================
    window.sendOTP = function(event) {
        if(event) event.preventDefault();
        
        const emailInput = document.getElementById('signupEmail') || document.getElementById('signupPhone');
        const email = emailInput?.value.trim(); 
        
        const status = document.getElementById('signupStatus');
        const name = document.getElementById('signupName')?.value.trim();

        if(!email || !email.includes('@')) {
            if(status) { status.innerText = "Please enter a valid Email Address."; status.style.color = "red"; }
            else alert("Please enter a valid Email Address.");
            return;
        }

        if(status) { status.innerText = "Sending OTP to your Email... ⏳"; status.style.color = "var(--brand-color)"; }
        
        window.generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

        const templateParams = {
            to_email: email,
            to_name: name || "Student",
            otp: window.generatedOTP
        };

        if(typeof emailjs !== 'undefined') {
            emailjs.send('service_4z4fiok', 'template_m7n5kus', templateParams)
                .then(function() {
                    if(status) { status.innerText = "OTP Sent to your Email! 📩 Check inbox."; status.style.color = "#10b981"; }
                    
                    const pForm = document.getElementById('phoneForm'); 
                    const oForm = document.getElementById('otpForm') || document.getElementById('otpSection');
                    if(pForm) pForm.style.display = 'none';
                    if(oForm) oForm.style.display = 'block';
                }, function(error) {
                    console.error("EmailJS Error:", error);
                    if(status) { status.innerText = "Error sending Email! Try again."; status.style.color = "red"; }
                });
        } else {
            console.error("EmailJS library not loaded!");
            alert("EmailJS script missing in HTML!");
        }
    };

    window.verifyOTP = async function(event) {
        if(event) event.preventDefault();

        const otp = document.getElementById('signupOTP')?.value.trim();
        const status = document.getElementById('signupStatus');
        const name = document.getElementById('signupName')?.value;
        const className = document.getElementById('signupClass')?.value;
        
        const emailInput = document.getElementById('signupEmail') || document.getElementById('signupPhone');
        const email = emailInput?.value.trim();

        if(status) { status.innerText = "Verifying OTP... ⏳"; status.style.color = "var(--brand-color)"; }

        if(otp === window.generatedOTP && otp !== "") {
            try {
                await window.setDoc(window.doc(window.db, "students", email), {
                    fullName: name,
                    email: email,
                    studentClass: className,
                    joinedAt: new Date().toISOString()
                });

                if(status) { status.innerText = "Account Created Successfully! 🎉"; status.style.color = "#10b981"; }

                localStorage.setItem("userName", name);
                if(className) localStorage.setItem("userClass", className);
                
                if(typeof window.updateAuthButton === 'function') window.updateAuthButton(name);

                setTimeout(() => {
                    if(typeof window.showHome === 'function') window.showHome();
                    
                    const pForm = document.getElementById('phoneForm');
                    const oForm = document.getElementById('otpForm') || document.getElementById('otpSection');
                    if(pForm) pForm.style.display = 'block';
                    if(oForm) oForm.style.display = 'none';
                    
                    if(status) status.innerText = "";
                }, 1500);

            } catch (error) {
                console.error("Database Error Detail:", error);
                if(status) { status.innerText = "DB Error: Please check console."; status.style.color = "red"; }
            }
        } else {
            if(status) { status.innerText = "Invalid OTP! Please enter the correct OTP."; status.style.color = "red"; }
        }
    };

    window.updateAuthButton = function(name) {
        const authBtn = document.getElementById('authButton');
        const userName = name || localStorage.getItem("userName") || "User";
        
        if (authBtn) {
            const firstLetter = userName.charAt(0).toUpperCase();
            authBtn.innerHTML = firstLetter;
            
            authBtn.style.width = "40px";
            authBtn.style.height = "40px";
            authBtn.style.borderRadius = "50%";
            authBtn.style.display = "flex";
            authBtn.style.alignItems = "center";
            authBtn.style.justifyContent = "center";
            authBtn.style.fontSize = "18px";
            authBtn.style.fontWeight = "bold";
            authBtn.style.backgroundColor = "var(--brand-color)"; 
            authBtn.style.color = "#ffffff";
            authBtn.style.boxShadow = "0 4px 14px rgba(79, 70, 229, 0.4)";
            authBtn.style.border = "none";
            authBtn.style.cursor = "pointer";
            authBtn.title = "Logged in as: " + userName;
            
            const dropdownName = document.getElementById('dropdownName');
            if(dropdownName) dropdownName.innerText = userName;
            
            const dropdownClass = document.getElementById('dropdownClass');
            if(dropdownClass) {
                const userClass = localStorage.getItem("userClass") || "BSC-CS";
                dropdownClass.innerText = userClass;
            }
            
            authBtn.onclick = function(event) {
                event.preventDefault();
                event.stopPropagation();
                if(typeof window.toggleDropdown === 'function') window.toggleDropdown(event);
            };
        }
    };

    window.toggleDropdown = function(event) {
        if(event) event.stopPropagation();
        const menu = document.getElementById('userDropdown');
        if(menu) {
            menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
        }
    };

    window.handleLogout = function() {
        const dropdown = document.getElementById('userDropdown');
        if (dropdown) dropdown.style.display = 'none';

        localStorage.removeItem("userName");
        localStorage.removeItem("userClass");

        if (window.auth) {
            signOut(window.auth).then(() => {
                window.location.reload(); 
            }).catch((error) => {
                console.error("Logout Error:", error);
                window.location.reload();
            });
        } else {
            window.location.reload();
        }
    };

    window.handleAdminLogin = async function(event) {
        if (event) event.preventDefault();

        const emailInput = document.getElementById('adminEmail');
        const passwordInput = document.getElementById('adminPassword');

        const email = emailInput ? emailInput.value.trim() : "";
        const password = passwordInput ? passwordInput.value.trim() : "";

        if (!email || !password) {
            alert("Kripya Admin Email aur Password dono bharein!");
            return;
        }

        try {
            await signInWithEmailAndPassword(window.auth, email, password);
            alert('Admin Login Successful! 🎉');
            
            const form = document.getElementById('adminLoginForm');
            if (form) form.reset();

            if (typeof window.showAdminDashboard === 'function') {
                window.showAdminDashboard();
            } else if (typeof window.showHome === 'function') {
                window.showHome();
            } else {
                window.location.reload();
            }
        } catch (error) {
            console.error("Admin Login Error:", error);
            alert("Login Failed: " + error.message);
        }
    };

    window.showQuestionPapersIT = function() {
        const allViews = document.querySelectorAll('.view-section');
        allViews.forEach(view => {
            view.style.display = 'none';
        });
        
        const qpView = document.getElementById('question-papers-view');
        if (qpView) {
            qpView.style.display = 'block';
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        if (typeof window.loadCategoryData === 'function') {
            window.loadCategoryData("question_paper", "ALL", "ALL", "table-question-papers"); 
        }
    };

    if(typeof emailjs !== 'undefined') {
        emailjs.init("pKwWKfMJ_6Tpzu9mD"); 
    }

    setTimeout(() => {
        setupRecaptcha();
        if(typeof window.loadUpdates === 'function') {
            window.loadUpdates();
        }
        if (savedName) {
            window.updateAuthButton(savedName);
        }
    }, 1000);
