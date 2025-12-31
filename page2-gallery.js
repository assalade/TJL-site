/* ========================================
   PAGE 2 GALLERY - ENHANCED VERSION
   With navigation arrows and zoom
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

let currentImageIndex = 0;
let isZoomed = false;

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
        img.loading = 'lazy';
        
        item.appendChild(img);
        gallery.appendChild(item);
        
        // Add click event for lightbox
        item.addEventListener('click', () => openLightbox(index));
    });
    
    // Create enhanced lightbox
    createLightbox();
});

// Enhanced Lightbox with navigation and zoom
function createLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.id = 'lightbox';
    
    // Close button
    const closeBtn = document.createElement('div');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '×';
    closeBtn.addEventListener('click', closeLightbox);
    
    // Previous button
    const prevBtn = document.createElement('div');
    prevBtn.className = 'lightbox-prev';
    prevBtn.innerHTML = '‹';
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showPreviousImage();
    });
    
    // Next button
    const nextBtn = document.createElement('div');
    nextBtn.className = 'lightbox-next';
    nextBtn.innerHTML = '›';
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showNextImage();
    });
    
    // Image container for zoom
    const imgContainer = document.createElement('div');
    imgContainer.className = 'lightbox-image-container';
    imgContainer.id = 'lightbox-image-container';
    
    const img = document.createElement('img');
    img.id = 'lightbox-image';
    img.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleZoom();
    });
    
    imgContainer.appendChild(img);
    
    // Counter
    const counter = document.createElement('div');
    counter.className = 'lightbox-counter';
    counter.id = 'lightbox-counter';
    
    lightbox.appendChild(closeBtn);
    lightbox.appendChild(prevBtn);
    lightbox.appendChild(nextBtn);
    lightbox.appendChild(imgContainer);
    lightbox.appendChild(counter);
    document.body.appendChild(lightbox);
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('lightbox');
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showPreviousImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    });
}

function openLightbox(index) {
    currentImageIndex = index;
    isZoomed = false;
    updateLightboxImage();
    
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-image');
    const container = document.getElementById('lightbox-image-container');
    
    lightbox.classList.remove('active');
    container.classList.remove('zoomed');
    isZoomed = false;
    document.body.style.overflow = '';
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    isZoomed = false;
    updateLightboxImage();
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    isZoomed = false;
    updateLightboxImage();
}

function updateLightboxImage() {
    const img = document.getElementById('lightbox-image');
    const counter = document.getElementById('lightbox-counter');
    const container = document.getElementById('lightbox-image-container');
    
    img.src = galleryImages[currentImageIndex];
    counter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
    
    // Reset zoom
    container.classList.remove('zoomed');
    isZoomed = false;
}

function toggleZoom() {
    const container = document.getElementById('lightbox-image-container');
    isZoomed = !isZoomed;
    
    if (isZoomed) {
        container.classList.add('zoomed');
    } else {
        container.classList.remove('zoomed');
    }
}
