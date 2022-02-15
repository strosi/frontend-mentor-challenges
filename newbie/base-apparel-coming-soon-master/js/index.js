const form = document.querySelector("#form");
const emailField = document.querySelector("#emailAddress");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(isValid(emailField.value.trim())) {
        emailField.value = "";
        emailField.classList.remove("invalid");
        form.classList.remove("error");
    } else {
        emailField.classList.add("invalid");
        form.classList.add("error");
    }
});

const isValid = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}