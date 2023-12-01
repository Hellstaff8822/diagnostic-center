function navToggle() {
	document.getElementById("headerUl").classList.toggle("_active");
	document.getElementById("html").classList.toggle("_overflow");
}

document.getElementById("copyright").textContent = new Date().getFullYear();


function themeToggle() {
	document.getElementById("html").classList.toggle("_theme");
	const isDarkMode = localStorage.getItem("darkMode") === "enabled";
	if (isDarkMode) {
		localStorage.setItem("darkMode", null);
	} else {
		localStorage.setItem("darkMode", 'enabled');
	}
}

document.addEventListener("DOMContentLoaded", function () {

	const isDarkMode = localStorage.getItem("darkMode") === "enabled";


	if (isDarkMode) {
		document.getElementById("html").classList.add("_theme");
	}
});