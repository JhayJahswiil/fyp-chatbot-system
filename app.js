

// HAMBURGER
const navRight = document.querySelector('.nav-right');
const bars = document.querySelector('.fa-bars');

bars.addEventListener('click', (e) => {
    navRight.classList.toggle("open");
})



// if (navRight.classList.toggle("open")) {
//     window.addEventListener('click', (e) => {
//         navRight.style.width = "-250px"
//         // alert('hi')
//     })
// }