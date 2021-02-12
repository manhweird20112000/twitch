let mainMenu = document.querySelector('.main-menu');

let tabs = document.querySelectorAll('.main-menu__item');

let lineHeader = document.querySelector('.left-line');

let inputSearch = document.getElementById('search__input');

let searchBtn = document.querySelector('.btn--search');

let btnAccount = document.querySelector('.account__icon');

let optionAccount = document.querySelector('.account-option');

let rewardBtn = document.querySelector('.reward__icon');

let rewardInfo = document.querySelector('.reward__info');

let menuOption = document.querySelector('.main-menu__item--option');

let subOption = document.querySelector('.sub-option');

let headForms = document.querySelectorAll('.form-heading__title p');

let tabsForm = document.querySelectorAll('.tabs-form__item');

let formList = document.querySelectorAll('.form__item');

let overlay = document.querySelector('.overlay');

let btnRegister = document.querySelector('.btn--register');


tabsForm.forEach((tabForm, index) => {

    let lineTabForm = document.querySelector('.line-form');

    tabForm.addEventListener('click', function() {
        let activeTab = document.querySelector('.active-tab');
        let activeHeading = document.querySelector('.show-title');
        let activeForm = document.querySelector('.show-form');

        lineTabForm.style.left = tabForm.offsetLeft + "px";
        lineTabForm.style.width = tabForm.offsetWidth + "px";

        activeHeading.classList.remove('show-title');
        headForms[index].classList.add('show-title');

        activeForm.classList.remove('show-form');
        formList[index].classList.add('show-form');


        activeTab.classList.remove('active-tab');
        tabForm.classList.add('active-tab');
    })
})

btnAccount.onclick = function() {
    optionAccount.classList.toggle("show");
}

menuOption.addEventListener('click', function() {
    subOption.classList.toggle('show');
})

tabs.forEach((tab, index) => {
    tab.addEventListener('click', function() {
        let tabActive = document.querySelector('.main-menu .active-item');

        tabActive.classList.remove('active-item');
        tab.classList.add('active-item');

        lineHeader.style.left = tab.offsetLeft + "px";
        lineHeader.style.width = tab.offsetWidth + "px";
    })
})

inputSearch.onblur = function(e) {
    let value = e.target.value;
    if (value == '' || value == null) {
        searchBtn.style.cursor = 'not-allowed';
    } else {
        searchBtn.style.cursor = 'pointer';
    }
}

function closeForm() {
    let btnClose = document.querySelector('.close-form');

    btnClose.addEventListener('click', function() {
        overlay.style.display = 'none';
    })
}
closeForm();