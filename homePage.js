


let btnSearch = document.querySelector('.btn-search')
btnSearch.addEventListener('click',()=>{

    let listLink = document.querySelector('.header__navbar-list')
    listLink.style.display = "none"

    let inputSearch = document.querySelector('.show-input')
    Object.assign(inputSearch.style, {
        display: 'flex',
        alignItems: 'center'
    })

    let logo = document.querySelector('.logo')
    logo.style.padding = "0px"

    let btnList = document.querySelector('.btn-list')
    btnList.style.display = "none"

    // let selectLanguage = document.querySelector('.select-menu__language')
    // selectLanguage.style.left = "-100px"

    let searchCategory = document.querySelector('.navbar-search__category')
    searchCategory.style.display = "block"

    let searchSlider = document.querySelector('.navbar-search__slider')
    searchSlider.style.display = "none"
})

let btnClose = document.querySelector('.btn-close')
btnClose.addEventListener('click',()=>{

    let listLink = document.querySelector('.header__navbar-list')
    listLink.style.display = "flex"

    let inputSearch = document.querySelector('.show-input')
    inputSearch.style.display = "none"

    let searchCategory = document.querySelector('.navbar-search__category')
    searchCategory.style.display = "none"

    let searchSlider = document.querySelector('.navbar-search__slider')
    searchSlider.style.display = "block"
})


let TrandingSlider_header = new Swiper('.tranding-slider__header', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 250,
        modifier:1
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

let TrandingSlider_continue = new Swiper('.tranding-slider__video', {
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier:3
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

let TrandingSlider_weekly = new Swiper('.tranding-slider__weekly-top', {
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier:3
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

let TrandingSlider_mobile = new Swiper('.tranding-slider__mobile', {
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier:3
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

var TrandingSlider = new Swiper('.tranding-slider', {
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier:3
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// select language
const toggleOptions = document.getElementById("toggleOptions");
const optionMenu__language = document.querySelector(".select-menu__language");
const options__language = optionMenu__language.querySelector(".options__language");

toggleOptions.addEventListener("click", () => {
    options__language.style.display = options__language.style.display === "block" ? "none" : "block";
});

const options__language_items = optionMenu__language.querySelectorAll(".option__language");
const selectedLanguage = document.getElementById("selectedLanguage");

options__language_items.forEach((option) => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text__language").innerText;
        selectedLanguage.innerText = selectedOption; // Cập nhật nội dung ngôn ngữ đã chọn vào selectedLanguage
        options__language.style.display = "none";
    });
});

// select mood
const optionMenu__mood = document.querySelector(".select-menu__mood "),
    selectBtn__mood  = optionMenu__mood .querySelector(".select-btn__mood "),
    options__mood  = optionMenu__mood .querySelectorAll(".option__mood "),
    sBtn_text__mood  = optionMenu__mood .querySelector(".sBtn-text__mood ");

optionMenu__mood.classList.toggle("active")

selectBtn__mood.addEventListener("click", () =>
    optionMenu__mood .classList.toggle("active")
);

options__mood .forEach((option) => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text__mood ").innerText;
        sBtn_text__mood.innerText = selectedOption;

        optionMenu__mood.classList.remove("active");
    });
});

// select somebody
const optionMenu__somebody = document.querySelector(".select-menu__somebody"),
    selectBtn__somebody = optionMenu__somebody.querySelector(".select-btn__somebody"),
    options__somebody = optionMenu__somebody.querySelectorAll(".option__somebody"),
    sBtn_text__somebody = optionMenu__somebody.querySelector(".sBtn-text__somebody");

optionMenu__somebody.classList.toggle("active")

selectBtn__somebody.addEventListener("click", () =>
    optionMenu__somebody.classList.toggle("active")
);

options__somebody.forEach((option) => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text__somebody").innerText;
        sBtn_text__somebody.innerText = selectedOption;

        optionMenu__somebody.classList.remove("active");
    });
});

// btn profile

let btnProfile = document.querySelector('.btn-profile')
btnProfile.addEventListener('click',()=>{
    let listProfile = document.querySelector(".list-profile")
    let Notification = document.querySelector(".list-notification")
    if (listProfile.style.getPropertyValue("display") === "none"){
        listProfile.style.display = "block"
        Notification.style.display = "none"
    }else{
        listProfile.style.display = "none"
    }

})

// btn notification

let btnNotification = document.querySelector('.btn-notification')
btnNotification.addEventListener('click',()=>{
    let Notification = document.querySelector(".list-notification")
    let listProfile = document.querySelector(".list-profile")
    if (Notification.style.getPropertyValue("display") === "none"){
        Notification.style.display = "block"
        listProfile.style.display = "none"
    }else{
        Notification.style.display = "none"
    }

})

// select language footer
const toggleOptions_footer = document.getElementById("toggleOptions_footer");
const optionMenu__language_footer = document.querySelector(".select-menu__language_footer");
const options__language_footer = optionMenu__language_footer.querySelector(".options__language_footer");

toggleOptions_footer.addEventListener("click", () => {
    options__language_footer.style.display = options__language_footer.style.display === "block" ? "none" : "block";
});

const options__language_items_footer= optionMenu__language_footer.querySelectorAll(".option__language_footer");
const selectedLanguage_footer = document.getElementById("selectedLanguage_footer");

options__language_items_footer.forEach((option) => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text__language_footer").innerText;
        selectedLanguage_footer.innerText = selectedOption; // Cập nhật nội dung ngôn ngữ đã chọn vào selectedLanguage
        options__language_footer.style.display = "none";
    });
});
// AOS loading
AOS.init({
    duration: 500,
})


