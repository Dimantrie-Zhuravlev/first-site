let menu = document.querySelector('.menu'); //общий контейнер меню
let main = document.querySelector('main');
let langMenu = menu.querySelector('.language'); //список языков(контейнер)
let allLang = langMenu.querySelectorAll('li'); //все языки
//для языков
let menuLink = menu.querySelector('.menu__container');
let menuLinks = menuLink.querySelector('ul');
let menuLinksAll = menuLinks.querySelector('li');
//ниже для выдвижения меню
let header = document.querySelector('.header');
let burger = header.querySelector('.header__menu_burger');
let closeMenu = menu.querySelector('.header__circle_back');
let menuClear = function() {
    menu.classList.remove('menu-close');
};
let darkList = function() {
    main.classList.add('main-dark');
};

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
burger.addEventListener('click', function(event) {
    menu.classList.add('menu-open');
    setTimeout(darkList, 500);
})
closeMenu.addEventListener("click", function(event) {
    menu.classList.remove('menu-open');
    menu.classList.add('menu-close');
    main.classList.remove('main-dark');
    setTimeout(menuClear, 1000)
        // menu.classList.add('menu-close');
});
main.addEventListener('click', function(event) {
    if (menu.classList.contains('menu-open') && main.classList.contains('main-dark')) {
        menu.classList.remove('menu-open');
        menu.classList.add('menu-close');
        main.classList.remove('main-dark');
        setTimeout(menuClear, 1000)
    }
})