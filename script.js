const hamburgerBtn = document.querySelector('#hamburger button');
const nav = document.querySelector('nav');

hamburgerBtn.addEventListener('click', e => {
    hamburgerBtn.classList.toggle('open');
    nav.classList.toggle('open');
});