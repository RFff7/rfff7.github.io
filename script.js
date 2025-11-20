// Dynamic year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

console.log("theme script loaded");

const themeToggleBtn = document.getElementById("themeToggle");

// 从 localStorage 读取之前的主题（如果有）
const savedTheme = localStorage.getItem("theme");
console.log("savedTheme:", savedTheme);

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  if (themeToggleBtn) themeToggleBtn.textContent = "☀";
} else {
  if (themeToggleBtn) themeToggleBtn.textContent = "☾";
}

// 点击切换主题
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    console.log("theme toggle clicked");

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    console.log("isDark:", isDark);

    if (isDark) {
      themeToggleBtn.textContent = "☀";
      localStorage.setItem("theme", "dark");
    } else {
      themeToggleBtn.textContent = "☾";
      localStorage.setItem("theme", "light");
    }
  });
}
