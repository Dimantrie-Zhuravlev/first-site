const fullBrand = document.querySelector('.repair-brands');
const containerBr = fullBrand.querySelector('.brands');
const isfullBr = fullBrand.querySelector('.isfull_container');
const isfullElemBr = fullBrand.querySelector('.isfull-element');
const isfullSpanBr = fullBrand.querySelector('.isfull-span');


isfullBr.addEventListener('click', function() {
    isfullElemBr.classList.toggle('rotate-element');
    if (isfullElemBr.classList.contains('rotate-element')) {
        isfullSpanBr.textContent = 'Скрыть'
    } else { isfullSpanBr.textContent = 'Показать все' };
    containerBr.classList.toggle('brands_closebrands');
})