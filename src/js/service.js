const service = document.querySelector(".service");
const isfullService = service.querySelector(".isfull_container");
const isfullElem = service.querySelector(".isfull-element");
const isfullSpan = service.querySelector(".isfull-span");
const serviceText = service.querySelector(".service-info__text");
const serviceP = serviceText.querySelector("p.service-info__text-medium")

const serviceSpan = serviceP.querySelector("span")

isfullService.addEventListener('click', function(event) {
    serviceP.classList.toggle('service-info__text-medium');
    serviceSpan.classList.toggle('service-info__text-last');
})

isfullService.addEventListener('click', function() {
    isfullElem.classList.toggle('rotate-element');
    if (isfullElem.classList.contains('rotate-element')) {
        isfullSpan.textContent = 'Скрыть'
    } else { isfullSpan.textContent = 'Показать все' };
})