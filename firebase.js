// 1. Single & Clean Firebase Imports (Version 10.8.1)
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
    import { getFirestore, collection, addDoc, getDocs, query, where, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
    import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

    // 2. Aapki Firebase Configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDkd_utFNH69pEIjgIzjHGrNJVxS-0I3AU",
        authDomain: "nepid-b33d7.firebaseapp.com",
        projectId: "nepid-b33d7",
        storageBucket: "nepid-b33d7.firebasestorage.app",
        messagingSenderId: "845921958780",
        appId: "1:845921958780:web:26873958fe1c1247b502f9",
        measurementId: "G-RNCTQ9K8EJ"
    };

    // 3. Firebase Initialize Karna
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);

    // Global variables set karna taaki HTML functions inhe use kar sakein
    window.db = db;
    window.auth = auth;
    window.getAuth = () => auth;
    window.collection = collection;
    window.addDoc = addDoc;
    window.getDocs = getDocs;

    let confirmationResult = null;
    let isOtpSent = false;

    
        
        const savedName = localStorage.getItem("userName");
        if (savedName && typeof window.updateAuthButton === "function") {
            window.updateAuthButton(savedName);
        }


    // ==========================================
    // 🚀 AUTHENTICATION FUNCTIONS (Phone OTP Signup)
    // ==========================================

    window.handleSignUp = async function() {
        const statusText = document.getElementById('signupStatus');
        const signupBtn = document.querySelector('#signUpForm button');

        if (!isOtpSent) {
            // Step A: Send OTP
            const fullName = document.getElementById('signupName')?.value.trim();
            const className = document.getElementById('signupClass')?.value.trim();
            let phone = document.getElementById('signupPhone')?.value.trim();

            if (!fullName || !className || !phone) {
                if(statusText) { statusText.innerText = "Saari details bharna zaroori hai!"; statusText.style.color = "#f43f5e"; }
                return;
            }

            if (!phone.startsWith('+')) {
                phone = '+91' + phone;
            }

            try {
                if(statusText) { statusText.innerText = "Sending OTP... ⏳"; statusText.style.color = "var(--brand-color)"; }
                
                const appVerifier = window.recaptchaVerifier;
                confirmationResult = await signInWithPhoneNumber(auth, phone, appVerifier);
                
                isOtpSent = true;
                if(statusText) { statusText.innerText = "OTP sent successfully! Enter 6-digit OTP."; statusText.style.color = "#10b981"; }
                
                // Hide phone field, show OTP field
                const phoneGroup = document.getElementById('phoneInputGroup');
                const otpGroup = document.getElementById('otpSection');
                if(phoneGroup) phoneGroup.style.display = 'none';
                if(otpGroup) otpGroup.style.display = 'block';
                if(signupBtn) signupBtn.innerText = "Verify & Register";

            } catch (error) {
                console.error("OTP Error:", error);
                if(statusText) { statusText.innerText = "Error: " + error.message; statusText.style.color = "#f43f5e"; }
                if (window.recaptchaVerifier) {
                    window.recaptchaVerifier.render().then(widgetId => grecaptcha.reset(widgetId));
                }
            }
        } else {
            // Step B: Verify OTP & Save to Firestore
            const otp = document.getElementById('signupOtp')?.value.trim();
            const fullName = document.getElementById('signupName')?.value.trim();
            const className = document.getElementById('signupClass')?.value.trim();
            let phone = document.getElementById('signupPhone')?.value.trim();
            if (!phone.startsWith('+')) phone = '+91' + phone;

            if (!otp || otp.length < 6) {
                if(statusText) { statusText.innerText = "Please enter a valid 6-digit OTP.!"; statusText.style.color = "#f43f5e"; }
                return;
            }

            try {
                if(statusText) { statusText.innerText = "Verifying OTP... ⏳"; statusText.style.color = "var(--brand-color)"; }

                const result = await confirmationResult.confirm(otp);
                const user = result.user;

                // Save user details to Firestore using setDoc with user.uid
                await setDoc(doc(db, "users", user.uid), {
                    fullName: fullName,
                    className: className,
                    phoneNumber: user.phoneNumber || phone,
                    createdAt: new Date().toISOString()
                });

                localStorage.setItem("userName", fullName);
                if(typeof window.updateAuthButton === 'function') window.updateAuthButton(fullName);

                if(statusText) { statusText.innerText = "Registration Successful! 🎉"; statusText.style.color = "#10b981"; }
                
                setTimeout(() => {
                    if(typeof window.showHome === 'function') window.showHome(); 
                    else window.location.href = "index.html";
                }, 1500);

            } catch (error) {
                console.error("Verification Error:", error);
                if(statusText) { statusText.innerText = "Galat OTP! Kripya dobara try karein."; statusText.style.color = "#f43f5e"; }
            }
        }
    };

    // 2. Student Login Function
    window.handleLogin = async function() {
        const email = document.getElementById('loginEmail')?.value;
        const password = document.getElementById('loginPassword')?.value;
        const statusText = document.getElementById('loginStatus');

        if(!email || !password) return;

        try {
            if(statusText) { statusText.style.color = "var(--brand-color)"; statusText.innerText = "Logging in... ⏳"; }
            
            await signInWithEmailAndPassword(auth, email, password);
            
            const userName = email.split('@')[0];
            localStorage.setItem("userName", userName);
            if(typeof window.updateAuthButton === 'function') window.updateAuthButton(userName);
            
            if(statusText) { statusText.style.color = "#10b981"; statusText.innerText = "Login Successful! 🎉"; }
            setTimeout(() => { 
                if(typeof window.showHome === 'function') window.showHome(); 
                if(statusText) statusText.innerText = ""; 
            }, 1200);
        } catch (error) {
            if(statusText) { statusText.style.color = "#f43f5e"; statusText.innerText = "Invalid Email or Password."; }
        }
    };

    // 3. Forgot Password Function
    window.handleForgotPassword = async function() {
        const emailInput = document.getElementById('resetEmail').value;
        const statusText = document.getElementById('resetStatus');

        if (!emailInput) {
            if(statusText) { statusText.style.color = "#f43f5e"; statusText.innerText = "Please enter your email address."; }
            return;
        }

        try {
            if(statusText) { statusText.style.color = "var(--brand-color)"; statusText.innerText = "Sending link... ⏳"; }
            await sendPasswordResetEmail(auth, emailInput);
            
            if(statusText) { statusText.style.color = "#10b981"; statusText.innerText = "Password reset link sent! Check your email inbox."; }
            document.getElementById('resetEmail').value = "";

            setTimeout(() => {
                if(typeof window.showLogin === 'function') window.showLogin();
                if(statusText) statusText.innerText = ""; 
            }, 3000);

        } catch (error) {
            console.error("Error sending reset email:", error);
            if(statusText) { 
                statusText.style.color = "#f43f5e"; 
                if (error.code === 'auth/user-not-found') statusText.innerText = "No account found with this email.";
                else if (error.code === 'auth/invalid-email') statusText.innerText = "Please enter a valid email address.";
                else statusText.innerText = "Something went wrong. Please try again.";
            }
        }
    };

    // 4. Admin Login Function
    window.handleAdminLogin = function(event) {
        if(event) event.preventDefault();
        const email = document.getElementById('adminEmail').value;
        const password = document.getElementById('adminPassword').value;

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert('Admin Login Successful!');
                document.getElementById('adminLoginForm').reset();
                if(typeof showAdminDashboard === 'function') showAdminDashboard();
                else if(typeof window.showHome === 'function') window.showHome();
            })
            .catch((error) => {
                alert('Admin Login Failed: ' + error.message);
            });
    };

    // 5. General Logout
    window.handleLogout = function() {
        localStorage.removeItem("userName");
        signOut(auth).then(() => {
            location.reload(); 
        });
    };

    // 6. Admin Logout
    window.handleAdminLogout = function() {
        signOut(auth).then(() => {
            alert("Admin Logged Out Successfully!");
            localStorage.removeItem("userName");
            location.reload();
        });
    };

    // ==========================================
    // 📂 DATABASE FUNCTIONS (Notes, Search, Upload)
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

   window.loadCategoryData = async function(category, courseName, subjectName, tableBodyId) {
    const tbody = document.getElementById(tableBodyId);
    if (!tbody) return;

    tbody.innerHTML = '<tr><td colspan="3" style="text-align:center;">Loading data from database...</td></tr>';

    // Dhyan dein: Agar aapka collection name sirf "notes" hai, toh is line ko badal kar
    // const collectionName = category; kar dein.
    const collectionName = "uploaded_" + category; 
    let q;

    if (subjectName === "ALL") {
        q = query(collection(db, collectionName), where("course", "in", [courseName, "ALL"]));
    } else {
        // Yahan "semester" ki jagah "subject" field check kar rahe hain
        q = query(collection(db, collectionName), 
            where("course", "in", [courseName, "ALL"]), 
            where("subject", "==", subjectName)
        );
    }

    try {
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            tbody.innerHTML = '<tr><td colspan="3" style="text-align:center;">No entries uploaded yet.</td></tr>';
            return;
        }

        let docsArray = [];
        querySnapshot.forEach((doc) => {
            docsArray.push(doc.data());
        });

        // Data ko Title ke hisaab se sort karna (e.g., IP Notes-1, IP Notes-2)
        docsArray.sort((a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
        });

        let html = '';
        let count = 1;
        
        docsArray.forEach((item) => {
            let buttonText = "Open Link";
            let iconClass = "fas fa-file-pdf";

            if(category === "syllabus") {
                buttonText = "Open Syllabus";
                iconClass = "fas fa-book"; 
            } else if(category === "notes") {
                buttonText = "Open Note";
            } else if(category === "question_paper") {
                buttonText = "Open Paper";
            } else if(category === "mu_result") {
                buttonText = "Open Result";
            }

            html += `
            <tr>
                <td class="col-no">${count}</td>
                <td>
                    <span class="sem-name">
                        <!-- Yahan style apply karke direct Red icon banaya gaya hai -->
                        <span class="folder-icon" style="background-color: rgba(244, 63, 94, 0.12); color: #dc2626;">
                            <i class="${iconClass}"></i>
                        </span> 
                        ${item.title} 
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
        tbody.innerHTML = '<tr><td colspan="3" style="text-align:center; color:red;">Error loading content.</td></tr>';
    }
};

    window.executeSearch = async function() {
        let input = document.getElementById("globalSearchInput").value.trim().toLowerCase();
        
        if(input === "") {
            alert("Please enter something to search!");
            return;
        }

        if(typeof hideAllViews === 'function') hideAllViews();
        const searchView = document.getElementById('search-view');
        if(searchView) searchView.style.display = 'block';
        
        const searchKeywordDisplay = document.getElementById('search-keyword-display');
        if(searchKeywordDisplay) searchKeywordDisplay.innerText = 'Showing results for: "' + input + '"';
        
        const tbody = document.getElementById("search-results-table");
        if(!tbody) return;

        tbody.innerHTML = '<tr><td colspan="3" style="text-align:center; padding: 20px;">Searching in database... <i class="fas fa-spinner fa-spin"></i></td></tr>';

        try {
            let resultsHTML = '';
            let count = 0;

            const notesSnap = await getDocs(query(collection(db, "uploaded_notes")));
            notesSnap.forEach((doc) => {
                let data = doc.data();
                if((data.title && data.title.toLowerCase().includes(input)) || 
                   (data.subject && data.subject.toLowerCase().includes(input)) || 
                   (data.course && data.course.toLowerCase().includes(input))) {
                    
                    resultsHTML += `
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                        <td style="padding: 15px;"><span style="background: #38bdf8; color: white; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: bold;">Notes</span></td>
                        <td style="padding: 15px; font-weight: 500; color: var(--main-text);">${data.course} - ${data.title}</td>
                        <td style="padding: 15px; text-align: right;"><a href="${data.link}" target="_blank" style="background: var(--brand-color); color: white; padding: 8px 15px; border-radius: 6px; text-decoration: none; font-size: 13px;">Open Note</a></td>
                    </tr>`;
                    count++;
                }
            });

            const sylSnap = await getDocs(query(collection(db, "uploaded_syllabus")));
            sylSnap.forEach((doc) => {
                let data = doc.data();
                if((data.title && data.title.toLowerCase().includes(input)) || 
                   (data.subject && data.subject.toLowerCase().includes(input)) || 
                   (data.course && data.course.toLowerCase().includes(input))) {
                    
                    resultsHTML += `
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                        <td style="padding: 15px;"><span style="background: #ef4444; color: white; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: bold;">Syllabus</span></td>
                        <td style="padding: 15px; font-weight: 500; color: var(--main-text);">${data.course} - ${data.title}</td>
                        <td style="padding: 15px; text-align: right;"><a href="${data.link}" target="_blank" style="background: var(--brand-color); color: white; padding: 8px 15px; border-radius: 6px; text-decoration: none; font-size: 13px;">Open Syllabus</a></td>
                    </tr>`;
                    count++;
                }
            });

            if(count === 0) {
                tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; padding: 30px; color: #64748b;">Oops! No notes or syllabus found for "<b>${input}</b>"</td></tr>`;
            } else {
                tbody.innerHTML = resultsHTML;
            }

        } catch (error) {
            console.error("Search Error:", error);
            tbody.innerHTML = '<tr><td colspan="3" style="text-align:center; color:red; padding: 20px;">Error loading search results.</td></tr>';
        }
    };

    window.updateAuthButton = function(name) {
        const authBtn = document.getElementById('authButton');
        if (authBtn && name) {
            const firstLetter = name.charAt(0).toUpperCase();
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
            authBtn.style.padding = "0"; 
            authBtn.style.border = "none";
            authBtn.style.cursor = "pointer";
            authBtn.title = "Logged in as: " + name;
            
            authBtn.onclick = function(event) {
                event.preventDefault();
                if(typeof window.toggleDropdown === 'function') window.toggleDropdown();
                else window.handleLogout();
            };
        }
    };
	// ==========================================
        // 100% FREE EMAIL OTP SYSTEM (EMAILJS)
        // ==========================================
        
        // 1. Apni EmailJS ki Public Key yahan daalein 👇
        emailjs.init("pKwWKfMJ_6Tpzu9mD"); 

        window.sendOTP = function() {
            // HTML ka id "signupPhone" hi hai, par hum isme email le rahe hain
            const email = document.getElementById('signupPhone').value.trim(); 
            const status = document.getElementById('signupStatus');
            const name = document.getElementById('signupName').value.trim();

            if(!email || !email.includes('@')) {
                status.innerText = "Please enter a valid Email Address.";
                status.style.color = "red";
                return;
            }

            status.innerText = "Sending OTP to your Email... ⏳";
            status.style.color = "var(--brand-color)";
            
            // 6-digit random OTP
            window.generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

            const templateParams = {
                to_email: email,
                to_name: name || "Student",
                otp: window.generatedOTP
            };

            // 2. Apni Service ID aur Template ID Yahan daalein 👇
           emailjs.send('service_4z4fiok', 'template_m7n5kus', templateParams)
                .then(function() {
                    status.innerText = "OTP Sent to your Email! 📩 Check inbox.";
                    status.style.color = "#10b981";
                    document.getElementById('phoneForm').style.display = 'none';
                    document.getElementById('otpForm').style.display = 'block';
                }, function(error) {
                    console.error("EmailJS Error:", error);
                    status.innerText = "Error sending Email! Try again.";
                    status.style.color = "red";
                });
        };

   window.verifyOTP = async function() {
    const otp = document.getElementById('signupOTP').value.trim();
    const status = document.getElementById('signupStatus');
    const name = document.getElementById('signupName').value;
    const className = document.getElementById('signupClass').value;
    const email = document.getElementById('signupPhone').value.trim();

    status.innerText = "Verifying OTP... ⏳";
    status.style.color = "var(--brand-color)";

    if(otp === window.generatedOTP && otp !== "") {
        try {
            // Seedha Firestore ka setDoc use karein (Bina window check ke)
            await setDoc(doc(db, "students", email), {
                fullName: name,
                email: email,
                studentClass: className,
                joinedAt: new Date().toISOString()
            });

            status.innerText = "Account Created Successfully! 🎉";
            status.style.color = "#10b981";

            localStorage.setItem("userName", name);
            if(typeof window.updateAuthButton === 'function') window.updateAuthButton(name);

            // 👇👇 YAHAN SE AVATAR AUR DROPDOWN UPDATE KA LOGIC HAI 👇👇
            if (name && name.length > 0) {
                // 1. Naam ka pehla letter nikalna
                const firstLetter = name.charAt(0).toUpperCase();
                
                // 2. Avatar icon me letter set karna
                const userInitialSpan = document.getElementById('userInitial');
                if (userInitialSpan) userInitialSpan.innerText = firstLetter;
                
                // 3. Avatar icon ko visible (flex) karna
                const userAvatarDiv = document.getElementById('userProfileAvatar');
                if (userAvatarDiv) userAvatarDiv.style.display = 'flex';

                // 4. Dropdown menu mein User ka Poora Naam aur Class set karna
                const displayUserName = document.getElementById('displayUserName');
                if (displayUserName) displayUserName.innerText = name;

                const displayUserClass = document.getElementById('displayUserClass');
                if (displayUserClass) displayUserClass.innerText = className || "BSC Student";

                // 5. Login/Join button header me ho toh hide karna
                const loginBtn = document.getElementById('loginBtn');
                if (loginBtn) loginBtn.style.display = 'none';
            }
            // 👆👆 AVATAR UPDATE LOGIC END 👆👆

            setTimeout(() => {
                if(typeof window.showHome === 'function') window.showHome();
                document.getElementById('phoneForm').style.display = 'block';
                document.getElementById('otpForm').style.display = 'none';
                document.getElementById('signupName').value = "";
                document.getElementById('signupPhone').value = ""; 
                document.getElementById('signupClass').value = "";
                document.getElementById('signupOTP').value = "";
                status.innerText = "";
            }, 1500);

        } catch (error) {
            console.error("Database Error Detail:", error);
            status.innerText = "DB Error: Please check console.";
            status.style.color = "red";
        }
    } else {
        status.innerText = "Invalid OTP! Kripya sahi OTP daalein.";
        status.style.color = "red";
    }
};
		// Login Page dikhane ka function
        window.showLogin = function() {
            console.log("showLogin function call hua!"); // Debugging ke liye

            // 1. Baaki saare views chhupa do (Admin view bhi)
            const homeView = document.getElementById('home-view');
            const signupView = document.getElementById('signup-view');
            const forgotPasswordView = document.getElementById('forgot-password-view');
            
            // YAHAN ADMIN VIEW KO CHHUPANE KI LINE JODI HAI 👇
            const adminView = document.getElementById('admin-view'); // Apne admin div ka ID yahan daalein
            
            if (homeView) homeView.style.display = 'none';
            if (signupView) signupView.style.display = 'none';
            if (forgotPasswordView) forgotPasswordView.style.display = 'none';
            
            // YAHAN ADMIN VIEW CHHUP RAHA HAI 👇
            if (adminView) adminView.style.display = 'none'; 

            // 2. Sirf login view dikhao
            const loginView = document.getElementById('login-view');
            if (loginView) {
                loginView.style.display = 'block';
            } else {
                console.error("login-view div nahi mila!");
            }
        };
