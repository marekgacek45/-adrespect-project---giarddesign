const hamburgerBtn = document.querySelector('.hamburger')
const navbarMobile = document.querySelector('#navbar-mobile')

const navHandler = ()=>{
    hamburgerBtn.classList.toggle('is-active')
    navbarMobile.classList.toggle('top-20')
    navbarMobile.classList.toggle('-top-80')
    
}


hamburgerBtn.addEventListener('click',navHandler)