let btnSearch = document.querySelector('.btn-search')
btnSearch.addEventListener('click',()=>{

    let listLink = document.querySelector('.header__navbar-list')
    listLink.style.display = "none"

    let inputSearch = document.querySelector('.show-input')
    Object.assign(inputSearch.style, {
        display: 'flex',
        alignItems: 'center'
    })
    let actionHeader = document.querySelector('.header__navbar-action')
    actionHeader.style.marginLeft = "30px"

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

    let actionHeader = document.querySelector('.header__navbar-action')
    actionHeader.style.marginLeft = "500px"

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

