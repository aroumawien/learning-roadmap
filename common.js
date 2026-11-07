// Shared navigation, theme and scroll backgrounds on every page.
(() => {
  const toggle = document.getElementById('themeToggle');
  const themeKey = 'devpath-theme-v1';
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    toggle.textContent = theme === 'dark' ? '☀' : '☾';
    toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
  let theme = 'dark';
  try { theme = localStorage.getItem(themeKey) || 'dark'; } catch {}
  applyTheme(theme === 'light' ? 'light' : 'dark');
  toggle.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem(themeKey, next); } catch {}
  });
  const menu = document.getElementById('hubMenu');
  const menuToggle = document.getElementById('menuToggle');
  const more = document.getElementById('moreToggle');
  const dropdown = more.closest('.nav-dropdown');
  const current = location.pathname.split('/').pop() || 'index.html';
  menu.querySelectorAll('a').forEach(a => {
    if (a.getAttribute('href') === current) {
      a.setAttribute('aria-current', 'page');
      if (a.closest('.dropdown-panel')) more.classList.add('current-parent');
    }
  });
  menuToggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  more.addEventListener('click', () => {
    const open = dropdown.classList.toggle('open');
    more.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', e => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
      more.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    const hadDropdown = dropdown.classList.contains('open') || dropdown.contains(document.activeElement);
    dropdown.classList.remove('open');
    more.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    if (hadDropdown) more.focus(); else menuToggle.focus();
  });
  const hero = document.getElementById('home');
  const header = document.querySelector('.site-header');
  function updateBackground() {
    document.body.classList.toggle('past-hero', hero.getBoundingClientRect().bottom <= header.getBoundingClientRect().height);
  }
  let pending = false;
  addEventListener('scroll', () => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => {updateBackground(); pending = false;});
  }, {passive: true});
  addEventListener('resize', updateBackground);
  addEventListener('pageshow', updateBackground);
  updateBackground();
})();
