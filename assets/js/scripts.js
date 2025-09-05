const toggle = document.getElementById("toggleTheme");
const html = document.documentElement;

toggle.addEventListener("click", () => {
  const theme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", theme);
  toggle.classList.toggle("bi-sun");
  toggle.classList.toggle("bi-moon");
});