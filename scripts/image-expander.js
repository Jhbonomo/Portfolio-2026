// Image Expander - Click to expand images
document.addEventListener('DOMContentLoaded', () => {
    // Create modal elements
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="image-modal-content">
            <button class="image-modal-close" aria-label="Close">&times;</button>
            <img class="image-modal-img" src="" alt="">
        </div>
    `;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector('.image-modal-img');
    const closeBtn = modal.querySelector('.image-modal-close');

    // Select all expandable images including hero image
    const images = document.querySelectorAll('.article-hero-image img, .article-image img, .content-section img');

    images.forEach(img => {
        // Add click cursor and event
        img.style.cursor = 'pointer';
        img.setAttribute('title', 'Click to expand');
        
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close modal functions
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    };

    closeBtn.addEventListener('click', closeModal);
    
    // Close when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.className === 'image-modal-content') {
            closeModal();
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
