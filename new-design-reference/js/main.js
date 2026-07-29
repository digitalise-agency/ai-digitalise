/* ai.digitalise.agency · main.js
   Scroll-driven animations: nav gloss, counter triggers, section reveals.
   Zero external dependencies. */

(function () {
  'use strict';

  /* ── Nav: add .scrolled glass on scroll ── */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Counter animation (cubic ease-out) ── */
  function animateCounter(el) {
    const raw    = el.dataset.target || '0';
    const suffix = el.dataset.suffix || '';
    const target = parseFloat(raw.replace(/[^0-9.]/g, ''));
    const isFloat = raw.includes('.');
    const dec     = isFloat ? (raw.split('.')[1] || '').length : 0;
    const dur     = 2200;
    const start   = performance.now();

    const step = (now) => {
      const p      = Math.min((now - start) / dur, 1);
      const eased  = 1 - Math.pow(1 - p, 3);
      const val    = eased * target;
      el.textContent = (isFloat ? val.toFixed(dec) : Math.round(val).toLocaleString()) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ── Intersection observer factory ── */
  function observe(selector, className, threshold, callback) {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add(className || 'visible');
        if (callback) callback(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: threshold || 0.18 });

    els.forEach((el) => io.observe(el));
  }

  /* reveal (fade + slide) */
  observe('.reveal', 'visible', 0.15);

  /* staggered children */
  observe('.stagger', 'visible', 0.15);

  /* pipeline animation */
  observe('.pipeline', 'visible', 0.2);

  /* counters */
  observe('.metric-num[data-target]', 'counted', 0.5, (el) => {
    animateCounter(el);
  });

  /* ── Smooth anchor scroll (book-a-call button) ── */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

})();
