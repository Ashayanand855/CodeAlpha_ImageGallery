document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-button');
    const galleryItems = document.querySelectorAll('.image-card');
    
    const lightbox = document.getElementById('image-popup');
    const lightboxImg = document.getElementById('popup-image');
    const lightboxClose = document.getElementById('close-popup');
    const lightboxPrev = document.getElementById('prev-image');
    const lightboxNext = document.getElementById('next-image');
    const lightboxControls = document.getElementById('popup-controls');
    
    let currentImageIndex = 0;
    let visibleItems = Array.from(galleryItems);
    let inactivityTimer;

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            visibleItems = [];
            
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === category) {
                    item.style.display = 'block';
                    visibleItems.push(item);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Lightbox functionality
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            currentImageIndex = visibleItems.indexOf(item);
            openLightbox(item);
        });
    });

    function openLightbox(item) {
        const img = item.querySelector('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        resetInactivityTimer();
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
        clearTimeout(inactivityTimer);
    }

    function showNextImage() {
        if (visibleItems.length === 0) return;
        currentImageIndex = (currentImageIndex + 1) % visibleItems.length;
        const item = visibleItems[currentImageIndex];
        const img = item.querySelector('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        resetInactivityTimer();
    }

    function showPrevImage() {
        if (visibleItems.length === 0) return;
        currentImageIndex = (currentImageIndex - 1 + visibleItems.length) % visibleItems.length;
        const item = visibleItems[currentImageIndex];
        const img = item.querySelector('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        resetInactivityTimer();
    }

    // Event Listeners for Lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); showNextImage(); });
    lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); showPrevImage(); });
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'ArrowLeft') showPrevImage();
    });

    // Mouse inactivity to hide controls
    function resetInactivityTimer() {
        lightboxControls.classList.remove('hide');
        lightboxClose.classList.remove('hide');
        
        clearTimeout(inactivityTimer);
        
        inactivityTimer = setTimeout(() => {
            lightboxControls.classList.add('hide');
            lightboxClose.classList.add('hide');
        }, 3000);
    }

    lightbox.addEventListener('mousemove', resetInactivityTimer);
    lightbox.addEventListener('touchstart', resetInactivityTimer);
});
