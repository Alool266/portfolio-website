// ===== DOM Content Loaded =====
document.addEventListener('DOMContentLoaded', function() {
    initSmoothScrolling();
    initTimelineAnimation();
    initLanguageProgressBars();
    initSkillCard3DEffect();
    initHeaderParallax();
    initProjectCardAnimation();
    initContactForm();
});

// ===== Smooth Scrolling for Navigation Links =====
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== Timeline Animation on Scroll =====
function initTimelineAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
}

// ===== Language Progress Bars Animation =====
function initLanguageProgressBars() {
    const languageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressFill = entry.target.querySelector('.progress-fill');
                const width = progressFill.getAttribute('data-width');
                progressFill.style.width = width;
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.language-item').forEach(item => {
        languageObserver.observe(item);
    });
}

// ===== 3D Tilt Effect for Skill Cards =====
function initSkillCard3DEffect() {
    document.querySelectorAll('.skill-category').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ===== Parallax Effect for Header =====
function initHeaderParallax() {
    const header = document.querySelector('header');
    if (header) {
        header.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.clientX) / 50;
            const y = (window.innerHeight / 2 - e.clientY) / 50;

            document.querySelector('.header-content').style.transform =
                `translateX(${x}px) translateY(${y}px) rotateX(${y}deg) rotateY(${-x}deg)`;
        });

        header.addEventListener('mouseleave', () => {
            document.querySelector('.header-content').style.transform =
                'translateX(0) translateY(0) rotateX(0) rotateY(0)';
        });
    }
}

// ===== Project Card Animation on Scroll =====
function initProjectCardAnimation() {
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease-out';
        projectObserver.observe(card);
    });
}

// ===== Contact Form Handling =====
function initContactForm() {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            const formData = {
                name: form.querySelector('#name').value,
                email: form.querySelector('#email').value,
                subject: form.querySelector('#subject').value,
                message: form.querySelector('#message').value
            };

            try {
                // Using a free form submission service (Formspree) or emailJS
                // For demo purposes, we'll simulate success
                // In production, replace with actual backend endpoint

                await simulateFormSubmission(formData);

                showFormMessage(formMessage, 'success', 'Thank you for your message! I will get back to you soon.');
                form.reset();
            } catch (error) {
                showFormMessage(formMessage, 'error', 'Oops! Something went wrong. Please try again or email me directly at designhasan66@gmail.com');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
}

function simulateFormSubmission(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Form submitted:', data);
            resolve({ success: true });
        }, 1500);
    });
}

function showFormMessage(element, type, message) {
    element.textContent = message;
    element.className = `form-message ${type}`;
    element.style.display = 'block';

    setTimeout(() => {
        element.style.display = 'none';
    }, 5000);
}

// ===== Utility: Debounce Function =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== Utility: Throttle Function =====
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== Performance: Lazy Load Images (if added later) =====
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ===== Accessibility: Reduce Motion =====
function checkReducedMotion() {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
        document.documentElement.style.setProperty('--animation-duration', '0s');
        document.querySelectorAll('*').forEach(el => {
            el.style.animationDuration = '0s';
            el.style.transitionDuration = '0s';
        });
    }
}

window.addEventListener('load', checkReducedMotion);

// ===== Console Easter Egg =====
console.log('%c👋 Hello, fellow developer!', 'font-size: 20px; color: #6366f1;');
console.log('%cInterested in the code behind this portfolio?', 'font-size: 14px; color: #06b6d4;');
console.log('%cCheck out my GitHub: https://github.com/Alool266', 'font-size: 12px; color: #64748b;');
