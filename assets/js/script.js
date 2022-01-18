// js pour le burger button de la version mobile
const getBurgerButton = document.getElementById('burgerButton');
const getBurger = document.getElementById('burger');
const getBurgerNavbar = document.querySelector('.navbarOfBurger');
const getNavbar = document.querySelector('nav');

// lors du click sur le burger button > rajout si non présent/retrait si déjà présent de la classe "active" 
getBurgerButton.addEventListener('click', function() {
    getBurger.classList.toggle('active');
    getBurgerNavbar.classList.toggle('active');
    // getModalBg.classList.toggle('active')
})