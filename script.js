// ========= 动态年份 =========
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ========= 主题切换（light / dark） =========
// 使用 body.dark，跟你的 CSS 一致

console.log("theme script loaded");

const themeToggleBtn = document.getElementById("themeToggle");

// 从 localStorage 读取之前的主题（如果有）
const savedTheme = localStorage.getItem("theme");
console.log("savedTheme:", savedTheme);

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  if (themeToggleBtn) themeToggleBtn.textContent = "☀"; // 暗色模式显示太阳
} else {
  if (themeToggleBtn) themeToggleBtn.textContent = "☾"; // 亮色模式显示月亮
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

// ========= （可选）Gallery Lightbox，如果以后要用再打开 =========
// 现在你的新 layout 没有 #galleryGrid / #lightbox，下面这段可以先注释掉，
// 或者保留也没关系，因为有 ?
