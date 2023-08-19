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

const showSlide=(index) => {
    slides.forEach((slide, idx) => {
        if (idx === index) {
            slide.style.display = 'flex';
            
        } else {
            slide.style.display = 'none';
        }
    });
}

const nextSlide = () =>{
    const nextSlideIndex = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.remove('animate-prevSlide');
    slides[nextSlideIndex].classList.add('animate-slide');

    currentSlide = nextSlideIndex;
    showSlide(currentSlide);

    stopAutoSlide();
    startAutoSlide();

    setTimeout(() => {
        slides[nextSlideIndex].classList.remove('animate-slide');
    }, 1000); 
}

const prevSlide = () => {
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

const startAutoSlide =()=> {
    interval = setInterval(() => {
        nextSlide();
    }, 5000);
}

const stopAutoSlide = ()=> {
    clearInterval(interval);
}

const startSlider = ()=> {
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
    const cardText = document.querySelector("#cardText");
    const cardsPosition = cardLeft.getBoundingClientRect().top;
    
    const realisationsText = document.querySelector('#realisationsText')
    const realisationsImg = document.querySelector('#realisationsImg')
    const realisationsTextPosition = realisationsText.getBoundingClientRect().top;

    const masonryFirstItem = document.querySelector('.first-item')
    const masonryItems = document.querySelectorAll('.item')
    const masonryFirstItemPosition = masonryFirstItem.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;

    if (cardsPosition < windowHeight) {
      cardLeft.classList.add("animate-rollInLeft");
      cardCenter.classList.add("animate-rollInTop");
      cardRight.classList.add("animate-rollInRight");
      cardText.classList.add("animate-focusTextFwd");
    }
    if (realisationsTextPosition < windowHeight) {
     realisationsText.classList.add("animate-focusTextFwd");
     realisationsImg.classList.add("animate-fadeIn");
    
    }
    if (masonryFirstItemPosition < windowHeight) {
    masonryItems.forEach(item=>item.classList.add('animate-swingIn'))
    
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
