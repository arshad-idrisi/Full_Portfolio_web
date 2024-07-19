let nav = document.querySelector('nav');
let menuIcon = document.querySelector('.fa-bars');

menuIcon.onclick = () => {
    nav.classList.toggle("active");
}