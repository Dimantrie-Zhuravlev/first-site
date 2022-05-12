const fullBrand = document.querySelector('.repair-brands');
const isbrandClick = fullBrand.querySelector('.brands_isfull');
const isbrand = document.querySelector('.brand-close');
const brandContainer = document.querySelector('.brands');
const brandSpan = fullBrand.querySelector('.isfull-span');

isbrandClick.addEventListener('click', function() {
    console.log('click');
    brandContainer.classList.toggle('brand-closelist');
    isbrand.classList.toggle('rotate-brand');
    if (isbrand.classList.contains('rotate-brand')) { brandSpan.textContent = 'Скрыть' } else { brandSpan.textContent = 'Показать все' }
})