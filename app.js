

// HAMBURGER
const navRight = document.querySelector('.nav-right');
const bars = document.querySelector('.fa-bars');

bars.addEventListener('click', (e) => {
    navRight.classList.toggle("open");
})



