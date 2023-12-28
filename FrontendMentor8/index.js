// Toggle Nav - select menu button and nav links
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
const darkBG = document.getElementById('darkBG');


let openMenuImg = document.getElementById('open-menu');


// click event listener on #navToggle
// toggle open and close side navbar
navToggle.addEventListener("click", () => {
    
    mainNav.classList.toggle('open-nav');
    
    darkBG.classList.toggle('darkBG');
    
    //instead of changing JS add CSS class instead to change the background image
    openMenuImg.classList.toggle('closeMenu');
})


// get features
const features = document.getElementById('subNavFeat');
const featuresSubNav = document.getElementById('featuresSubNav');

// get company
const company = document.getElementById('subNavCompany');
const companySubNav = document.getElementById('companySubNav');

features.addEventListener("click", () => {
    featuresSubNav.classList.toggle('open-subNav');
})

company.addEventListener("click", () => {
    companySubNav.classList.toggle('open-subNav')
})







    


    
    
    


