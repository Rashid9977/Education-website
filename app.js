let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');
let box = document.querySelector('.box');
let form = document.getElementById('form');
let errorMessage = document.querySelector('.error')

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}
var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        540: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3,

        },
    },
});
var swiper = new Swiper(".teachers-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        540: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3,

        },
    },
});

form.addEventListener('submit', (e) => {
    if (box.value === '' || box.value == null) {
        errorMessage.style.display = 'block'
    }
    else {
        errorMessage.style.display = 'block'
    }

    e.preventDefault()
})