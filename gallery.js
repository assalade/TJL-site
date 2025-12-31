/* ========================================
   GALLERY JAVASCRIPT
   Automatically generates gallery from image list
   ======================================== */

// ===== ADD YOUR IMAGES HERE =====
// Just add the filename of each image you upload to the 'images' folder
// Format: 'images/your-image-name.jpg'

const galleryImages = [
    // Example images - replace these with your own!
    'images/example1.jpg',
    'images/example2.jpg',
    'images/example3.jpg',
    'images/example4.jpg',
    'images/example5.jpg',
    'images/example6.jpg',
    // Add more images here - just copy the line above and change the filename
];

// ================================

// Don't edit below this line unless you want to customize the gallery behavior

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    
    // Check if gallery exists on this page
    if (!gallery) return;
    
    // Generate gallery items
    galleryImages.forEach((imageSrc, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `Gallery image ${index + 1}`;
        img.loading = 'lazy'; // Lazy load images for better performance
        
        item.appendChild(img);
        gallery.appendChild(item);
        
        // Add click event for lightbox
        item.addEventListener('click', () => openLightbox(imageSrc));
    });
    
    // Create lightbox
    createLightbox();
});

// Lightbox functionality
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
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close on ESC key
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
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
}
