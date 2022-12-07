(function(document) {
	"use strict";

	const ready = (callback) => {
	if (document.readyState != "loading") callback();
		else document.addEventListener("DOMContentLoaded", callback);
	}

	ready(() => { 
		const dismiss = document.querySelector(".dismiss"),
			sidebar = document.querySelector(".sidebar"),
			overlay = document.querySelector(".overlay"),
			openmenu = document.querySelector(".open-menu");
		if (sidebar) {	
			dismiss.addEventListener('click', () => {sidebar.classList.remove('active'),overlay.classList.remove('active')});
			overlay.addEventListener('click', () => {sidebar.classList.remove('active'),overlay.classList.remove('active')});
			openmenu.addEventListener('click', (e) =>  {e.preventDefault(),sidebar.classList.add('active'),overlay.classList.add('active')});
			document.querySelector(".nav-link").addEventListener('click', () => {sidebar.classList.remove('active'),overlay.classList.remove('active')});	
		}
	});
	
})(document); // End of use strict