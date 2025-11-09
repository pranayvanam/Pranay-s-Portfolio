// ===============================
// SUPER SMOOTH PAGE LOAD
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.25s ease-out";
    requestAnimationFrame(() => {
      document.body.style.opacity = "1";
    });
  });
});

// ===============================
// LIGHTNING-FAST PAGE TRANSITIONS
// ===============================
function openPage(page) {
  document.body.style.transition = "opacity 0.2s ease-out, transform 0.2s ease-out";
  document.body.style.opacity = "0";
  document.body.style.transform = "translateY(5px) scale(0.99)";
  setTimeout(() => {
    window.location.href = `${page}?v=${Date.now()}`; // cache bust
  }, 150);
}

// ===============================
// THEME TOGGLE
// ===============================
const toggle = document.getElementById("theme-toggle");
const icon = toggle.querySelector("i");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  icon.classList.replace("fa-moon", "fa-sun");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  icon.classList.toggle("fa-sun");
  const mode = document.body.classList.contains("light-mode") ? "light" : "dark";
  localStorage.setItem("theme", mode);
});

// ===============================
// TOUCH OPTIMIZATION
// ===============================
document.querySelectorAll(".icon-box, .social-btn").forEach((btn) => {
  btn.addEventListener("touchstart", () => btn.classList.add("touch-active"));
  btn.addEventListener("touchend", () => setTimeout(() => btn.classList.remove("touch-active"), 150));
});

// ===============================
// GPU-ACCELERATED SCROLL EFFECT
// ===============================
window.addEventListener("scroll", () => {
  const y = window.scrollY * 0.05;
  document.querySelectorAll(".icon-box").forEach((icon) => {
    icon.style.transform = `translate3d(0, ${y}px, 0)`;
  });
});
