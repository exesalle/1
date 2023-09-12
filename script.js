const slides = document.querySelectorAll('.slider-container');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });

    dots.forEach((dot, i) => {
        dot.classList.remove('active');
    });

    dots[index].classList.add('active');

}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i % 3;
        showSlide(currentIndex);
    });
});

setInterval(nextSlide, 3000);
showSlide(currentIndex);