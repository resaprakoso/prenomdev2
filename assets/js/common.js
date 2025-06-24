function menuWorks(){
const element = document.getElementById("scrollWorks")
const closeNav = document.getElementById("box-menu-mobile")
element.scrollIntoView();
closeNav.style.right = "-100%";
closeNav.style.transition = "0ms";
}

function menuContact(){
const element = document.getElementById("scrollContact")
const closeNav = document.getElementById("box-menu-mobile")
element.scrollIntoView();
closeNav.style.right = "-100%";
closeNav.style.transition = "0ms";
}

function hamburger(){
const openNav  = document.getElementById("box-menu-mobile")
openNav.style.right = "0";
openNav.style.transition = "300ms"
}

function closeHamburger(){
    const closeHamburger = document.getElementById("box-menu-mobile")
    closeHamburger.style.right = "-100%";
}

const copy = document.querySelector('.wrap-box-client').cloneNode(true);
document.querySelector('.container-client').appendChild(copy);