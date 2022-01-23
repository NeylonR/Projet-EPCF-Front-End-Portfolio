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
        const elementVisible = 40;

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

// Effets hover sur les images de la section galerie
const getImgGalerie = document.querySelectorAll("#sectionGalerie .imgContainer");
const getCover = document.querySelector(".coverImg");
getImgGalerie.forEach(blocImage => {
    blocImage.addEventListener("mouseenter", function(e){
        e.target.querySelector(".coverImg").classList.add("visible");
        e.target.querySelector("img").style.transform = "scale(1.2)";
    })

    blocImage.addEventListener("mouseleave", function(e){
        e.target.querySelector(".coverImg").classList.remove("visible");
        e.target.querySelector("img").style.transform = "scale(1)";
    })
});

// section avis
const getPrevArrow = document.querySelector(".arrowPrev");
const getNextArrow = document.querySelector(".arrowNext");
const getAvis = document.querySelectorAll(".listeAvis li");

//ajout d'eventListener sur les deux flèches pour la navigation
getNextArrow.addEventListener("click", () => changeOrder(1,2,3));
getPrevArrow.addEventListener("click", () => changeOrder(3,1,2));

//rajout du contenu texte dans le h3 de chacune des flèches
getPrevArrow.querySelector("h3").innerText = document.querySelector("li[data-order='1'] h2").innerText;
getNextArrow.querySelector("h3").innerText = document.querySelector("li[data-order='3'] h2").innerText;

// fonction changement d'ordre des avis
function changeOrder(mainOrderTo, rightOrderTo, leftOrderTo) {
    const left = "1";
    const main = "2";
    const right = "3";
    
    //pour chaque <li>(avis)
    getAvis.forEach(element => {
        const getDataOrder = element.getAttribute("data-order");
    //vérification de la valeur de leurs data-order ( 1, 2 ou 3 ) > changement de cette valeur par une valeur passé en argument, ce qui donnera l'animation de mouvement
        switch (getDataOrder) {
        //exemple : si la photo a la data-order = 2, je lui passe en premier argument "1" pour que la photo bouge sur la gauche
        case main:
            element.setAttribute("data-order", mainOrderTo);
            break;
        case right:
            element.setAttribute("data-order", rightOrderTo);
            break;
        case left:
            element.setAttribute("data-order", leftOrderTo);
            break;
        }
    });

    // actualisation du texte dans les arrow precedent/suivant en recupérant le nom precedent/suivant
    getPrevArrow.querySelector("h3").innerText = document.querySelector("li[data-order='1'] h2").innerText;
    getNextArrow.querySelector("h3").innerText = document.querySelector("li[data-order='3'] h2").innerText;
}

const getSkillsCard = document.querySelectorAll("#sectionSkills article");
function skillsCardAnim(){
    getSkillsCard[1].classList.replace("fadeFromLeft", "fadeFromBottom");
    getSkillsCard[1].style.transform="translate(0,50px)"
    getSkillsCard[2].classList.replace("fadeFromLeft", "fadeFromRight");
    getSkillsCard[2].style.transform="translateX(100%)"
}
//au chargement de la page si la résolution > 900px > modification de classe et de style pour la 2e et 3e carte de la section skills pour changer l'animation d'arriver
window.addEventListener("load", function(){
    if (window.matchMedia("(min-width: 900px)").matches) {
        skillsCardAnim()
    }
})
// identique mais lorsque la page est resize 
window.addEventListener("resize", function(){
    if (window.matchMedia("(min-width: 900px)").matches) {
        skillsCardAnim()
    } else{
        getSkillsCard[1].classList.replace("fadeFromBottom", "fadeFromLeft");
        getSkillsCard[1].style.transform="translate(-100%,0)"
        getSkillsCard[2].classList.replace("fadeFromRight", "fadeFromLeft");
        getSkillsCard[2].style.transform="translateX(-100%)"
    }
})