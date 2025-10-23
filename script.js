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


// Simple lightbox for gallery
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');


document.getElementById('galleryGrid')?.addEventListener('click', (e) => {
const btn = e.target.closest('button.thumb');
if (!btn) return;
const src = btn.getAttribute('data-full') || btn.querySelector('img')?.src;
lightboxImg.src = src;
lightbox.showModal();
});


lightbox?.addEventListener('click', (e) => {
if (e.target === lightbox) lightbox.close();
});
