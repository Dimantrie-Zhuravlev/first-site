let headerPhones = document.querySelectorAll(".header__circle_cellphone");
let callBack = document.querySelector(".modal-call");
let CloseheaderPhone = callBack.querySelector('.header__circle_back');
let menu = document.querySelector('.menu');
let headerPhonesHeader = headerPhones[0];
let headerPhonesMenu = headerPhones[1];

let main = document.querySelector('main');

let callBackClear = function() {
    callBack.classList.remove('modal-call_close');
    main.classList.remove('main_heightHidden');
};
// let menuClear = function() {
//     menu.classList.remove('menu_close');
//     main.classList.remove('main_heightHidden');
// };
let darkList = function() {
    main.classList.add('main_dark');
};
let darkListMenu = function() {
    menu.classList.add('main_dark');
};

console.log(headerPhones)
    //открытие кола
for (let i = 0; i < headerPhones.length; i++) {
    headerPhones[i].addEventListener('click', function(event) {
        callBack.classList.add('modal-call_open');
        setTimeout(darkList, 500);
        main.classList.add('main_heightHidden');
        if (window.innerWidth >= 1439) {
            setTimeout(darkListMenu, 500);
        }
        if (menu.classList.contains('menu_open')) {
            menu.classList.remove('menu_open');
            menu.classList.add('menu_close');
            main.classList.remove('main_dark');
            setTimeout(menuClear, 1000)

        }
    })
}
//закрытие кола
CloseheaderPhone.addEventListener('click', function(event) {
    callBack.classList.remove('modal-call_open');
    callBack.classList.add('modal-call_close');
    main.classList.remove('main_dark');
    if (menu.classList.contains('main_dark')) {
        menu.classList.remove('main_dark')
    }
    setTimeout(callBackClear, 1000)
})