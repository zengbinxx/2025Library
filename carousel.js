// Carousel functionality
let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-slide");
const dots = document.getElementsByClassName("dot");
const slidesContainer = document.querySelector('.carousel-slides');

// Initialize carousel
function initCarousel() {
    if (slides.length === 0) return;
    
    // Set initial position
    slidesContainer.style.transform = `translateX(0)`;
    
    // Update dots
    updateDots();
}

// Switch to specific slide
function currentSlide(n) {
    if (n >= slides.length) return;
    slideIndex = n;
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    updateDots();
}

// Change slide by n steps
function changeSlide(n) {
    const newIndex = slideIndex + n;
    if (newIndex >= slides.length || newIndex < 0) return;
    currentSlide(newIndex);
}

// Update dot indicators
function updateDots() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";
}

// Auto slide functionality
function autoSlide() {
    if (slideIndex < slides.length - 1) {
        changeSlide(1);
    } else {
        currentSlide(0);
    }
    setTimeout(autoSlide, 5000);
}

// Start carousel
function startCarousel() {
    initCarousel();
    autoSlide();
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    startCarousel();
}); 