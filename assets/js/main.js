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