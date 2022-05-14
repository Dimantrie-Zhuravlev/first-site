const slider = document.querySelectorAll('.swiper');


function mobileSlider() {
    for (let i = 0; i < slider.length; i++) {
        if (window.innerWidth <= 767 && !slider[i].classList.contains('swiper-initialized')) {
            return mySwiper = new Swiper(slider[i], {
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
        if (window.innerWidth > 767 && slider[i].classList.contains('swiper-initialized')) mySwiper.destroy();
    }
}

mobileSlider()

window.addEventListener('resize', () => {
    mobileSlider();
});





// if (window.innerWidth < 767)
//     new swiper(slider, {
//         slidesPerView: 1,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },

//     })