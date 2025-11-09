// 🌙 Theme Toggle
const toggle = document.getElementById("theme-toggle");
if (toggle) {
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
}

// ⚡ Page Transition (Instant, no blank screen)
function openPage(page) {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.3s ease";
  setTimeout(() => {
    window.location.href = page;
  }, 200);
}

window.addEventListener("pageshow", () => {
  document.body.style.opacity = "1";
  document.body.style.transition = "opacity 0.4s ease-in";
});

// 🧭 Parallax Effect (Smooth)
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  document.body.style.backgroundPositionY = `${scrollY * 0.5}px`;
});

// 📱 Touch Fix (Mobile click feedback)
document.querySelectorAll(".icon-box, .social-btn").forEach((btn) => {
  btn.addEventListener("touchstart", () => btn.classList.add("touched"));
  btn.addEventListener("touchend", () =>
    setTimeout(() => btn.classList.remove("touched"), 150)
  );
});
