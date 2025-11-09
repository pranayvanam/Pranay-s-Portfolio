// ===============================
// SMOOTH PAGE LOAD & TRANSITIONS
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.4s ease-in-out";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 80);
});

// Instant and smooth transition (optimized for mobile)
function openPage(page) {
  document.body.style.transition = "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";
  document.body.style.opacity = "0";
  document.body.style.transform = "scale(0.98)";
  setTimeout(() => {
    window.location.href = page;
  }, 220);
}

// ===============================
// THEME TOGGLE (Dark/Light)
// ===============================
const toggle = document.getElementById("theme-toggle");
const icon = toggle.querySelector("i");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  icon.classList.replace("fa-moon", "fa-sun");
}

// Theme toggle click (mobile friendly)
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  icon.classList.toggle("fa-sun");

  // Store theme preference
  const mode = document.body.classList.contains("light-mode") ? "light" : "dark";
  localStorage.setItem("theme", mode);
});

// ===============================
// TOUCH OPTIMIZATION FOR MOBILE
// ===============================
document.querySelectorAll(".icon-box, .social-btn").forEach((btn) => {
  btn.addEventListener("touchstart", () => {
    btn.classList.add("touch-active");
  });
  btn.addEventListener("touchend", () => {
    setTimeout(() => btn.classList.remove("touch-active"), 200);
  });
});

// ===============================
// LIGHT SCROLL EFFECT
// ===============================
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  document.querySelectorAll(".icon-box").forEach((icon) => {
    icon.style.transform = `translateY(${y * 0.05}px) scale(1)`;
  });
});
