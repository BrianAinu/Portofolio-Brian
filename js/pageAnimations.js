class PageAnimations {
    constructor() {
        this.sections = document.querySelectorAll('section');
        this.init();
    }

    init() {
        this.initialAnimations();
        this.setupScrollObserver();
        this.setupImageAnimations();
    }

    setupImageAnimations() {
        // Animasi untuk hero image
        const heroImage = document.querySelector('.hero-image-container');
        if (heroImage) {
            this.addFloatingAnimation(heroImage);
        }
    }

    addFloatingAnimation(element) {
        element.style.animation = 'floating 3s ease-in-out infinite';
        
        if (!document.querySelector('#floating-animation')) {
            const style = document.createElement('style');
            style.id = 'floating-animation';
            style.textContent = `
                @keyframes floating {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    initialAnimations() {
        const homeElements = {
            title: document.querySelector('#home h2'),
            subtitle: document.querySelector('.typing-text'),
            cta: document.querySelector('.cta-buttons'),
            social: document.querySelector('.social-buttons')
        };

        Object.values(homeElements).forEach((el, index) => {
            if (el) {
                el.style.opacity = '0';
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.classList.add('animate__animated');
                    el.classList.add(index % 2 === 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight');
                }, index * 200);
            }
        });
    }

    setupScrollObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSection(entry.target);
                }
            });
        }, { threshold: 0.2 });

        this.sections.forEach(section => observer.observe(section));
    }

    animateSection(section) {
        const id = section.id;
        
        switch(id) {
            case 'home':
                this.animateHome(section);
                break;
            case 'tentang':
                this.animateTentang(section);
                break;
            case 'keahlian':
                this.animateKeahlian(section);
                break;
            case 'pengalaman':
                this.animatePengalaman(section);
                break;
            case 'contact':
                this.animateContact(section);
                break;
        }
    }

    animateHome(section) {
        const elements = section.querySelectorAll('.animate-item:not(.hero-image-container)');
        elements.forEach((el, index) => {
            el.classList.add('animate__animated', 'animate__fadeInUp');
            el.style.animationDelay = `${index * 0.2}s`;
        });
    }

    animateTentang(section) {
        const profileCard = section.querySelector('.profile-card');
        const bioText = section.querySelector('.bio-text');
        const infoGrid = section.querySelector('.info-grid');

        if (profileCard) {
            profileCard.classList.add('animate__animated', 'animate__fadeInLeft');
        }
        if (bioText) {
            bioText.classList.add('animate__animated', 'animate__fadeInRight');
        }
        if (infoGrid) {
            const items = infoGrid.querySelectorAll('.info-item');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('animate__animated', 'animate__zoomIn');
                }, index * 100);
            });
        }
    }

    animateKeahlian(section) {
        const skills = section.querySelectorAll('.skill-item');
        skills.forEach((skill, index) => {
            skill.style.opacity = '0';
            setTimeout(() => {
                skill.style.opacity = '1';
                skill.classList.add('animate__animated', 'animate__bounceIn');
                skill.style.animationDelay = `${index * 0.1}s`;
            }, index * 5);
        });
    }

    animatePengalaman(section) {
        const cards = section.querySelectorAll('.project-card, .certificate-card');
        cards.forEach((card, index) => {
            card.classList.add('animate__animated', 'animate__fadeInUp');
            card.style.animationDelay = `${index * 0.2}s`;
        });
    }

    animateContact(section) {
        const contactCards = section.querySelectorAll('.contact-card');
        const form = section.querySelector('.contact-form');

        contactCards.forEach((card, index) => {
            card.classList.add('animate__animated', 'animate__fadeInUp');
            card.style.animationDelay = `${index * 0.1}s`;
        });

        if (form) {
            form.classList.add('animate__animated', 'animate__fadeInUp');
            form.style.animationDelay = '0.3s';
        }
    }
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    new PageAnimations();
}); 