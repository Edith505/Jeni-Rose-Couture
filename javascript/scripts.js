// Initialisation Feather Icons
document.addEventListener('DOMContentLoaded', function() {
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
    
    // Gestion du menu mobile
    initMobileMenu();
    
    // Smooth scrolling
    initSmoothScrolling();
    
    // Navbar scroll effect
    initNavbarScroll();
    
    // Navigation active
    highlightActiveNav();
});

// Menu mobile
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            // Changer l'icône
            const icon = this.querySelector('i');
            if (icon) {
                const currentIcon = icon.getAttribute('data-feather');
                if (currentIcon === 'menu') {
                    icon.setAttribute('data-feather', 'x');
                } else {
                    icon.setAttribute('data-feather', 'menu');
                }
                feather.replace();
            }
        });
        
        // Fermer le menu en cliquant sur un lien
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.setAttribute('data-feather', 'menu');
                    feather.replace();
                }
            });
        });
    }
}

// Navigation active
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Navigation desktop
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Navigation mobile
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Smooth scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.05)';
        }
    });
}

// Animation au défilement
function initScrollAnimations() {
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .testimonial-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    };
    
    // Initialiser les styles
    const animatedElements = document.querySelectorAll('.service-card, .testimonial-card');
    animatedElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });
    
    // Écouter le défilement
    window.addEventListener('scroll', animateOnScroll);
    // Déclencher une première fois
    animateOnScroll();
}

// FAQ Accordion
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const button = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = button.querySelector('i');
        
        if (button && answer) {
            button.addEventListener('click', () => {
                const isOpen = answer.classList.contains('active');
                
                // Fermer tous les autres
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        const otherIcon = otherItem.querySelector('.faq-question i');
                        otherAnswer.classList.remove('active');
                        if (otherIcon) {
                            otherIcon.style.transform = 'rotate(0deg)';
                        }
                    }
                });
                
                // Basculer l'état actuel
                if (isOpen) {
                    answer.classList.remove('active');
                    if (icon) {
                        icon.style.transform = 'rotate(0deg)';
                    }
                } else {
                    answer.classList.add('active');
                    if (icon) {
                        icon.style.transform = 'rotate(180deg)';
                    }
                }
            });
        }
    });
}

// Initialiser les animations au défilement
document.addEventListener('DOMContentLoaded', initScrollAnimations);
document.addEventListener('DOMContentLoaded', initFAQAccordion);

// Gestion des formulaires (si présent sur la page)
function handleFormSubmission(formId, successMessage) {
    const form = document.getElementById(formId);
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Simulation de chargement
            submitBtn.textContent = 'Envoi en cours...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert(successMessage || 'Votre message a été envoyé avec succès !');
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Initialiser les gestionnaires de formulaire
document.addEventListener('DOMContentLoaded', function() {
    handleFormSubmission('contact-form', 'Votre demande de rendez-vous a été envoyée avec succès !');
    handleFormSubmission('login-form', 'Connexion réussie !');
});