//  Footer Date and Last Modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
// Toggle the "open" class on the menu and change hamburger icon
hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
  hamburger.textContent = menu.classList.contains("open") ? "X" : "☰";
});