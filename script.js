// 🌙 Theme Toggle
const toggle = document.getElementById("theme-toggle");
if (toggle) {
  const icon = toggle.querySelector("i");
  const theme = localStorage.getItem("theme");

  if (theme === "light") {
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

// ⚡ Page Navigation with Smooth Transition
function openPage(page) {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.4s ease";
  setTimeout(() => {
    window.location.href = page;
  }, 200);
}

window.addEventListener("pageshow", () => {
  document.body.style.opacity = "1";
  document.body.style.transition = "opacity 0.5s ease";
});
