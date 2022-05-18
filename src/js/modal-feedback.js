let headerMessage = document.querySelectorAll(".header__circle_message");
let feedback = document.querySelector(".modal-feedback");
let CloseheaderMessage = feedback.querySelector('.header__circle_back');
let menu = document.querySelector('.menu');
let callBack = document.querySelector(".modal-call-elem");

let main = document.querySelector('main');

let callBackClear = function() {
    callBack.classList.remove('modal-call_close');
    feedback.classList.remove('modal-call_close');
    main.classList.remove('main_heightHidden');
};

let menuClear = function() {
    menu.classList.remove('menu_close');
    main.classList.remove('main_heightHidden');
};

let darkList = function() {
    main.classList.add('main_dark');
};
let darkListMenu = function() {
    menu.classList.add('main_dark');
};

//     //открытие кола
for (let i = 0; i < headerMessage.length; i++) {
    headerMessage[i].addEventListener('click', function(event) {
        feedback.classList.add('modal-call_open');
        setTimeout(darkList, 500);
        main.classList.add('main_heightHidden');
        setTimeout(menuClear, 1000)
        if (window.innerWidth >= 1439) {
            setTimeout(darkListMenu, 500);
        }
        if (menu.classList.contains('menu_open')) {
            menu.classList.remove('menu_open');
            menu.classList.add('menu_close');
            main.classList.remove('main_dark');
            setTimeout(callBackClear, 1000)

        }
    })
}
// //закрытие кола

CloseheaderMessage.addEventListener('click', function(event) {
    feedback.classList.remove('modal-call_open');
    feedback.classList.add('modal-call_close');
    main.classList.remove('main_dark');
    if (menu.classList.contains('main_dark')) {
        menu.classList.remove('main_dark')
    }
    setTimeout(callBackClear, 1000)
})

main.addEventListener('click', function(event) {

    if (headerMessage[0] !== event.target) {
        if (feedback.classList.contains('modal-call_open')) {
            feedback.classList.remove('modal-call_open');
            feedback.classList.add('modal-call_close');
            main.classList.remove('main_dark');
            menu.classList.remove('main_dark');
            setTimeout(callBackClear, 1000)
        }
    }
})