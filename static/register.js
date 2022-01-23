import { validateRegister } from "./valiadation.js";

const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password_confirm");
const form = document.querySelector("#register_form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const errors = validateRegister(
    fullname.value,
    username.value,
    email.value,
    password.value,
    passwordConfirm.value
  );

  var user = {
    'fullname': fullname.value,
    'username': username.value,
    'email': email.value,
    'password': password.value,
  };

  if (Object.keys(errors).length === 0) {
    localStorage.setItem(username.value, JSON.stringify(user));

    location.href = "./index.html";
  }

  /* var userFromStorage = localStorage.getItem("saurabh@gmail.com");
  var userOut = JSON.parse(userFromStorage);
  console.log(userOut); */
});
