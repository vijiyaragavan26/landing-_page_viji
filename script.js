/**
 * TechNova Landing Page - Interactive JavaScript
 * CodSoft Web Development Internship - Level 1 Task 2
 * 
 * Features:
 * 1. Sticky Navigation & Header Backdrop
 * 2. Responsive Mobile Hamburger Menu
 * 3. Smooth Scrolling with Sticky Offset
 * 4. Scroll Spy (Active Navigation Highlight)
 * 5. Intersection Observer for Scroll Animations
 * 6. Dynamic Animated Statistics Counters
 * 7. Accessible Modal System for "Learn More"
 * 8. Comprehensive Frontend Form Validation & Feedback
 * 9. Back-to-Top Button Smooth Scroll
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. Sticky Header & Scroll State
     ========================================================================== */
  const header = document.getElementById('header');
  const backToTopBtn = document.getElementById('backToTop');

  function handleHeaderScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // Run on initial load

  /* ==========================================================================
     2. Responsive Mobile Hamburger Menu
     ========================================================================== */
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  function toggleMobileMenu() {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('is-open');

    // Prevent background scrolling when mobile menu is open
    if (!isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  function closeMobileMenu() {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.classList.remove('active');
    navMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', toggleMobileMenu);

    // Close menu when a navigation link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('is-open') &&
          !navMenu.contains(e.target) &&
          !menuToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        closeMobileMenu();
      }
    });
  }

  /* ==========================================================================
     3. Scroll Spy (Active Navigation Highlighting)
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 120; // Offset for header

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (matchingLink) {
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          matchingLink.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  /* ==========================================================================
     4. Intersection Observer: Reveal Elements on Scroll
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || 0;
          setTimeout(() => {
            entry.target.classList.add('is-revealed');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  /* ==========================================================================
     5. Animated Statistics Counters
     ========================================================================== */
  const statCounters = document.querySelectorAll('.counter');
  let countersAnimated = false;

  function runCounterAnimation() {
    statCounters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const duration = 1800; // ms
      const startTime = performance.now();

      function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing out function (easeOutQuad)
        const easeOutProgress = 1 - (1 - progress) * (1 - progress);
        const currentCount = Math.floor(easeOutProgress * target);

        counter.textContent = currentCount;

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          counter.textContent = target;
        }
      }

      requestAnimationFrame(updateNumber);
    });
  }

  const statsSection = document.getElementById('stats');
  if (statsSection && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          runCounterAnimation();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
  }

  /* ==========================================================================
     6. Interactive "Learn More" Modal System
     ========================================================================== */
  const infoModal = document.getElementById('infoModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDismissBtn = document.getElementById('modalDismissBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');
  const modalIconBadge = document.getElementById('modalIconBadge');
  const modalActionBtn = document.getElementById('modalActionBtn');

  // Modal content repository
  const modalData = {
    'web-dev': {
      title: 'Web Development Services',
      icon: '💻',
      body: `
        <p>TechNova specializes in modern, high-performance web engineering. We combine clean semantic HTML5 markup with optimized CSS3 and resilient vanilla JavaScript or modern SPA frameworks.</p>
        <p><strong>Key Highlights:</strong></p>
        <ul>
          <li>Mobile-first, responsive layouts across all device viewports</li>
          <li>Sub-second loading times via asset minification and clean DOM</li>
          <li>Strict adherence to WCAG 2.1 AA accessibility guidelines</li>
          <li>SEO-friendly structural markup and schema metadata</li>
        </ul>
      `
    },
    'ai': {
      title: 'Artificial Intelligence & Automation',
      icon: '🤖',
      body: `
        <p>Harness the power of intelligent computation. TechNova conceptualizes AI solutions that streamline repetitive tasks, extract high-value insights, and power contextual interactions.</p>
        <p><strong>Key Highlights:</strong></p>
        <ul>
          <li>Context-aware conversational interfaces &amp; assistants</li>
          <li>Predictive data processing and workflow automation</li>
          <li>API integrations with leading LLM and computer vision models</li>
          <li>Privacy-first algorithmic architecture with zero data leaks</li>
        </ul>
      `
    },
    'digital-solutions': {
      title: 'Digital Solutions & Cloud Systems',
      icon: '🌐',
      body: `
        <p>From initial design system prototype to resilient cloud infrastructure, our digital solutions empower modern organizations to transform their web operations.</p>
        <p><strong>Key Highlights:</strong></p>
        <ul>
          <li>Cloud-native deployment and microservices strategy</li>
          <li>Unified design systems ensuring brand consistency</li>
          <li>Scalable RESTful and GraphQL API layer engineering</li>
          <li>Performance profiling and continuous uptime monitoring</li>
        </ul>
      `
    },
    'about-details': {
      title: 'About the TechNova Concept',
      icon: '🚀',
      body: `
        <p>TechNova is designed and developed by <strong><a href="https://www.linkedin.com/in/vijiyaragavan/" target="_blank" rel="noopener noreferrer" style="color: #00D2FF; text-decoration: underline;">Vijiayaragavan V</a></strong> as part of the <strong>CodSoft Web Development Internship – Level 1 Task 2</strong>.</p>
        <p>This prototype demonstrates how modern frontend practices, thoughtful UI/UX principles, and vanilla web standards can produce a premium, enterprise-grade landing page experience without bloated third-party dependencies.</p>
        <p><strong>Technical Stack:</strong></p>
        <ul>
          <li>Semantic HTML5 structure</li>
          <li>Responsive CSS3 Grid &amp; Flexbox styling</li>
          <li>Vanilla ES6+ JavaScript for lightweight interactions</li>
          <li>Inline SVG vector artwork for crisp, retina displays</li>
        </ul>
      `
    }
  };

  function openModal(topicKey) {
    const data = modalData[topicKey];
    if (!data || !infoModal) return;

    modalTitle.textContent = data.title;
    modalIconBadge.textContent = data.icon;
    modalContent.innerHTML = data.body;

    infoModal.classList.add('is-open');
    infoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!infoModal) return;
    infoModal.classList.remove('is-open');
    infoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Attach triggers to buttons with data-modal
  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalKey = trigger.getAttribute('data-modal');
      openModal(modalKey);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeModal);
  if (modalActionBtn) {
    modalActionBtn.addEventListener('click', () => {
      closeModal();
    });
  }

  // Close modal when clicking backdrop
  if (infoModal) {
    infoModal.addEventListener('click', (e) => {
      if (e.target === infoModal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && infoModal.classList.contains('is-open')) {
        closeModal();
      }
    });
  }

  /* ==========================================================================
     7. Contact Form Validation & Client-Side Simulation
     ========================================================================== */
  const contactForm = document.getElementById('contactForm');
  const formAlert = document.getElementById('formAlert');
  const submitBtn = document.getElementById('submitBtn');

  // Input elements
  const userNameInput = document.getElementById('userName');
  const userEmailInput = document.getElementById('userEmail');
  const userSubjectInput = document.getElementById('userSubject');
  const userMessageInput = document.getElementById('userMessage');

  // Regex for standard email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation rules
  function validateField(input, condition, errorElId) {
    const formGroup = input.closest('.form-group');
    if (!condition) {
      input.classList.add('is-invalid');
      input.classList.remove('is-valid');
      if (formGroup) formGroup.classList.add('has-error');
      return false;
    } else {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      if (formGroup) formGroup.classList.remove('has-error');
      return true;
    }
  }

  // Real-time validation listeners on blur and input
  if (userNameInput) {
    userNameInput.addEventListener('input', () => {
      if (userNameInput.value.trim().length >= 2) {
        validateField(userNameInput, true);
      }
    });
    userNameInput.addEventListener('blur', () => {
      validateField(userNameInput, userNameInput.value.trim().length >= 2);
    });
  }

  if (userEmailInput) {
    userEmailInput.addEventListener('input', () => {
      if (emailRegex.test(userEmailInput.value.trim())) {
        validateField(userEmailInput, true);
      }
    });
    userEmailInput.addEventListener('blur', () => {
      validateField(userEmailInput, emailRegex.test(userEmailInput.value.trim()));
    });
  }

  if (userSubjectInput) {
    userSubjectInput.addEventListener('input', () => {
      if (userSubjectInput.value.trim().length >= 4) {
        validateField(userSubjectInput, true);
      }
    });
    userSubjectInput.addEventListener('blur', () => {
      validateField(userSubjectInput, userSubjectInput.value.trim().length >= 4);
    });
  }

  if (userMessageInput) {
    userMessageInput.addEventListener('input', () => {
      if (userMessageInput.value.trim().length >= 10) {
        validateField(userMessageInput, true);
      }
    });
    userMessageInput.addEventListener('blur', () => {
      validateField(userMessageInput, userMessageInput.value.trim().length >= 10);
    });
  }

  // Form submission handling
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Check all fields
      const isNameValid = validateField(userNameInput, userNameInput.value.trim().length >= 2);
      const isEmailValid = validateField(userEmailInput, emailRegex.test(userEmailInput.value.trim()));
      const isSubjectValid = validateField(userSubjectInput, userSubjectInput.value.trim().length >= 4);
      const isMessageValid = validateField(userMessageInput, userMessageInput.value.trim().length >= 10);

      const isFormValid = isNameValid && isEmailValid && isSubjectValid && isMessageValid;

      if (!isFormValid) {
        // Show validation alert
        formAlert.className = 'form-alert error';
        formAlert.innerHTML = `
          <span>⚠️ Please correct the highlighted fields before submitting.</span>
        `;
        formAlert.style.display = 'flex';

        // Focus the first invalid field
        const firstInvalid = contactForm.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Simulate sending state
      submitBtn.classList.add('is-submitting');
      submitBtn.disabled = true;
      formAlert.style.display = 'none';

      const userName = userNameInput.value.trim();

      setTimeout(() => {
        submitBtn.classList.remove('is-submitting');
        submitBtn.disabled = false;

        // Display success confirmation message
        formAlert.className = 'form-alert success';
        formAlert.innerHTML = `
          <div>
            <strong>✓ Message Validated Successfully!</strong>
            <p style="margin-top: 4px; font-size: 0.8125rem;">
              Thank you, <strong>${escapeHTML(userName)}</strong>. Your demo inquiry was received and verified client-side. (Note: As this is a frontend prototype, no external backend request was dispatched).
            </p>
          </div>
        `;
        formAlert.style.display = 'flex';

        // Reset form inputs & validation classes
        contactForm.reset();
        [userNameInput, userEmailInput, userSubjectInput, userMessageInput].forEach(input => {
          input.classList.remove('is-valid');
          input.classList.remove('is-invalid');
        });

        // Auto-dismiss the success alert after 8 seconds
        setTimeout(() => {
          formAlert.style.display = 'none';
        }, 8000);

      }, 1200);
    });
  }

  // XSS prevention helper for feedback text
  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /* ==========================================================================
     8. Back To Top Button Behavior
     ========================================================================== */
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});
