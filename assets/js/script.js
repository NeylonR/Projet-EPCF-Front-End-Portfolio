// js pour le burger button de la version mobile
const getBurgerButton = document.getElementById('burgerButton');
const getBurger = document.getElementById('burger');
const getBurgerNavbar = document.getElementById('navbar');
const getNavbar = document.querySelector('nav');
const getNavbarLink = document.querySelectorAll('nav li');

// lors du click sur le burger button > rajout si non présent/retrait si déjà présent de la classe "active" 
getBurgerButton.addEventListener('click', function() {
    getBurger.classList.toggle('active');
    getBurgerNavbar.classList.toggle('active');
    // getModalBg.classList.toggle('active')
})

// lors du click sur une ancre dans le menu burger > le menu se ferme
getNavbarLink.forEach(ancre => {
    ancre.addEventListener("click", function(){
        getBurger.classList.toggle('active');
        getBurgerNavbar.classList.toggle('active');
    })
});

const toAnimate = document.querySelectorAll(".toAnimate");

function animationFade(){
    toAnimate.forEach(element => {
        // la hauteur de la fenetre
        const windowHeight = window.innerHeight;
        // distance entre le haut de l'element et le haut de la page
        let elementTop = element.getBoundingClientRect().top;
        // la taille de ce que l'on voit de l'element
        const elementVisible = 20;

        // lorsque l'element entre dans le champ de la hauteur de la page de 20px j'ajoute la classe "active" à l'element pour activer l'animation d'apparition, sinon je la retire
        if(elementTop < windowHeight - elementVisible){
            element.classList.add("active");
            } else{
                element.classList.remove("active");
        }
    });
}

// lors du scroll > ma fonction d'ajout ou retrait de classe "active"
window.addEventListener("scroll", animationFade);