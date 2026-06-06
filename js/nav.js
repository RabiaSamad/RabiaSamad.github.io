// js/nav.js — navigation behaviour

(function () {
  'use strict';

  const navbar    = document.getElementById('navbar');
  const toggle    = document.querySelector('.nav-toggle');
  const navLinks  = document.querySelector('.nav-links');
  const links     = document.querySelectorAll('.nav-links a');

  /* ── Scroll shadow ── */
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
    updateActiveLink();
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Mobile menu toggle ── */
  toggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target)) {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  /* ── Active link highlight based on scroll position ── */
  const sections = ['hero', 'projects', 'experience', 'research', 'skills', 'education', 'contact'];

  function updateActiveLink() {
    let current = '';

    sections.forEach(function (id) {
      const section = document.getElementById(id);
      if (!section) return;
      const top = section.getBoundingClientRect().top;
      if (top <= 80) current = id;
    });

    links.forEach(function (link) {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === current);
    });
  }

  // Run once on load
  onScroll();
})();
