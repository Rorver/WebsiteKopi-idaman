//Toggle class active

const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//Gone toggle class active

const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (evt) {
    if(!hamburger.contains(evt.target) && !navbarNav.contains(evt.target)) {
        navbarNav.classList.remove('active');
    }
}) 