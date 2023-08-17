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
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
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


//listeners
hamburgerBtn.addEventListener('click',navbarDropdownHandler)
dropdownBtn.addEventListener('click', dropdownHandler);