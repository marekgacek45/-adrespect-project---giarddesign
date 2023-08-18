//mobile menu
const hamburgerBtn = document.querySelector('#hamburgerBtn')
const navbarDropdown = document.querySelector('#navbarDropdown')

const navbarDropdownHandler = () =>{
    hamburgerBtn.classList.toggle('is-active')
    navbarDropdown.classList.toggle('hidden')
    navbarDropdown.classList.toggle('block')
}

hamburgerBtn.addEventListener('click',navbarDropdownHandler)


//close nav when click item
const links = document.querySelectorAll('.nav-item')

const closeNavbarDropdownHandler = () =>{
    hamburgerBtn.classList.remove('is-active')
    navbarDropdown.classList.add('hidden')
    navbarDropdown.classList.remove('block')
}

links.forEach(link=>link.addEventListener('click',closeNavbarDropdownHandler))

//dropdown
const dropdownBtn = document.querySelector('#dropdownBtn')
const dropdownNavbar = document.querySelector('#dropdownNavbar')

const dropdownHandler = () => {
    dropdownNavbar.classList.toggle('hidden');
    dropdownNavbar.classList.toggle('block');
}

dropdownBtn.addEventListener('click', dropdownHandler);
//searchbar

const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const content = document.querySelector('body');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm === '') return;

  const searchRegex = new RegExp(`\\b${searchTerm}\\b`, 'gi');

  content.innerHTML = content.innerHTML.replace(searchRegex, match => `<span class="highlight">${match}</span>`);

  const highlightedElements = content.getElementsByClassName('highlight');
  if (highlightedElements.length > 0) {
    
      highlightedElements[0].scrollIntoView({block:'center', behavior: 'smooth' })
    }
    
});

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
    }, 1000); 
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

//animation

window.addEventListener("scroll", () => {
    const cardLeft = document.querySelector("#cardLeft");
    const cardCenter = document.querySelector("#cardCenter");
    const cardRight = document.querySelector("#cardRight");
    const targetPosition = cardLeft.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (targetPosition < windowHeight) {
      cardLeft.classList.add("animate-rollInLeft");
      cardCenter.classList.add("animate-rollInTop");
      cardRight.classList.add("animate-rollInRight");
    }
  });



//masonry
const masonryBtn = document.querySelector('#masonryBtn')
const masonryGradient = document.querySelector('#masonryGradient')
const hiddenImgs = document.querySelectorAll('.item')

const masonryHandler = () =>{
hiddenImgs.forEach(img=>img.classList.remove('hidden'))
hiddenImgs.forEach(img=>img.classList.add('inline-block'))
masonryGradient.classList.add('animate-fadeOut')
masonryBtn.classList.add('hidden')
window.scrollBy(0, -2000); 
}

masonryBtn.addEventListener('click',masonryHandler)


//modal gallery
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

const images = document.querySelectorAll('.item');
images.forEach(image => {
    image.addEventListener('click', () => {
        const src = image.getAttribute('src');
        modalImage.setAttribute('src', src);
        modal.classList.remove('hidden');
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
});
