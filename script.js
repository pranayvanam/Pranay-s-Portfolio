// Smooth fade-in on page load
window.addEventListener("load", () => {
  document.body.style.transition = "opacity 0.6s ease-in-out";
  document.body.style.opacity = "1";
});

// Smooth transition between pages
function openPage(page) {
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = page;
  }, 400);
}

// ======================
// DARK / LIGHT THEME TOGGLE
// ======================
const toggle = document.getElementById("theme-toggle");
const icon = toggle.querySelector("i");

// Load saved theme from localStorage
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  icon.classList.replace("fa-moon", "fa-sun");
}

// Theme toggle click handler
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "light");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "dark");
  }
});
