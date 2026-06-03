/**
 * App.js — Portfolio Interactions
 * Typewriter, Scroll Reveal, Marquee Clone, Smooth Scroll,
 * Mobile Menu, Stats Counter, Dynamic Year
 */

document.addEventListener('DOMContentLoaded', () => {

    // ═══════════════════════════════════════
    // 1. TYPEWRITER EFFECT
    // ═══════════════════════════════════════
    const words = [
        'secure, encrypted applications.',
        'real-time collaborative tools.',
        'AI-powered platforms.',
        'full-stack web apps.',
        'browser extensions.',
        'REST APIs & microservices.',
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterEl = document.getElementById('typewriter');

    function typewrite() {
        if (!typewriterEl) return;

        const current = words[wordIndex];

        if (isDeleting) {
            typewriterEl.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterEl.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === current.length) {
            speed = 2000; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 400; // Pause before next word
        }

        setTimeout(typewrite, speed);
    }

    typewrite();


    // ═══════════════════════════════════════
    // 2. SCROLL REVEAL (Intersection Observer)
    // ═══════════════════════════════════════
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // Also reveal HUD cards and project cards on scroll
    document.querySelectorAll('.hud-card, .project-card-sm').forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });


    // ═══════════════════════════════════════
    // 3. MARQUEE CLONE (Seamless Infinite Scroll)
    // ═══════════════════════════════════════
    document.querySelectorAll('.marquee-track').forEach(track => {
        const children = Array.from(track.children);
        // Clone all children to create seamless loop
        children.forEach(child => {
            const clone = child.cloneNode(true);
            track.appendChild(clone);
        });
    });


    // ═══════════════════════════════════════
    // 4. SMOOTH SCROLL NAVIGATION
    // ═══════════════════════════════════════
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });

                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                const menuBtn = document.getElementById('mobile-menu-btn');
                if (mobileMenu) mobileMenu.classList.remove('open');
                if (menuBtn) menuBtn.classList.remove('active');
            }
        });
    });


    // ═══════════════════════════════════════
    // 5. MOBILE MENU TOGGLE
    // ═══════════════════════════════════════
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('open');
        });
    }


    // ═══════════════════════════════════════
    // 6. ACTIVE NAV LINK ON SCROLL
    // ═══════════════════════════════════════
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });


    // ═══════════════════════════════════════
    // 7. NAVBAR BACKGROUND ON SCROLL
    // ═══════════════════════════════════════
    const navbar = document.getElementById('navbar');

    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.style.borderBottomColor = 'rgba(255,255,255,0.08)';
        } else {
            navbar.style.borderBottomColor = 'rgba(255,255,255,0.05)';
        }
    }

    window.addEventListener('scroll', updateNavbar, { passive: true });


    // ═══════════════════════════════════════
    // 8. STATS COUNTER ANIMATION
    // ═══════════════════════════════════════
    const statNumbers = document.querySelectorAll('.stat-number');

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'), 10);
                animateCounter(el, target);
                statsObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => statsObserver.observe(el));

    function animateCounter(el, target) {
        let current = 0;
        const duration = 1500;
        const step = target / (duration / 16);

        function update() {
            current += step;
            if (current >= target) {
                el.textContent = target + '+';
                return;
            }
            el.textContent = Math.floor(current) + '+';
            requestAnimationFrame(update);
        }

        update();
    }


    // ═══════════════════════════════════════
    // 9. DYNAMIC YEAR
    // ═══════════════════════════════════════
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

});
