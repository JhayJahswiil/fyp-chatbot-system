// BTN GROUP

const steps_btn = document.querySelector('#step-btn');
const simplicity_btn = document.querySelector('#simplicity-btn');
const algorithm_btn = document.querySelector('#algorithm-btn');

const steps = document.querySelector('#steps');
const simplicity = document.querySelector('#simplicity');
const algorithm = document.querySelector('#algorithm');

steps_btn.addEventListener('click', (e) => {
    steps_btn.classList.add('active-btn')
    simplicity_btn.classList.remove('active-btn');
    algorithm_btn.classList.remove('active-btn');
    steps.style.display = 'block';
    simplicity.style.display = 'none';
    algorithm.style.display = 'none';
})

simplicity_btn.addEventListener('click', function () {
    steps_btn.classList.remove('active-btn');
    simplicity_btn.classList.add('active-btn');
    algorithm_btn.classList.remove('active-btn');
    steps.style.display = 'none';
    simplicity.style.display = 'block';
    algorithm.style.display = 'none';
})

algorithm_btn.addEventListener('click', function () {
    steps_btn.classList.remove('active-btn');
    simplicity_btn.classList.remove('active-btn');
    algorithm_btn.classList.add('active-btn');
    steps.style.display = 'none';
    simplicity.style.display = 'none';
    algorithm.style.display = 'block';
})