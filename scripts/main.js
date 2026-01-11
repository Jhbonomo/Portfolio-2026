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
});
