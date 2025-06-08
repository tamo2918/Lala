// Navigation scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
    
    // Close menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Enhanced animation observer
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .use-case-card, .pricing-card, .section-header');
    animateElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Staggered animation for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${0.2 + index * 0.1}s`;
    });
    
    // Staggered animation for use case cards
    const useCaseCards = document.querySelectorAll('.use-case-card');
    useCaseCards.forEach((card, index) => {
        card.style.animationDelay = `${0.3 + index * 0.15}s`;
    });
});





// Enhanced scroll animations
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const heroHeight = hero.offsetHeight;
        const scrollPercent = Math.min(scrolled / heroHeight, 1);
        
        // Parallax effect for hero background
        hero.style.transform = `translateY(${scrolled * 0.1}px)`;
        
        // Fade effect for hero content
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');
        
        if (heroContent) {
            heroContent.style.opacity = 1 - scrollPercent * 0.8;
            heroContent.style.transform = `translateY(${scrolled * 0.05}px)`;
        }
        
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.02}px)`;
        }
    }
});



// Feature cards hover effect
document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
});

// Pricing card selection effect
document.addEventListener('DOMContentLoaded', () => {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        const button = card.querySelector('.btn');
        if (button) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Add selection effect
                card.style.transform = 'scale(0.98)';
                card.style.boxShadow = '0 8px 25px -5px rgba(99, 102, 241, 0.3)';
                
                setTimeout(() => {
                    card.style.transform = '';
                    card.style.boxShadow = '';
                }, 150);
                
                // Show success message (you can customize this)
                const message = document.createElement('div');
                message.textContent = 'プランを選択しました！';
                message.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: #22c55e;
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 12px;
                    font-weight: 600;
                    z-index: 1000;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                `;
                
                document.body.appendChild(message);
                
                setTimeout(() => {
                    message.remove();
                }, 2000);
            });
        }
    });
});

// Form validation (if contact form is added)
const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Performance optimization: Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});



// Console message for developers
console.log(`
🎉 Lala Landing Page
Built with modern web technologies
- HTML5 Semantic Structure
- CSS3 Grid & Flexbox
- Vanilla JavaScript
- Intersection Observer API
- CSS Animations & Transitions
- Responsive Design

Made with ❤️ for better learning experiences
`);

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        // Easter egg effect
        document.body.style.animation = 'rainbow 1s infinite';
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            document.body.style.animation = '';
            style.remove();
        }, 3000);
        
        konamiCode = [];
    }
}); 