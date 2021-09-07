'use strict'
let sliderWrapper = document.querySelector(".slider-wrapper");
let sliderItem = document.querySelector(".clients-item");
let sliderControls = document.querySelectorAll(".button-slider");
let sliderControlLeft = document.querySelector(".btn-left");
let sliderControlRight = document.querySelector(".btn-right");


const sliders = (slides, dir, quantiteSliders, prev, next) => {
    let slideIndex = 1;
    const items = document.querySelectorAll(slides);

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = items.length;
        }
        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });
        items[slideIndex - 1].style.display = 'flex';

    }
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    try {
        const prevBtn = document.querySelector(prev);
        const nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });
        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');

        });
    } catch (e) {}

};

sliders('.clients-item', '', 2, ".btn-left", '.btn-right')
    //export default sliders;