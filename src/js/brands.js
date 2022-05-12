const isbrand = document.querySelector('.brand-close');
console.log(isbrand)
const brandContainer = document.querySelector('.brands');
const brandSpan = document.querySelector('.brand_isfull')

isbrand.addEventListener('click', function() {
    console.log('click');
    brandContainer.classList.toggle('brand-closelist');
    isbrand.classList.toggle('rotate-brand');
    if (isbrand.classList.contains('rotate-brand')) { brandSpan.textContent = 'Скрыть' } else { brandSpan.textContent = 'Показать все' }
})