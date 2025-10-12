// Initialisation Feather Icons
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser les icônes Feather
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
    
    // Gestion du menu mobile
    initMobileMenu();
    
    // Navigation active
    highlightActiveNav();
    
    // Smooth scrolling
    initSmoothScrolling();
    
    // FAQ Accordion
    initFAQAccordion();
    
    // Initialisation de la carte (si présente)
    if (document.getElementById('map')) {
        initMap();
    }
});

// Menu mobile
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('active');
            
            // Changer l'icône
            const icon = this.querySelector('i');
            if (icon) {
                if (isExpanded) {
                    icon.setAttribute('data-feather', 'menu');
                } else {
                    icon.setAttribute('data-feather', 'x');
                }
                feather.replace();
            }
        });
        
        // Fermer le menu en cliquant sur un lien
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
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
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Navigation mobile
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Smooth scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// FAQ Accordion
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const button = item.querySelector('.faq-question');
        const content = item.querySelector('.faq-answer');
        const icon = button.querySelector('i');
        
        if (button && content) {
            button.addEventListener('click', () => {
                const isOpen = content.classList.contains('active');
                
                // Fermer tous les autres
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherContent = otherItem.querySelector('.faq-answer');
                        const otherIcon = otherItem.querySelector('.faq-question i');
                        otherContent.classList.remove('active');
                        if (otherIcon) {
                            otherIcon.setAttribute('data-feather', 'chevron-down');
                        }
                    }
                });
                
                // Basculer l'état actuel
                if (isOpen) {
                    content.classList.remove('active');
                    if (icon) {
                        icon.setAttribute('data-feather', 'chevron-down');
                    }
                } else {
                    content.classList.add('active');
                    if (icon) {
                        icon.setAttribute('data-feather', 'chevron-up');
                    }
                }
                
                feather.replace();
            });
        }
    });
}

// Initialisation de la carte Google Maps
function initMap() {
    // Coordonnées de Pertuis
    const location = { lat: 43.6938, lng: 5.5028 };
    
    // Créer la carte
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [{ "weight": "2.00" }]
            },
            {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [{ "color": "#9c9c9c" }]
            },
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [{ "visibility": "on" }]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{ "color": "#f2f2f2" }]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [{ "color": "#ffffff" }]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{ "color": "#ffffff" }]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{ "visibility": "off" }]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{ "saturation": -100 }, { "lightness": 45 }]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{ "color": "#eeeeee" }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#7b7b7b" }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [{ "color": "#ffffff" }]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{ "visibility": "simplified" }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{ "visibility": "off" }]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{ "visibility": "off" }]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{ "color": "#c8d7d4" }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#070707" }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [{ "color": "#ffffff" }]
            }
        ]
    });
    
    // Ajouter un marqueur
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Jeni Rose Couture",
        icon: {
            url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='18' fill='%23e11d48' stroke='%23ffffff' stroke-width='2'/%3E%3Cpath d='M20,10 L20,30 M10,20 L30,20' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E",
            scaledSize: new google.maps.Size(40, 40)
        }
    });
}

// Gestion des formulaires
function handleFormSubmission(formId, successMessage) {
    const form = document.getElementById(formId);
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulation d'envoi (à remplacer par votre logique d'envoi réelle)
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Simulation de chargement
            submitBtn.textContent = 'Envoi en cours...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Simulation de succès
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

// Animation au défilement
function initScrollAnimations() {
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .timeline-item');
        
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
    const animatedElements = document.querySelectorAll('.service-card, .timeline-item');
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

// Initialiser les animations au défilement
document.addEventListener('DOMContentLoaded', initScrollAnimations);