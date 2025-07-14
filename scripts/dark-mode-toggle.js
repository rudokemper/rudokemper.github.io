const toggle = document.getElementById("darkModeToggle");
const icon = toggle.querySelector(".icon");
const body = document.body;

function setIcon(isDark) {
  icon.textContent = isDark ? "🌞" : "🌙";
}

// Initialize
const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
const saved = localStorage.getItem("darkMode");
const shouldBeDark = saved === "true" || (saved === null && prefersDark);

if (shouldBeDark) {
  body.classList.add("dark");
  setIcon(true);
} else {
  setIcon(false);
}

toggle.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark");
  setIcon(isDark);
  localStorage.setItem("darkMode", isDark);
});
