// Main JavaScript file

// Função para posicionar o triângulo apontando para o link "About"
function positionTriangle() {
    const aboutLink = document.querySelector('.nav-link[href="#about"]');
    const bubble = document.querySelector('.speech-bubble');
    
    if (!aboutLink || !bubble) return;
    
    const aboutRect = aboutLink.getBoundingClientRect();
    const bubbleRect = bubble.getBoundingClientRect();
    
    // Calcula posição do About relativa ao bubble
    const offsetLeft = aboutRect.left - bubbleRect.left + (aboutRect.width / 2);
    
    // Define CSS variable para posicionar o triângulo
    bubble.style.setProperty('--triangle-position', `${offsetLeft}px`);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio carregado!');
    
    // Posiciona o triângulo inicialmente
    positionTriangle();
    
    // Reposiciona ao redimensionar a janela
    window.addEventListener('resize', positionTriangle);
    
    // Adiciona evento de click nos links de navegação
    const navLinks = document.querySelectorAll('.nav-link');
    const nav = document.querySelector('.main-nav');
    const casesSection = document.querySelector('.cases');
    const wrapperSection = document.querySelector('.wrapper');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active de todos
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Adiciona active no link clicado
            link.classList.add('active');
            
            // Se clicar em My Work, faz scroll para a seção cases
            if (link.getAttribute('href') === '#work') {
                if (casesSection) {
                    casesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
            
            // Se clicar em About, faz scroll para a seção wrapper
            if (link.getAttribute('href') === '#about') {
                if (wrapperSection) {
                    wrapperSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
    
    // Animate nav on scroll
    window.addEventListener('scroll', () => {
        const casesTop = casesSection.getBoundingClientRect().top;
        const aboutLink = document.querySelector('.nav-link[href="#about"]');
        const workLink = document.querySelector('.nav-link[href="#work"]');
        
        if (casesTop <= 100) {
            nav.classList.add('repositioned');
            
            // Atualiza active para My Work
            navLinks.forEach(l => l.classList.remove('active'));
            workLink.classList.add('active');
        } else {
            nav.classList.remove('repositioned');
            
            // Atualiza active para About
            navLinks.forEach(l => l.classList.remove('active'));
            aboutLink.classList.add('active');
        }
    });
    
    // Card hover interactions with video support
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
                }, 300);
            }
            
            // Update background color
            if (newBgColor) {
                imageContainer.style.backgroundColor = newBgColor;
            }
        });
    });
});
