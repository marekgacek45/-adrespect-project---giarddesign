//mobile menu
const hamburgerBtn = document.querySelector('#hamburgerBtn')
const navbarDropdown = document.querySelector('#navbarDropdown')

const navbarDropdownHandler = () =>{
    hamburgerBtn.classList.toggle('is-active')
    navbarDropdown.classList.toggle('hidden')
    navbarDropdown.classList.toggle('block')
}

//dropdown
const dropdownBtn = document.querySelector('#dropdownBtn')
const dropdownNavbar = document.querySelector('#dropdownNavbar')

const dropdownHandler = () => {
    dropdownNavbar.classList.toggle('hidden');
    dropdownNavbar.classList.toggle('block');
}

//searchbar





//slider


const slides = document.querySelectorAll('.sliderSlide');
let currentSlide = 0;
let interval;

function showSlide(index) {
    slides.forEach((slide, idx) => {
        if (idx === index) {
            slide.style.display = 'flex';
            
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    const nextSlideIndex = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.remove('animate-prevSlide');
    slides[nextSlideIndex].classList.add('animate-slide');

    currentSlide = nextSlideIndex;
    showSlide(currentSlide);

    stopAutoSlide();
    startAutoSlide();

    setTimeout(() => {
        slides[nextSlideIndex].classList.remove('animate-slide');
    }, 1000); // 500ms is the duration of the slideIn animation
}

function prevSlide() {
    const prevSlideIndex = (currentSlide - 1 + slides.length) % slides.length;

    slides[currentSlide].classList.remove('animate-slide');
    slides[prevSlideIndex].classList.add('animate-prevSlide');

    currentSlide = prevSlideIndex;
    showSlide(currentSlide);

    stopAutoSlide();
    startAutoSlide();

    setTimeout(() => {
        slides[prevSlideIndex].classList.remove('animate-prevSlide');
    }, 1000); // 500ms is the duration of the slideOut animation
}

function startAutoSlide() {
    interval = setInterval(() => {
        nextSlide();
    }, 5000);
}

function stopAutoSlide() {
    clearInterval(interval);
}

function startSlider() {
    showSlide(currentSlide);

    const nextButtons = document.querySelectorAll('.nextButton');
    nextButtons.forEach(nextButton => {
        nextButton.addEventListener('click', () => {
            nextSlide();
            stopAutoSlide();
            startAutoSlide();
        });
    });

    const prevButtons = document.querySelectorAll('.prevButton');
    prevButtons.forEach(prevButton => {
        prevButton.addEventListener('click', () => {
            prevSlide();
            stopAutoSlide();
            startAutoSlide();
        });
    });

    startAutoSlide();
}

startSlider();

//masonry
const masonryBtn = document.querySelector('#masonryBtn')
const masonryGradient = document.querySelector('#masonryGradient')
const test = document.querySelector('#test')

const masonryHandler = () =>{
test.classList.toggle('hidden')
}
//listeners

masonryBtn.addEventListener('click',masonryHandler)
hamburgerBtn.addEventListener('click',navbarDropdownHandler)
dropdownBtn.addEventListener('click', dropdownHandler);