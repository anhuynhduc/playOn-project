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

// validation form login
let phone = document.forms['form']['phone']
let password = document.forms['form']['password']

let phone_error_1 = document.querySelector('.phone__error-1')
let phone_error_2 = document.querySelector('.phone__error-2')
let password_error_1 = document.querySelector('.password_error-1')
let password_error_2 = document.querySelector('.password_error-2')
let password_error_3 = document.querySelector('.password_error-3')

function validated() {
    if (phone.value.length === 0){
        phone.style.border = "1px solid red"
        phone_error_1.style.display = "block"
        phone_error_2.style.display = "none"
        phone.focus()
        return false
    }else if (phone.value.length < 10 || phone.value.length > 11){
        phone.style.border = "1px solid red"
        phone_error_2.style.display = "block"
        phone_error_1.style.display = "none"
        phone.focus()
        return false
    }else {
        phone.style.border = "none"
        phone_error_2.style.display = "none"
        phone_error_1.style.display = "none"
    }
    if (password.value.length === 0){
        password.style.border = "1px solid red"
        password_error_1.style.display = "block"
        password_error_2.style.display = "none"
        password.focus()
        return false
    }else if (password.value.length < 6){
        password.style.border = "1px solid red"
        password_error_2.style.display = "block"
        password_error_1.style.display = "none"
        password.focus()
        return false
    }else {
        password.style.border = "none"
        password_error_2.style.display = "none"
        password_error_1.style.display = "none"
    }
}