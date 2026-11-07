// Shared navigation, theme and background behaviour.
(() => {
  // =====================================================
  // 1. DARK AND LIGHT MODES
  // =====================================================

  const themeToggle = document.getElementById('themeToggle');
  const themeKey = 'devpath-theme-v1';

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;

    themeToggle.textContent = theme === 'dark' ? '☀' : '☾';

    themeToggle.setAttribute(
      'aria-label',
      theme === 'dark'
        ? 'Switch to light mode'
        : 'Switch to dark mode'
    );
  }

  let savedTheme = 'dark';

  try {
    savedTheme = localStorage.getItem(themeKey) || 'dark';
  } catch {
    // Continue using the default if storage is unavailable.
  }

  applyTheme(savedTheme === 'light' ? 'light' : 'dark');

  themeToggle.addEventListener('click', () => {
    const nextTheme =
      document.documentElement.dataset.theme === 'dark'
        ? 'light'
        : 'dark';

    applyTheme(nextTheme);

    try {
      localStorage.setItem(themeKey, nextTheme);
    } catch {
      // The theme still works without browser storage.
    }
  });

  // =====================================================
  // 2. NAVIGATION ELEMENTS
  // =====================================================

  const menu = document.getElementById('hubMenu');
  const menuToggle = document.getElementById('menuToggle');
  const moreToggle = document.getElementById('moreToggle');
  const dropdown = moreToggle.closest('.nav-dropdown');

  // Highlight the current page.
  const currentPage =
    location.pathname.split('/').pop() || 'index.html';

  menu.querySelectorAll('a').forEach((link) => {
    if (link.getAttribute('href') === currentPage) {
      link.setAttribute('aria-current', 'page');

      if (link.closest('.dropdown-panel')) {
        moreToggle.classList.add('current-parent');
      }
    }
  });

  // =====================================================
  // 3. CONTROL THE DROPDOWN AND MOBILE MENU
  // =====================================================

  function setMoreOpen(isOpen) {
    dropdown.classList.toggle('open', isOpen);

    moreToggle.setAttribute(
      'aria-expanded',
      String(isOpen)
    );
  }

  function setMenuOpen(isOpen) {
    menu.classList.toggle('open', isOpen);

    menuToggle.setAttribute(
      'aria-expanded',
      String(isOpen)
    );

    // Reset the submenu when the main menu closes.
    if (!isOpen) {
      setMoreOpen(false);
    }
  }

  // Open or close the main mobile navigation.
  menuToggle.addEventListener('click', () => {
    setMenuOpen(!menu.classList.contains('open'));
  });

  // Open or close More courses with a tap or click.
  moreToggle.addEventListener('click', () => {
    setMoreOpen(!dropdown.classList.contains('open'));
  });

  // =====================================================
  // 4. DESKTOP HOVER ONLY
  // =====================================================

  // Touchscreens use taps.
  // Desktop mouse users can also hover.
  const desktopHover = window.matchMedia(
    '(min-width: 1025px) and (hover: hover) and (pointer: fine)'
  );

  dropdown.addEventListener('pointerenter', (event) => {
    if (
      desktopHover.matches &&
      event.pointerType === 'mouse'
    ) {
      setMoreOpen(true);
    }
  });

  dropdown.addEventListener('pointerleave', (event) => {
    if (
      desktopHover.matches &&
      event.pointerType === 'mouse' &&
      !dropdown.contains(document.activeElement)
    ) {
      setMoreOpen(false);
    }
  });

  // =====================================================
  // 5. CLOSE WHEN CLICKING OUTSIDE
  // =====================================================

  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
      setMoreOpen(false);
    }

    if (
      !menu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  });

  // =====================================================
  // 6. KEYBOARD SUPPORT
  // =====================================================

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;

    if (dropdown.classList.contains('open')) {
      setMoreOpen(false);
      moreToggle.focus();
    } else if (menu.classList.contains('open')) {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  // =====================================================
  // 7. CHANGE BACKGROUND AFTER THE HERO
  // =====================================================

  const hero = document.getElementById('home');
  const header = document.querySelector('.site-header');

  function updateBackground() {
    const heroBottom = hero.getBoundingClientRect().bottom;
    const headerHeight = header.getBoundingClientRect().height;

    document.body.classList.toggle(
      'past-hero',
      heroBottom <= headerHeight
    );
  }

  let backgroundUpdatePending = false;

  window.addEventListener(
    'scroll',
    () => {
      if (backgroundUpdatePending) return;

      backgroundUpdatePending = true;

      window.requestAnimationFrame(() => {
        updateBackground();
        backgroundUpdatePending = false;
      });
    },
    { passive: true }
  );

  window.addEventListener('resize', updateBackground);
  window.addEventListener('pageshow', updateBackground);

  updateBackground();
})();
