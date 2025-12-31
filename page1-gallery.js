/* ========================================
   PAGE 1 GALLERY
   Add images specific to this category
   ======================================== */

// ===== ADD YOUR IMAGES HERE =====
// Just add the filename of each image for this category
// Format: 'images/category1/your-image-name.jpg'

const galleryImages = [
    // Example images for Category 1 - replace these with your own!
    'images/category1/example1.jpg',
    'images/category1/example2.jpg',
    'images/category1/example3.jpg',
    // Add more images here
];

// ================================

// Don't edit below this line unless you want to customize the gallery behavior

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    
    if (!gallery) return;
    
    galleryImages.forEach((imageSrc, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `Gallery image ${index + 1}`;
        img.loading = 'lazy';
        
        item.appendChild(img);
        gallery.appendChild(item);
        
        item.addEventListener('click', () => openLightbox(imageSrc));
    });
    
    createLightbox();
});

function createLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.id = 'lightbox';
    
    const closeBtn = document.createElement('div');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '×';
    closeBtn.addEventListener('click', closeLightbox);
    
    const img = document.createElement('img');
    img.id = 'lightbox-image';
    
    lightbox.appendChild(closeBtn);
    lightbox.appendChild(img);
    document.body.appendChild(lightbox);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
}

function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-image');
    
    img.src = imageSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}
