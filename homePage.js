let btnSearch = document.querySelector('.btn-search')
btnSearch.addEventListener('click',()=>{

    let listLink = document.querySelector('.header__navbar-list')
    listLink.style.display = "none"

    let inputSearch = document.querySelector('.show-input')
    Object.assign(inputSearch.style, {
        display: 'flex',
        alignItems: 'center'
    })

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
const optionMenu__language = document.querySelector(".select-menu__language"),
    selectBtn__language = optionMenu__language.querySelector(".select-btn__language"),
    options__language = optionMenu__language.querySelectorAll(".option__language"),
    sBtn_text__language = optionMenu__language.querySelector(".sBtn-text__language");

optionMenu__language.classList.toggle("active")

selectBtn__language.addEventListener("click", () =>
    optionMenu__language.classList.toggle("active")
);

options__language.forEach((option) => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text__language").innerText;
        sBtn_text__language.innerText = selectedOption;

        optionMenu__language.classList.remove("active");
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
const optionMenu__language_footer = document.querySelector(".select-menu__language-footer"),
    selectBtn__language_footer = optionMenu__language_footer.querySelector(".select-btn__language-footer"),
    options__language_footer = optionMenu__language_footer.querySelectorAll(".option__language-footer"),
    sBtn_text__language_footer = optionMenu__language_footer.querySelector(".sBtn-text__language-footer");

optionMenu__language_footer.classList.toggle("active")

selectBtn__language_footer.addEventListener("click", () =>
    optionMenu__language_footer.classList.toggle("active")
);

options__language_footer.forEach((option) => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text__language-footer").innerText;
        sBtn_text__language_footer.innerText = selectedOption;

        optionMenu__language_footer.classList.remove("active");
    });
});

