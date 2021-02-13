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

let btnLogin = document.querySelector('.btn--login');

btnLogin.onclick = function() {
    overlay.classList.toggle('active-overlay');
    let tab = document.querySelector('.form-item__login');
    let headingForm = document.querySelector('.form-heading__login');
    let mainForm = document.querySelector('.form-login');
    tab.classList.add('active-tab');
    headingForm.classList.add('show-title');
    mainForm.classList.add('show-form');

    tabFormOverlay();
    closeForm();
}

btnRegister.onclick = function() {
    overlay.classList.toggle('active-overlay');
    let tab = document.querySelector('.form-item__register');
    let headingForm = document.querySelector('.form-heading__register');
    let mainForm = document.querySelector('.form-register');

    tab.classList.add('active-tab');
    headingForm.classList.add('show-title');
    mainForm.classList.add('show-form');

    tabFormOverlay();
    closeForm();

}

function tabFormOverlay() {
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

}
btnAccount.onclick = function() {
    optionAccount.classList.toggle("show");
}

menuOption.addEventListener('click', function() {
    subOption.classList.toggle('show');
})

tabs.forEach((tab, index) => {

    tab.addEventListener('click', function() {
        tab.classList.add('active-item');
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
        // overlay.classList.remove('active-overlay');

    })
}

let filterCategory = document.querySelector('.main-sort');

filterCategory.addEventListener('click', () => {
        let subFilter = document.querySelector('.sub-sort');

        subFilter.classList.toggle('active-filter-category');
        let filters = document.querySelectorAll('.sub-sort__item');
        filters.forEach((choose, index) => {
            choose.addEventListener('click', () => {
                const content = ['Đề xuất cho bạn', 'Lượng xem (Cao đến thấp)'];
                let activeCategories = document.querySelector('.active-filter');

                activeCategories.classList.remove('active-filter');
                choose.classList.add('active-filter');

                let itemMain = document.querySelector('.main-sort__item');

                let contentMainFilter = itemMain.querySelector('span');

                contentMainFilter.innerText = content[index];

            })
        })

    })
    // let accountOption = document.querySelector('.account-option');
let wapperOption = document.querySelector('.wrapper-option');
let optionLanguages = document.querySelector('.languages');
let languages = document.querySelector('.languages-option');
optionLanguages.addEventListener('click', () => {
    wapperOption.style.display = 'none';
    languages.style.display = 'block';
    // languages.style.width = '330px';
    let listLanguages = document.querySelectorAll('.languages__list li');
    listLanguages.forEach((item) => {
        let activeLanguges = document.querySelector('.active-languages');
        item.addEventListener('click', function() {
            activeLanguges.classList.remove('active-languages');

            item.classList.add('active-languages');
        })
    })
    let closeLanguage = document.querySelector('.languages-option__icon');
    closeLanguage.addEventListener('click', () => {
        wapperOption.style.display = 'block';
        languages.style.display = 'none';
    })
})



const games = [{
        id: 1,
        name: 'VALORANT',
        image: 'https://static-cdn.jtvnw.net/ttv-boxart/VALORANT-285x380.jpg',
        viewer: '40,8 N',
        categories: 'Tay súng',
    },
    {
        id: 2,
        name: 'Counter-Strike: Global Offensive',
        viewer: '46,7 N',
        image: 'https://static-cdn.jtvnw.net/ttv-boxart/./Counter-Strike:%20Global%20Offensive-285x380.jpg',
        categories: 'Bắn Súng Góc Nhìn Thứ Nhất'
    },
    {
        id: 3,
        name: 'Rust',
        viewer: '50,4 N',
        image: 'https://static-cdn.jtvnw.net/ttv-boxart/Rust-285x380.jpg',
        categories: 'Game Độc lập'
    },
    {
        id: 4,
        name: 'Apex Legends',
        image: 'https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends-285x380.jpg',
        viewer: '55 N',
        categories: 'Hành động'
    },
    {
        id: 5,
        name: 'Grand Theft Auto V',
        image: 'https://static-cdn.jtvnw.net/ttv-boxart/Grand%20Theft%20Auto%20V-285x380.jpg',
        viewer: '59,3 N',
        categories: 'Game phiêu lưu',
    },
    {
        id: 6,
        name: 'Krunker',
        viewer: '703',
        image: 'https://static-cdn.jtvnw.net/ttv-boxart/Krunker-285x380.jpg',
        categories: 'Bắn Súng Góc Nhìn Thứ Nhất',
    },
    {
        id: 7,
        name: 'Overwatch',
        viewer: '12,2 N',
        image: 'https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-285x380.jpg',
        categories: 'Thế giới mở'
    },
    {
        id: 8,
        name: 'Call of Duty: Black Ops 4',
        viewer: '442',
        image: 'https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Black%20Ops%204-285x380.jpg',
        categories: 'Bắn Súng Góc Nhìn Thứ Nhất'
    },


];


let promise = new Promise(
    function(resolve, reject) {
        if (games) {
            resolve(games);
        } else {
            reject('Not found');
        }
    }
);
promise

    .then(function(data) {
        let htmls = data.map((game) => {
            return ` <div class="category__item">
                <div class="category-item__img">
                    <img src="${game.image}" alt="" srcset="">
                </div>
                <p class="category__name">
                ${game.name}
                </p>
                <p class="category__viewer">
                ${game.viewer} người xem
                </p>
                <div class="categories-game">
                
                <div class="categories-game__item">
                 ${game.categories}
                </div>
                
            </div>
        </div>`
        }).join(', ');

        let listCate = document.querySelector('.category__list');
        listCate.innerHTML = htmls;

    })
    .catch(function(erorr) {
        console.log(erorr);
    })