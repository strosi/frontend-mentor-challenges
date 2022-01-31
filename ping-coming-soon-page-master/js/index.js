const formEl = document.querySelector(".notify__form");
const emailEl = document.querySelector(".notify__field");
const errorMessageEl = document.querySelector(".error-m");
const btnEl = document.querySelector(".notify__btn");
const successEl = document.querySelector(".sbm-success");
const successBtnEl = document.querySelector(".sbm-success__btn");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    if(checkEmail()) {
        clearField(emailEl);
        e.target.classList.add("success");
        successEl.classList.add("show");

        // Submit form...
    }
});

// Hide the success message and show the notify form again
successBtnEl.addEventListener("click", () => {
    console.log("clicked");
    successEl.classList.remove("show");
    setTimeout(() => {
        formEl.classList.remove("success");
    }, 600);
})

// Methods for validating form inputs...
const checkEmail = () => {
    let isValid = false;
    const email = emailEl.value.trim();

    if(isInputValEmpty(email)) {
        showError(emailEl, "Email cannot be empty");
    } else if(!isEmailValid(email)) {
        showError(emailEl, "Please provide a valid email address");
    } else {
        isValid = true;
        hideError(emailEl);
    }

    emailEl.addEventListener("focus", () => {
        hideError(emailEl);
    });

    return isValid;
}

const isInputValEmpty = inputValue => inputValue === "" ? true : false;

const isEmailValid = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const showError = (inputEl, message) => {
    inputEl.classList.add("invalid");
    errorMessageEl.classList.add("emerge");
    errorMessageEl.textContent = message;
    btnEl.classList.add("move-btn-down");
}

const hideError = (inputEl) => {
    inputEl.classList.remove("invalid");
    errorMessageEl.classList.remove("emerge");
    errorMessageEl.textContent = "";
    btnEl.classList.remove("move-btn-down");
}

const clearField = (inputEl) => {
    inputEl.value = "";
}