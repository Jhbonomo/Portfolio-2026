// Main JavaScript file

// Utility: Custom smooth scroll function with adjustable duration
function smoothScrollTo(element, duration = 1200) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    // Easing function for smooth animation
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

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

// Initialize Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const nav = document.querySelector('.main-nav');
    const casesSection = document.querySelector('.cases');
    const wrapperSection = document.querySelector('.wrapper');
    
    // Click navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active from all
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active to clicked link
            link.classList.add('active');
            
            // Scroll to My Work section
            if (link.getAttribute('href') === '#work') {
                if (casesSection) {
                    smoothScrollTo(casesSection, 1500);
                }
            }
            
            // Scroll to About section
            if (link.getAttribute('href') === '#about') {
                if (wrapperSection) {
                    smoothScrollTo(wrapperSection, 1500);
                }
            }
        });
    });
    
    // Scroll-based navigation state
    window.addEventListener('scroll', () => {
        const casesTop = casesSection.getBoundingClientRect().top;
        const aboutLink = document.querySelector('.nav-link[href="#about"]');
        const workLink = document.querySelector('.nav-link[href="#work"]');
        
        if (casesTop <= 100) {
            nav.classList.add('repositioned');
            
            // Update active to My Work
            navLinks.forEach(l => l.classList.remove('active'));
            workLink.classList.add('active');
        } else {
            nav.classList.remove('repositioned');
            
            // Update active to About
            navLinks.forEach(l => l.classList.remove('active'));
            aboutLink.classList.add('active');
        }
    });
}

// Initialize Parallax effects
function initParallax() {
    const speechBubble = document.querySelector('.speech-bubble');
    
    window.addEventListener('scroll', () => {
        // Parallax effect for speech bubble
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 1.5; // Moves 1.5x faster than normal scroll
        
        if (speechBubble) {
            speechBubble.style.transform = `translateY(-${scrolled * parallaxSpeed}px)`;
        }
    });
}

// Initialize Card interactions
function initCards() {
    const cards = document.querySelectorAll('.card');
    const imageContainer = document.querySelector('.image');
    let currentMediaElement = document.querySelector('.image img');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Remove active from all cards
            cards.forEach(c => c.classList.remove('active'));
            
            // Add active to hovered card
            card.classList.add('active');
            
            // Get card data
            const mediaSrc = card.dataset.image || card.dataset.video;
            const mediaType = card.dataset.mediaType || 'image';
            const newBgColor = card.dataset.bgcolor;
            const aspectRatio = card.dataset.aspectRatio || 'default';
            
            if (mediaSrc && currentMediaElement) {
                // Fade out current media
                currentMediaElement.style.opacity = '0';
                
                setTimeout(() => {
                    // Check if we need to switch between image and video
                    if (mediaType === 'video' && currentMediaElement.tagName !== 'VIDEO') {
                        // Replace img with video
                        const videoElement = document.createElement('video');
                        videoElement.src = mediaSrc;
                        videoElement.autoplay = true;
                        videoElement.loop = true;
                        videoElement.muted = true;
                        videoElement.className = aspectRatio;
                        currentMediaElement.replaceWith(videoElement);
                        currentMediaElement = videoElement;
                        
                        setTimeout(() => {
                            videoElement.style.opacity = '1';
                        }, 50);
                    } else if (mediaType === 'image' && currentMediaElement.tagName !== 'IMG') {
                        // Replace video with img
                        const imgElement = document.createElement('img');
                        imgElement.src = mediaSrc;
                        imgElement.alt = 'Project preview';
                        imgElement.className = aspectRatio;
                        currentMediaElement.replaceWith(imgElement);
                        currentMediaElement = imgElement;
                        
                        setTimeout(() => {
                            imgElement.style.opacity = '1';
                        }, 50);
                    } else {
                        // Same media type, just update src and class
                        currentMediaElement.src = mediaSrc;
                        currentMediaElement.className = aspectRatio;
                        setTimeout(() => {
                            currentMediaElement.style.opacity = '1';
                        }, 50);
                    }
                }, 500);
            }
            
            // Update background color
            if (newBgColor) {
                imageContainer.style.backgroundColor = newBgColor;
            }
        });
    });
}

// Initialize everything on DOM load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio carregado!');
    
    // Initialize triangle position
    positionTriangle();
    
    // Reposition on window resize
    window.addEventListener('resize', positionTriangle);
    
    // Initialize all modules
    initNavigation();
    initParallax();
    initCards();
    
    // Card entrance animations with cascade effect
    const cards = document.querySelectorAll('.card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Get the index of the card for stagger delay
                const index = Array.from(cards).indexOf(entry.target);
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150); // 150ms stagger between each card
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.2 });
    
    cards.forEach(card => {
        cardObserver.observe(card);
    });
});
