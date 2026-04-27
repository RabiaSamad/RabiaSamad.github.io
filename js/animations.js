// js/animations.js — scroll-reveal and entrance animations

(function () {
  'use strict';

  /* ── Add .reveal class to animatable elements ── */
  const selectors = [
    '.project-card',
    '.timeline-item',
    '.skill-group',
    '.cert-item',
    '.stat-card',
    '.edu-card',
    '.contact-item',
  ];

  selectors.forEach(function (selector) {
    document.querySelectorAll(selector).forEach(function (el, i) {
      el.classList.add('reveal');
      // Stagger delay for sibling elements
      el.style.transitionDelay = (i % 4) * 60 + 'ms';
    });
  });

  /* ── IntersectionObserver to trigger .visible ── */
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all immediately for older browsers
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ── Hero entrance animation ── */
  const heroElements = [
    document.querySelector('.hero-tag'),
    document.querySelector('h1'),
    document.querySelector('.hero-bio'),
    document.querySelector('.hero-cta'),
  ];

  heroElements.forEach(function (el, i) {
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    el.style.transitionDelay = (i * 120) + 'ms';

    // Trigger after a short delay to allow paint
    requestAnimationFrame(function () {
      setTimeout(function () {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100);
    });
  });

})();
