const slider = document.querySelectorAll('.swiper');


function mobileSlider() {
    for (let i = 0; i < slider.length; i++) {
        mySwiper = new Swiper(slider[i], {
            slidesPerView: 1,
            slideClass: 'swiper-slide',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            width: 240,
            spaceBetween: 16,
        });
        if (window.innerWidth <= 767 && !slider[i].classList.contains('swiper-initialized')) {
            return mySwiper;
        }
        if (window.innerWidth > 767 && slider[i].classList.contains('swiper-initialized')) { mySwiper.destroy() };
    }
}

mobileSlider()

window.addEventListener('resize', () => {
    mobileSlider();
});