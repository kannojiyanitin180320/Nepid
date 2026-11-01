// Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const mainNav = document.getElementById('mainNav');

        if (menuToggle && mainNav) {
            menuToggle.addEventListener('click', () => {
                mainNav.classList.toggle('nav-open');
            });

            document.querySelectorAll('.dropdown > a').forEach(link => {
                link.addEventListener('click', (e) => {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        link.parentElement.classList.toggle('mobile-open');
                    }
                });
            });
        }

        // View switching (single-page, no reload)
        function hideAllViews() {
            document.querySelectorAll('body > div[id]').forEach(function(el) {
                el.style.display = 'none';
            });
        }

        function showHome() {
            hideAllViews();
            document.getElementById('home-view').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showNotesIT() {
            hideAllViews();
            document.getElementById('notes-view-it').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showNotesITSub() {
            hideAllViews();
            document.getElementById('notes-view-it-sub').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
        function showITSub1DE() {
            hideAllViews();
            document.getElementById('notes-view-it-sub-de').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showITSub1OS() {
            hideAllViews();
            document.getElementById('notes-view-it-sub-os').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showITSub1DM() {
            hideAllViews();
            document.getElementById('notes-view-it-sub-dm').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showITSub1CS() {
    hideAllViews();
    document.getElementById('notes-view-it-sub-cs').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    mainNav.classList.remove('nav-open');
    }
	
	function showNotesITSub2() {
    hideAllViews(); 
    document.getElementById('notes-view-it-sub2').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof mainNav !== 'undefined' && mainNav) {
        mainNav.classList.remove('nav-open');
    }
}
	
	function showITSub2OOP() {    <!-- kingring -->
            hideAllViews();
            document.getElementById('notes-view-it-sub2-oop').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

            function showITSub2OS() {
        hideAllViews();
       document.getElementById('notes-view-it-sub-os').style.display = 'block';
       window.scrollTo({ top: 0, behavior: 'smooth' });
       if (typeof mainNav !== 'undefined' && mainNav) mainNav.classList.remove('nav-open');

       if (window.loadCategoryData) {
        // Yahan exact Firebase wala naam pass kiya gaya hai (with brackets)
        loadCategoryData("notes", "BSC-IT", "Operating System", "table-os-notes");
    }
}

	     function showITSub2WP() {
            hideAllViews();
            document.getElementById('notes-view-it-sub2-wp').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showITSub2NSM() {
            hideAllViews();
            document.getElementById('notes-view-it-sub2-nsm').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showITSub2GC() {
            hideAllViews();
            document.getElementById('notes-view-it-sub2-gc').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showNotesITSub3() {
            hideAllViews();
            document.getElementById('notes-view-it-sub3').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showITSub3PP() {
            hideAllViews();
            document.getElementById('notes-view-it-sub3-pp').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showITSub3DS() {
            hideAllViews();
            document.getElementById('notes-view-it-sub3-ds').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showITSub3CN() {
            hideAllViews();
            document.getElementById('notes-view-it-sub3-cn').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showITSub3DBMS() {
            hideAllViews();
            document.getElementById('notes-view-it-sub3-dbms').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showITSub3AM() {
            hideAllViews();
            document.getElementById('notes-view-it-sub3-am').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showNotesITSub4() {
            hideAllViews();
            document.getElementById('notes-view-it-sub4').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showITSub4IES() {
            hideAllViews();
            document.getElementById('notes-view-it-sub4-ies').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showNotesITSub5() {
            hideAllViews();
            document.getElementById('notes-view-it-sub5').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showNotesITSub6() {
            hideAllViews();
            document.getElementById('notes-view-it-sub6').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showNotesCS() {
            hideAllViews();
            document.getElementById('notes-view-cs').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showNotesCSSub1() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub1').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showNotesCSSub2() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub2').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showNotesCSSub3() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub3').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showNotesCSSub4() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub4').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showNotesCSSub5() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub5').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showNotesCSSub6() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub6').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showNotesDS() {
            hideAllViews();
            document.getElementById('notes-view-ds').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showNotesDSSub1() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub1').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
        
        function showNotesDSSub1Sub() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub1-sub').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showNotesDSSub2() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub2').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showNotesDSSub2Sub() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub2-sub').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showNotesDSSub3() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub3').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showNotesDSSub4() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub4').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showNotesDSSub5() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub5').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showNotesDSSub6() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub6').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showQPIT() {
            hideAllViews();
            document.getElementById('qp-view-it').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showQPCS() {
            hideAllViews();
            document.getElementById('qp-view-cs').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showQPDS() {
            hideAllViews();
            document.getElementById('qp-view-ds').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showSylIT() {
            hideAllViews();
            document.getElementById('syl-view-it').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showSylCS() {
            hideAllViews();
            document.getElementById('syl-view-cs').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showSylDS() {
            hideAllViews();
            document.getElementById('syl-view-ds').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showResIT() {
            hideAllViews();
            document.getElementById('res-view-it').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showResCS() {
            hideAllViews();
            document.getElementById('res-view-cs').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }

        function showResDS() {
            hideAllViews();
            document.getElementById('res-view-ds').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showNotesDSSub1DBMS() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub1-dbms').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showITSub4CJ() {
            hideAllViews();
            document.getElementById('notes-view-it-sub4-cj').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showITSub4COST() {
            hideAllViews();
            document.getElementById('notes-view-it-sub4-cost').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
        function showITSub4SE() {
            hideAllViews();
            document.getElementById('notes-view-it-sub4-se').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showITSub4CGA() {
		hideAllViews();
		document.getElementById('notes-view-it-sub4-cga') .style.display = 'block';
		window.scrollTO({ top: 0, behavior: ' smooth' });
		mainNav.classList.remove('nav-open');
		}
		function showITSub5SPM() {
            hideAllViews();
            document.getElementById('notes-view-it-sub5-spm').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showITSub5IoT() {
            hideAllViews();
            document.getElementById('notes-view-it-sub5-iot').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showITSub5AWP() {
            hideAllViews();
            document.getElementById('notes-view-it-sub5-awp').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showITSub5AI() {
            hideAllViews();
            document.getElementById('notes-view-it-sub5-ai').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showITSub5LSA() {
            hideAllViews();
            document.getElementById('notes-view-it-sub5-lsa').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showITSub5EJ() {
            hideAllViews();
            document.getElementById('notes-view-it-sub5-ej').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showITSub5NGT() {
            hideAllViews();
            document.getElementById('notes-view-it-sub5-ngt').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showITSub6SQA() {
            hideAllViews();
            document.getElementById('notes-view-it-sub6-sqa').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showITSub6SIC() {
            hideAllViews();
            document.getElementById('notes-view-it-sub6-sic').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showITSub6BI() {
            hideAllViews();
            document.getElementById('notes-view-it-sub6-bi').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showITSub6PGIS() {
            hideAllViews();
            document.getElementById('notes-view-it-sub6-pgis').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showITSub6EN() {
            hideAllViews();
            document.getElementById('notes-view-it-sub6-en').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showITSub6ITSM() {
            hideAllViews();
            document.getElementById('notes-view-it-sub6-itsm').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showITSub6CL() {
            hideAllViews();
            document.getElementById('notes-view-it-sub6-cl').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub1DBMS() {            // kinglion 
            hideAllViews();
            document.getElementById('notes-view-cs-sub1-dbms').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
            
        }
        
		function showCSSub1PWP1() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub1-pwp1').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub1FOSS() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub1-foss').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub1DBS() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub1-dbs').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub1DM() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub1-dm').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub1DSIP() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub1-dsip').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub1SSD() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub1-ssd').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub2PWC() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub2-pwc').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub2PWP2() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub2-pwp2').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub2Linux() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub2-linux').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub2DS() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub2-ds').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub2Calculus() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub2-calculus').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub2SMTH() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub2-smth').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub2GT() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub2-gt').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub3TOC() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub3-toc').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub3CJ() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub3-cj').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub3OS() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub3-os').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub3DBMS() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub3-dbms').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub3CGT() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub3-cgt').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub3PCIP() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub3-pcip').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub3WP() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub3-wp').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub4FOA() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub4-foa').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub4AJ() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub4-aj').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub4CN() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub4-cn').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub4SE() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub4-se').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub4LAUP() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub4-laup').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub4ADF() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub4-adf').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub5AI() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub5-ai').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub5LSA() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub5-lsa').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub5STQA() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub5-stqa').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub5INS() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub5-ins').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub5AIOT() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub5-aiot').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub5WS() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub5-ws').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub5GP() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub5-gp').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub6WSN() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub6-wsn').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub6CC() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub6-cc').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub6CF() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub6-cf').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub6IR() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub6-ir').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub6DIP() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub6-dip').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub6DS() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub6-ds').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showCSSub6EH() {
            hideAllViews();
            document.getElementById('notes-view-cs-sub6-eh').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showDSSub1IDS() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub1-ids').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showDSSub1PIC() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub1-pic').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showDSSub1DS() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub1-ds').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showDSSub1LA() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub1-la').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showDSSub1WT() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub1-wt').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showDSSub1BC() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub1-bc').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showDSSub1DBMS() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub1-dbms').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showDSSub2DE() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub2-de').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showDSSub2RP() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub2-rp').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showDSSub2PD() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub2-pd').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showDSSub2CALC() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub2-calc').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showDSSub2ES() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub2-es').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showDSSub3IM() {
            hideAllViews();
            document.getElementById('notes-view-ds-sub3-im').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showSignUp() {
            hideAllViews();
            document.getElementById('signup-view').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showLogin() {
            hideAllViews();
            document.getElementById('login-view').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showForgotPassword() {
            hideAllViews();
            document.getElementById('forgot-password-view').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showAboutUs() {
            hideAllViews();
            document.getElementById('about-us-view').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showUpdates() {
            hideAllViews();
            document.getElementById('updates-view').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            mainNav.classList.remove('nav-open');
        }
		function showAdminLogin() {
    hideAllViews();
    document.getElementById('admin-login-view').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    mainNav.classList.remove('nav-open');
}
        function showAdminDashboard() {
    hideAllViews();
    document.getElementById('admin-dashboard-view').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    mainNav.classList.remove('nav-open');
}
		function toggleDarkMode() {
            const body = document.body;
            const themeBtn = document.getElementById('themeToggle');
            const icon = themeBtn.querySelector('i');
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun'); 
                localStorage.setItem('theme', 'dark'); 
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon'); 
                localStorage.setItem('theme', 'light'); i
            }
        }
        window.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-mode');
                
                
                const themeBtn = document.getElementById('themeToggle');
                if (themeBtn) {
                    const icon = themeBtn.querySelector('i');
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                }
            }
        });
		function togglePassword(inputId, iconElement) {
    const input = document.getElementById(inputId);
    
    // Agar password hide hai, toh show karo
    if (input.type === "password") {
        input.type = "text";
        // Eye icon ko change karke Eye-slash (kata hua aankh) banao
        iconElement.classList.remove("fa-eye");
        iconElement.classList.add("fa-eye-slash");
    } 
    // Agar show hai, toh hide karo
    else {
        input.type = "password";
        // Wapas normal Eye icon lagao
        iconElement.classList.remove("fa-eye-slash");
        iconElement.classList.add("fa-eye");
    }
}
    function showSylIT() {
    hideAllViews();
    document.getElementById('syl-view-it').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof mainNav !== 'undefined' && mainNav) mainNav.classList.remove('nav-open');

    // Ye line database se Syllabus layegi
    if (window.loadCategoryData) {
        // "ALL" isliye likha hai taaki saare semesters ek hi page par list ho jayein
        loadCategoryData("syllabus", "BSC-IT", "ALL", "syl-table-it"); 
    }
}
   function showSylCS() {
    hideAllViews();
    document.getElementById('syl-view-cs').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof mainNav !== 'undefined' && mainNav) mainNav.classList.remove('nav-open');

    // Ye line database se Syllabus layegi
    if (window.loadCategoryData) {
        // "ALL" isliye likha hai taaki saare semesters ek hi page par list ho jayein
        loadCategoryData("syllabus", "BSC-CS", "ALL", "syl-table-cs"); 
    }
}
 function showSylDS() {
    hideAllViews();
    document.getElementById('syl-view-ds').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof mainNav !== 'undefined' && mainNav) mainNav.classList.remove('nav-open');

    // Ye line database se Syllabus layegi
    if (window.loadCategoryData) {
        // "ALL" isliye likha hai taaki saare semesters ek hi page par list ho jayein
        loadCategoryData("syllabus", "BSC-DS", "ALL", "syl-table-ds"); 
    }
}
    function showResDS() {
    hideAllViews();
    document.getElementById('res-view-ds').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof mainNav !== 'undefined' && mainNav) mainNav.classList.remove('nav-open');

    if (window.loadCategoryData) {
        loadCategoryData("mu_result", "BSC-DS", "ALL", "res-table-ds"); 
    }
}
 function showResCS() {
    hideAllViews();
    document.getElementById('res-view-cs').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof mainNav !== 'undefined' && mainNav) mainNav.classList.remove('nav-open');

    if (window.loadCategoryData) {
        loadCategoryData("mu_result", "BSC-CS", "ALL", "res-table-cs"); 
    }
}
 function showResIT() {
    hideAllViews();
    document.getElementById('res-view-it').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof mainNav !== 'undefined' && mainNav) mainNav.classList.remove('nav-open');
	

   if (window.loadCategoryData) {
        loadCategoryData("mu_result", "BSC-IT", "ALL", "res-table-it"); 
    }
 }
function showITSub1DBMS() {
    hideAllViews();
    document.getElementById('notes-view-it-sub-dbms').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof mainNav !== 'undefined' && mainNav) mainNav.classList.remove('nav-open');

    if (window.loadCategoryData) {
        // Yahan exact Firebase wala naam pass kiya gaya hai (with brackets)
        loadCategoryData("notes", "BSC-IT", "Database Management System (DBMS)", "table-dbms-notes"); 
    }
}
function showITSub1CS() {
    hideAllViews();
    document.getElementById('notes-view-it-sub-cs').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof mainNav !== 'undefined' && mainNav) mainNav.classList.remove('nav-open');

    if (window.loadCategoryData) {
        // Yahan exact Firebase wala naam pass kiya gaya hai (with brackets)
        loadCategoryData("notes", "BSC-IT", "Communication Skill", "table-cs-notes"); 
    }
}
function showITSub1SS() {
    hideAllViews();
    document.getElementById('notes-view-it-sub-ss').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof mainNav !== 'undefined' && mainNav) mainNav.classList.remove('nav-open');

    if (window.loadCategoryData) {
        // Yahan exact Firebase wala naam pass kiya gaya hai (with brackets)
        loadCategoryData("notes", "BSC-IT", "Soft Skill", "table-ss-notes"); 
    }
}
function showITSub1IKS() {
    hideAllViews();
    document.getElementById('notes-view-it-sub-iks').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof mainNav !== 'undefined' && mainNav) mainNav.classList.remove('nav-open');

    if (window.loadCategoryData) {
        // Yahan exact Firebase wala naam pass kiya gaya hai (with brackets)
        loadCategoryData("notes", "BSC-IT", "Indian Knowledge System", "table-iks-notes"); 
    }
}
function showITSub1PC() {
    hideAllViews();
    document.getElementById('notes-view-it-sub-pc').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof mainNav !== 'undefined' && mainNav) mainNav.classList.remove('nav-open');

    if (window.loadCategoryData) {
        // Yahan exact Firebase wala naam pass kiya gaya hai (with brackets)
        loadCategoryData("notes", "BSC-IT", "Programming with C", "table-pc-notes"); 
    }
}
   
 function showITSub2WD() {
    hideAllViews();
    // ID correct kar di gayi hai (sub2-oop)
    document.getElementById('notes-view-it-sub2-wd').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof mainNav !== 'undefined' && mainNav) mainNav.classList.remove('nav-open');

    if (window.loadCategoryData) {
        // Firebase call bilkul sahi hai
        loadCategoryData("notes", "BSC-IT", "Web Designing", "table-wd-notes");
    }
}
function showITSub2OOP() {
    hideAllViews();
    // ID correct kar di gayi hai (sub2-oop)
    document.getElementById('notes-view-it-sub2-oop').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof mainNav !== 'undefined' && mainNav) mainNav.classList.remove('nav-open');

    if (window.loadCategoryData) {
        // Firebase call bilkul sahi hai
        loadCategoryData("notes", "BSC-IT", "Object Oriented Programming", "table-oop-notes");
    }
}
function showITSub2OS() {
    hideAllViews();
    // ID correct kar di gayi hai (sub2-oop)
    document.getElementById('notes-view-it-sub2-os').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof mainNav !== 'undefined' && mainNav) mainNav.classList.remove('nav-open');

    if (window.loadCategoryData) {
        // Firebase call bilkul sahi hai
        loadCategoryData("notes", "BSC-IT", "Operating System", "table-os-notes");
    }
}
 function showITSub2PLSQL() {
    hideAllViews();
    // ID correct kar di gayi hai (sub2-oop)
    document.getElementById('notes-view-it-sub2-plsql').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof mainNav !== 'undefined' && mainNav) mainNav.classList.remove('nav-open');

    if (window.loadCategoryData) {
        // Firebase call bilkul sahi hai
        loadCategoryData("notes", "BSC-IT", "PL/SQL", "table-plsql-notes");
    }
}
function showITSub3PP() {
    hideAllViews();
    // ID correct kar di gayi hai (sub2-oop)
    document.getElementById('notes-view-it-sub3-pp').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof mainNav !== 'undefined' && mainNav) mainNav.classList.remove('nav-open');

    if (window.loadCategoryData) {
        // Firebase call bilkul sahi hai
        loadCategoryData("notes", "BSC-IT", "Python Programming", "table-pp-notes");
    }
}
function showITSub2GC() {
    hideAllViews();
    // ID correct kar di gayi hai (sub2-oop)
    document.getElementById('notes-view-it-sub2-gc').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof mainNav !== 'undefined' && mainNav) mainNav.classList.remove('nav-open');

    if (window.loadCategoryData) {
        // Firebase call bilkul sahi hai
        loadCategoryData("notes", "BSC-IT", "Green Computing", "table-gc-notes");
    }
}
	function showITSub3DS() {
    hideAllViews();
    // ID correct kar di gayi hai (sub2-oop)
    document.getElementById('notes-view-it-sub3-ds').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof mainNav !== 'undefined' && mainNav) mainNav.classList.remove('nav-open');

    if (window.loadCategoryData) {
        // Firebase call bilkul sahi hai
        loadCategoryData("notes", "BSC-IT", "Data Structure", "table-ds-notes");
    }
}
	function showITSub3CN() {
    hideAllViews();
    // ID correct kar di gayi hai (sub2-oop)
    document.getElementById('notes-view-it-sub3-cn').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof mainNav !== 'undefined' && mainNav) mainNav.classList.remove('nav-open');

    if (window.loadCategoryData) {
        // Firebase call bilkul sahi hai
        loadCategoryData("notes", "BSC-IT", "Computer Networks", "table-cn-notes");
    }
}
	function showITSub4CJ() {
    hideAllViews();
    document.getElementById('notes-view-it-sub4-cj').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof mainNav !== 'undefined' && mainNav) {
        mainNav.classList.remove('nav-open');
    }
    if (window.loadCategoryData) {
        loadCategoryData("notes", "BSC-IT", "Advance Java", "table-cj-notes");
    }
}
window.showCSSub1DBMS = function() {
    if (typeof window.hideAllViews === 'function') {
        window.hideAllViews();
    }

    const view = document.getElementById('notes-view-cs-sub1-dbms');
    if (view) {
        view.style.display = 'block';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (typeof mainNav !== 'undefined' && mainNav) {
        mainNav.classList.remove('nav-open');
    }

    if (typeof window.loadCategoryData === 'function') {
        window.loadCategoryData("notes", "BSC-CS", "Database Management System", "table-dbms-notes");
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
// Is function ko apni script.js file ke bottom ya function list mein kahin par bhi add kar dein.
window.showQuestionPapersIT = function() {
    // 1. Baaki sabhi views ko hide karein (Ensure ki window.hideAllViews exist karta ho)
    if (typeof window.hideAllViews === 'function') {
        window.hideAllViews();
    }

    // 2. Question papers wale section ko show karein
    const qpView = document.getElementById('question-papers-it-view');
    if (qpView) {
        qpView.style.display = 'block';
    } else {
        console.error("Error: 'question-papers-it-view' ID wala div HTML me nahi mila!");
    }

    // 3. Page ko smoothly top par scroll karein
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 4. Agar mobile me menu open hai, toh use close karein
    const mainNav = document.getElementById('mainNav');
    if (mainNav) {
        mainNav.classList.remove('nav-open');
    }
};
window.showITSemester1 = function() {
    if (typeof window.hideAllViews === 'function') {
        window.hideAllViews();
    }
    const sem1View = document.getElementById('view-it-semester-1');
    if (sem1View) {
        sem1View.style.display = 'block';
    } else {
        console.error("Error: 'view-it-semester-1' div HTML me nahi mila!");
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const mainNav = document.getElementById('mainNav');
    if (mainNav) {
        mainNav.classList.remove('nav-open');
    }
};
window.showITSemester5 = function() {
    if (typeof window.hideAllViews === 'function') {
        window.hideAllViews();
    }
    const sem5View = document.getElementById('view-it-semester-5');
    if (sem5View) {
        sem5View.style.display = 'block';
    } else {
        console.error("Error: 'view-it-semester-5' div HTML me nahi mila!");
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const mainNav = document.getElementById('mainNav');
    if (mainNav) {
        mainNav.classList.remove('nav-open');
    }
};
window.showCSSemester5 = function() {
    if (typeof window.hideAllViews === 'function') window.hideAllViews();
    
    const sem5ViewCS = document.getElementById('view-cs-semester-5');
    if (sem5ViewCS) {
        sem5ViewCS.style.display = 'block';
    } else {
        console.error("Error: 'view-cs-semester-5' div HTML me nahi mila!");
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const mainNav = document.getElementById('mainNav');
    if (mainNav) mainNav.classList.remove('nav-open');
};
 window.showCSSemester5 = function() {
    if (typeof window.hideAllViews === 'function') window.hideAllViews();
    
    const sem5ViewCS = document.getElementById('view-cs-semester-5');
    if (sem5ViewCS) sem5ViewCS.style.display = 'block';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const mainNav = document.getElementById('mainNav');
    if (mainNav) mainNav.classList.remove('nav-open');

    if (typeof window.loadCategoryData === 'function') {
       
        window.loadCategoryData("question_paper", "BSC-CS", "Semester 5 Question Papers", "table-cs-sem5-data");
    }
};
window.showCSSemester5 = function() {
    if (typeof window.hideAllViews === 'function') window.hideAllViews();
    
    const sem5ViewCS = document.getElementById('view-cs-semester-5');
    if (sem5ViewCS) sem5ViewCS.style.display = 'block';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const mainNav = document.getElementById('mainNav');
    if (mainNav) mainNav.classList.remove('nav-open');

    if (typeof window.loadCategoryData === 'function') {
        // Yahan exact Firebase wala data fetch ho raha hai
        window.loadCategoryData("question_paper", "BSC-CS", "Semester 5 Question Papers", "table-cs-sem5-data");
    }
};
window.showCSSemester5 = function() {
    if (typeof window.hideAllViews === 'function') window.hideAllViews();
    
    const sem5ViewCS = document.getElementById('view-cs-semester-5');
    if (sem5ViewCS) sem5ViewCS.style.display = 'block';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const mainNav = document.getElementById('mainNav');
    if (mainNav) mainNav.classList.remove('nav-open');

    if (typeof window.loadCategoryData === 'function') {
        // Yeh akeli line ab aapke Sem-5 ke saare papers ek sath table mein load kar degi
        window.loadCategoryData("question_paper", "BSC-CS", "Semester 5 Question Papers", "table-cs-sem5-data");
    }
};
