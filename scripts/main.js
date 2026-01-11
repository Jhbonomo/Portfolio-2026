// Main JavaScript file

// Utility: Position triangle pointer on speech bubble
function positionTriangle() {
    const aboutLink = document.querySelector('.nav-link[href="#about"]');
    const bubble = document.querySelector('.speech-bubble');
    
    if (!aboutLink || !bubble) return;
    
    const aboutRect = aboutLink.getBoundingClientRect();
    const bubbleRect = bubble.getBoundingClientRect();
    
    // Calculate About position relative to bubble
    const offsetLeft = aboutRect.left - bubbleRect.left + (aboutRect.width / 2);
    
    // Set CSS variable to position triangle
    bubble.style.setProperty('--triangle-position', `${offsetLeft}px`);
}

// Initialize everything on DOM load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio carregado!');
    
    const navLinks = document.querySelectorAll('.nav-link');
    const nav = document.querySelector('.main-nav');
    const casesSection = document.querySelector('.cases');
    const wrapperSection = document.querySelector('.wrapper');
    
    // Smooth scroll function
    function smoothScrollTo(targetPosition, duration = 1500) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            const ease = progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;
            
            window.scrollTo(0, startPosition + distance * ease);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }
        
        requestAnimationFrame(animation);
    }
    
    // Navigation functionality
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            if (link.textContent.includes('My Work')) {
                const targetPosition = casesSection.offsetTop;
                smoothScrollTo(targetPosition);
            } else {
                smoothScrollTo(0);
            }
        });
    });
    
    // Scroll-based active nav state
    window.addEventListener('scroll', () => {
        const casesTop = casesSection.getBoundingClientRect().top;
        
        if (casesTop <= 100) {
            nav.classList.add('repositioned');
            navLinks[0].classList.remove('active');
            navLinks[1].classList.add('active');
        } else {
            nav.classList.remove('repositioned');
            navLinks[1].classList.remove('active');
            navLinks[0].classList.add('active');
        }
    });
    
    // Speech bubble parallax effect
    const speechBubble = document.querySelector('.speech-bubble');
    const parallaxSpeed = 1.5;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * parallaxSpeed;
        speechBubble.style.transform = `translateY(-${parallax}px)`;
    });
    
    // Initialize triangle position
    positionTriangle();
    window.addEventListener('resize', positionTriangle);
    
    // Card hover interactions with video support
    const cards = document.querySelectorAll('.card');
    const imageContainer = document.querySelector('.image');
    let mediaElement = document.querySelector('.image img');
    
    function updateCardActive(activeCard) {
        // Remove active from all cards
        cards.forEach(c => c.classList.remove('active'));
        
        // Add active to current card
        activeCard.classList.add('active');
        
        // Get card data
        const mediaSrc = activeCard.dataset.image || activeCard.dataset.video;
        const mediaType = activeCard.dataset.mediaType || 'image';
        const newBgColor = activeCard.dataset.bgcolor;
        const aspectRatio = activeCard.dataset.aspectRatio || 'default';
        
        if (mediaSrc) {
            mediaElement.style.opacity = '0';
            
            setTimeout(() => {
                if (mediaType === 'video' && mediaElement.tagName !== 'VIDEO') {
                    const videoElement = document.createElement('video');
                    videoElement.src = mediaSrc;
                    videoElement.autoplay = true;
                    videoElement.loop = true;
                    videoElement.muted = true;
                    videoElement.className = aspectRatio;
                    mediaElement.replaceWith(videoElement);
                    mediaElement = videoElement;
                    
                    setTimeout(() => {
                        videoElement.style.opacity = '1';
                    }, 50);
                } else if (mediaType === 'image' && mediaElement.tagName !== 'IMG') {
                    const imgElement = document.createElement('img');
                    imgElement.src = mediaSrc;
                    imgElement.alt = 'Project preview';
                    imgElement.className = aspectRatio;
                    mediaElement.replaceWith(imgElement);
                    mediaElement = imgElement;
                    
                    setTimeout(() => {
                        imgElement.style.opacity = '1';
                    }, 50);
                } else {
                    mediaElement.src = mediaSrc;
                    mediaElement.className = aspectRatio;
                    setTimeout(() => {
                        mediaElement.style.opacity = '1';
                    }, 50);
                }
            }, 500);
        }
        
        if (newBgColor) {
            imageContainer.style.backgroundColor = newBgColor;
        }
    }
    
    // Desktop hover behavior
    if (window.innerWidth > 912) {
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                updateCardActive(card);
            });
        });
    }
    
    // Mobile scroll behavior - Intersection Observer
    if (window.innerWidth <= 912) {
        const observerOptions = {
            root: null,
            rootMargin: '-45% 0px -45% 0px',
            threshold: 0
        };
        
        const cardScrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCardActive(entry.target);
                }
            });
        }, observerOptions);
        
        cards.forEach(card => {
            cardScrollObserver.observe(card);
        });
    }
    
    // Card entrance animations
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Array.from(cards).indexOf(entry.target);
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        cardObserver.observe(card);
    });
});
