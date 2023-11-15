const featuresButton = document.querySelector('.featuresButton');
const companyButton = document.querySelector('.companyButton');
const menuIcon = document.querySelector('.menu');
const navbarMenu = document.querySelector('.navbar__menu-container');
const overlay = document.querySelector('.overlay');

let arrowIcon, dropDownMenu;

featuresButton.addEventListener('click', (event) => {
    const clickedButton = event.target;
    arrowIcon = clickedButton.querySelector('.arrow-icon');
    dropDownMenu = clickedButton.nextElementSibling;

    arrowIcon.classList.toggle('flip');
    dropDownMenu.classList.toggle('visible');
});

companyButton.addEventListener('click', (event) => {
    const clickedButton = event.target;
    arrowIcon = clickedButton.querySelector('.arrow-icon');
    dropDownMenu = clickedButton.nextElementSibling;

    arrowIcon.classList.toggle('flip');
    dropDownMenu.classList.toggle('visible');
});

document.addEventListener('click', (event) => {
    if (!featuresButton.contains(event.target) && !companyButton.contains(event.target)) {
        arrowIcon.classList.remove('flip');
        dropDownMenu.classList.remove('visible');
    }
});

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    menuIcon.classList.remove('active');
    navbarMenu.classList.remove('active');
    overlay.classList.remove('active');

})

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

// alt solution

// featuresButton.addEventListener('click', (event) => {
//     const clickedButton = event.currentTarget;
//     const arrowIcon = clickedButton.querySelector('.arrow-icon');

//     const parentListItem = clickedButton.closest('li');
//     const dropDownMenu = parentListItem.querySelector('.dropdown-menu');

//     arrowIcon.classList.toggle('flip');
//     dropDownMenu.classList.toggle('visible');
// });

// companyButton.addEventListener('click', (event) => {
//     const clickedButton = event.currentTarget;
//     const arrowIcon = clickedButton.querySelector('.arrow-icon');
//     const dropDownMenu = clickedButton.querySelector('.dropdown-menu')

//     arrowIcon.classList.toggle('flip');
//     dropDownMenu.classList.toggle('visible');
// });