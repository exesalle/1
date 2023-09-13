const slides = document.querySelectorAll('.slider-container');
const dots = document.querySelectorAll('.dot');
const colors = ['#0ED984','#3577F6','#D72DF3']
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });

    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        dot.style.color = '';
    });

    dots[index].classList.add('active');
    dots[index].style.color= colors[index];

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
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i % 3;
        showSlide(currentIndex);
    });
});

setInterval(nextSlide, 3000);
showSlide(currentIndex);