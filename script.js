// ========= 动态年份 =========
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ========= 主题切换（light / dark） =========
// 使用 body.dark，和 CSS 一致

const themeToggleBtn = document.getElementById("themeToggle");

// 从 localStorage 读取之前的主题（如果有）
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  if (themeToggleBtn) themeToggleBtn.textContent = "☀";
} else {
  if (themeToggleBtn) themeToggleBtn.textContent = "☾";
}

// 点击切换主题
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    if (isDark) {
      themeToggleBtn.textContent = "☀";
      localStorage.setItem("theme", "dark");
    } else {
      themeToggleBtn.textContent = "☾";
      localStorage.setItem("theme", "light");
    }
  });
}

// ========= 图片 Overlay 预览 =========
const thumbImages = document.querySelectorAll(".thumb img");
const overlay = document.getElementById("imgOverlay");
const overlayImg = document.getElementById("imgOverlayImg");
const overlayClose = document.querySelector(".img-overlay-close");

console.log("thumbImages count:", thumbImages.length);

thumbImages.forEach((img) => {
  img.addEventListener("click", () => {
    if (!overlay || !overlayImg) return;
    const src = img.getAttribute("data-full") || img.src;
    overlayImg.src = src;
    overlay.classList.add("visible");
  });
});

// 关闭按钮
overlayClose?.addEventListener("click", () => {
  overlay?.classList.remove("visible");
});

// 点黑色背景也关闭
overlay?.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("visible");
  }
});

// Esc 键关闭
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay?.classList.contains("visible")) {
    overlay.classList.remove("visible");
  }
});