const fulltech = document.querySelector('.repair-technic');
const containerTec = fulltech.querySelector('.brands');
const isfullTec = fulltech.querySelector('.isfull_container');
const isfullElemTec = fulltech.querySelector('.isfull-element');
const isfullSpanTec = fulltech.querySelector('.isfull-span');


isfullTec.addEventListener('click', function() {
    console.log('все работает');
    isfullElemTec.classList.toggle('rotate-element');
    if (isfullElemTec.classList.contains('rotate-element')) {
        isfullSpanTec.textContent = 'Скрыть'
    } else { isfullSpanTec.textContent = 'Показать все' };
    containerTec.classList.toggle('technic_closebrands');
})