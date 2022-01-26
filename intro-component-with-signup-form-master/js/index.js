const formEl = document.querySelector("#signup");
const firstNameEl = document.querySelector("#fname");
const lastNameEl = document.querySelector("#lname");
const emailEl = document.querySelector("#email");
const passwEl = document.querySelector("#pass");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    let isFormValid = checkFirstName() & checkLastName() & checkEmail() & checkPass();

    if(isFormValid) {
        // Reset input fields
        clearField(firstNameEl);
        clearField(lastNameEl);
        clearField(emailEl);
        clearField(passwEl);

        // Submit to the server...
    }
});

const checkFirstName = () => {
    let isValid = false;
    const firstName = firstNameEl.value.trim();

    if(isInputValEmpty(firstName)) {
        showError(firstNameEl, "First Name cannot be empty");
    } else if(!isNameValid(firstName)) {
        showError(firstNameEl, "Looks like this is not a valid name");
    } else {
        isValid = true;
        hideError(firstNameEl);
    }

    firstNameEl.addEventListener("focus", () => {
        hideError(firstNameEl);
    });

    return isValid;
}

const checkLastName = () => {
    let isValid = false;
    const lastName = lastNameEl.value.trim();

    if(isInputValEmpty(lastName)) {
        showError(lastNameEl, "Last Name cannot be empty");
    } else if(!isNameValid(lastName)) {
        showError(lastNameEl, "Looks like this is not a valid name");
    } else {
        isValid = true;
        hideError(lastNameEl);
    }

    lastNameEl.addEventListener("focus", () => {
        hideError(lastNameEl);
    });

    return isValid;
}

const checkEmail = () => {
    let isValid = false;
    const email = emailEl.value.trim();

    if(isInputValEmpty(email)) {
        showError(emailEl, "Email cannot be empty");
    } else if(!isEmailValid(email)) {
        showError(emailEl, "Looks like this is not an email");
    } else {
        isValid = true;
        hideError(emailEl);
    }

    emailEl.addEventListener("focus", () => {
        hideError(emailEl);
    });

    return isValid;
}

const checkPass = () => {
    let isValid = false;
    const password = passwEl.value.trim();

    if(isInputValEmpty(password)) {
        showError(passwEl, "Password cannot be empty");
    } else if(password.length < 10) {
        showError(passwEl, "Password cannot be less than 10 characters");
    } else {
        isValid = true;
        hideError(passwEl);
    }

    passwEl.addEventListener("focus", () => {
        hideError(passwEl);
    });

    return isValid;
}

const isInputValEmpty = inputValue => inputValue === "" ? true : false;

const isNameValid = (name) => {
    const re = /^[ a-zA-Z\-\’]+$/;
    return re.test(String(name));
}

const isEmailValid = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isPasswValid = (passward) => {
    return (String(passward).length >= 10);
}

const showError = (inputEl, message) => {
    const formField = inputEl.parentElement;
    const errorMessage = formField.querySelector("small");

    inputEl.classList.add("hide-placeholder");
    inputEl.classList.add("invalid");
    formField.classList.add("error");
    errorMessage.textContent = message;
}

const hideError = (inputEl) => {
    const formField = inputEl.parentElement;
    const errorMessage = formField.querySelector("small");

    inputEl.classList.remove("hide-placeholder");
    inputEl.classList.remove("invalid");
    inputEl.classList.remove('on-focus');
    formField.classList.remove("error");
    errorMessage.textContent = "";
}

const clearField = (inputEl) => {
    inputEl.value = "";
}