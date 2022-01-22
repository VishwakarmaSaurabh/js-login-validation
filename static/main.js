const form = document.querySelector("#form");
const errorUsername = document.querySelector(".error_username");
const errorPassword = document.querySelector(".error_password");
const errorBlock = document.querySelectorAll("#error");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = form.username.value.trim();
    const password = form.password.value.trim();

    const errors = validate(username, password);

    if (Object.keys(errors).length > 0) {

        console.log(errors)

        if (errors['username']) {
            errorUsername.innerHTML = errors['username'];
            errorBlock[0].style.visibility = "visible";
        }
        if (errors['password']) {
            errorPassword.innerHTML = errors['password'];
            errorBlock[1].style.visibility = "visible"
        }

        const errorTimer = setTimeout(() => {
            errorBlock.forEach(element => element.style.visibility = "hidden");
        }, 5000);
    } else {
        window.location.replace("http://localhost:5500/homepage.html");
    }
})

const validate = (username, password) => {

    errors = {};

    if (username === '') {
        errors['username'] = "Your username cannot be empty";
    } else if (username.length < 5) {
        errors['username'] = "Your username must be at least 5 characters."
    } else if (username.length > 15) {
        errors['username'] = "Your username must be less than 15 characters."
    }

    if (password == '') {
        errors['password'] = "Your password can not be empty.";
    } else if (password.length < 8) {
        errors['password'] = "Your password must be at least 8 characters."
    } else if (password.length > 25) {
        errors['password'] = "Your password must be less than 25 characters."
    } else if (password.search(/[a-z]/i) < 0) {
        errors['password'] = "Your password must contain at least one letter."
    } else if (password.search(/[0-9]/) < 0) {
        errors['password'] = "Your password must contain at least one digit."
    }

    return errors;
}


const clearFields = () => {
    form.username.value = '';
    form.password.value = '';
}