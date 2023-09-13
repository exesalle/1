const slides = document.querySelectorAll('.slider-container');
const dots = document.querySelectorAll('.dot');
const colors = ['#0ED984','#3577F6','#D72DF3']
const imageUrls = ['img/worldwide_green.svg', 'img/worldwide_blue.svg', 'img/worldwide_violet.svg'];
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });

    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        dot.style.backgroundImage = '';
    });

    dots[index].classList.add('active');
    dots[index].style.backgroundImage = `url(${imageUrls[index]})`;

    dots.forEach((dot, i) => {
        dot.addEventListener('mouseover', () => {
            dot.style.borderColor = colors[index];
        });

        dot.addEventListener('mouseout', () => {
            dot.style.borderColor = '';
        });
    });

}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i % 3;
        showSlide(currentIndex);
    });
});


setInterval(nextSlide, 3000);
showSlide(currentIndex);