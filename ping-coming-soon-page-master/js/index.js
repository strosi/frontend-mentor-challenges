const formEl = document.querySelector(".notify");
const emailEl = document.querySelector(".notify__field");
const errorMessageEl = document.querySelector(".error-m");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    if(checkEmail()) {
        clearField(emailEl);

        // Submit form...
    }
});

const checkEmail = () => {
    let isValid = false;
    const email = emailEl.value.trim();

    if(isInputValEmpty(email)) {
        showError(errorMessageEl, "Email cannot be empty");
    } else if(!isEmailValid(email)) {
        showError(errorMessageEl, "Please provide a valid email address");
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
    errorMessageEl.textContent = message;
}

const hideError = (inputEl) => {
    inputEl.classList.remove("invalid");
    errorMessageEl.textContent = "";
}

const clearField = (inputEl) => {
    inputEl.value = "";
}