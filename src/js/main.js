
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


//listeners
hamburgerBtn.addEventListener('click',navbarDropdownHandler)
dropdownBtn.addEventListener('click', dropdownHandler);