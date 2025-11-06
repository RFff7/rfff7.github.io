// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();


// Theme toggle (light/dark) — persists with localStorage
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved === 'dark') root.classList.add('dark');


function updateIcon(){ toggle.textContent = root.classList.contains('dark') ? '☼' : '☾'; }
updateIcon();


toggle?.addEventListener('click', () => {
root.classList.toggle('dark');
localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
updateIcon();
});


// ✅ Simple lightbox for gallery
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const grid = document.getElementById('galleryGrid');

grid?.addEventListener('click', (e) => {
  const btn = e.target.closest('button.thumb');
  if (!btn) return;

  const thumb = btn.querySelector('img');
  const candidate = btn.getAttribute('data-full');
  const fallback = thumb?.src;

  // ✅ Try full image; fallback to thumb if broken
  lightboxImg.onerror = () => { 
    lightboxImg.src = fallback; 
  };

  lightboxImg.src = (candidate && candidate.trim()) ? candidate : fallback;

  lightbox.showModal();
});

// Close actions
const closeBtn = document.querySelector('#lightbox .close');

// 点击“×”关闭
closeBtn?.addEventListener('click', () => lightbox.close());

// 点遮罩关闭（已加过也可以保留）
lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.close();
});

// 按 Esc 关闭（保险）
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox?.open) lightbox.close();
});

