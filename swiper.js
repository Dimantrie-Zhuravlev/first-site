const slider = document.querySelector('.swiper');


function mobileSlider() {
    if (window.innerWidth <= 767 && !slider.classList.contains('swiper-initialized')) {
        return mySwiper = new Swiper(slider, {
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

    }
    if (window.innerWidth > 767 && slider.classList.contains('swiper-initialized')) mySwiper.destroy();
}

mobileSlider()

window.addEventListener('resize', () => {
    mobileSlider();
});



if (window.inner)
    new swiper('.partners-navigation', {
        slidesPerView: 2,
        pagination: {
            el: '.partners__pagination',
            clickable: true,
        },

    })