let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');

function showSlide(index) {
    const angle = (360 / totalSlides) * index;
    slider.style.transform = `rotateY(${angle}deg)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) ;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Initialize the slider
showSlide(currentSlide);

// Add event listeners for next and previous buttons
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Optional: Auto-slide every 5 seconds
setInterval(nextSlide, 2000);