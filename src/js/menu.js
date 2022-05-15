let menu = document.querySelector('.menu'); //общий контейнер меню
let langMenu = menu.querySelector('.language'); //список языков(контейнер)
let allLang = langMenu.querySelectorAll('li'); //все языки
//для языков
let menuLink = menu.querySelector('.menu__container');
let menuLinks = menuLink.querySelector('ul');
let menuLinksAll = menuLinks.querySelector('li');

//Сделаем делегирование на смену языка
langMenu.addEventListener('click', function(event) {
    if (event.target.closest('li').classList.contains('language_active') == false) {
        for (let i = 0; i < allLang.length; i++) {
            allLang[i].classList.remove('language_active');
        }
        event.target.classList.add('language_active')
    }
});
//Выше оформлена смена кнопок языка
menuLinks.addEventListener('click', function(event) {
    if (event.target.closest("li")) {
        event.preventDefault();
    }
});
//а тут (выше) отмена перехода по ссылке по умолчанию