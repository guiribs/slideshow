const slides = [
    'img/chrono.jpg',
    'img/inuyasha.jpg',
    'img/ippo.png',
    'img/tenchi.jpg',
    'img/tenjhotenge.jpg',
    'img/yuyuhakusho.jpg'
];

let currentSlide = 0;

const slideElement = document.querySelector('#slide');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

const updateSlide = () => {
    slideElement.src = slides[currentSlide];
};

const prevSlide = () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    updateSlide();
};

const nextSlide = () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateSlide();
};

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Inicializa com o primeiro slide
updateSlide();
