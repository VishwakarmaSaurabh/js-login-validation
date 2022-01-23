import { validateRegister } from "./valiadation.js";

const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password_confirm");
const form = document.querySelector("#register_form");
const errorBlock = document.querySelectorAll(".error");

const errorFullname = document.querySelector(".errorFullname");
const errorUsername = document.querySelector(".errorUsername");
const errorEmail = document.querySelector(".errorEmail");
const errorPassword = document.querySelector(".errorPassword");
const errorCPassword = document.querySelector(".errorCPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const errors = validateRegister(
    fullname.value,
    username.value,
    email.value,
    password.value,
    passwordConfirm.value
  );

  if (Object.keys(errors).length > 0) {
    if (errors["fullname"]) {
      errorFullname.innerHTML = errors["fullname"];
      errorBlock[0].style.visibility = "visible";
    }
    if (errors["email"]) {
      errorEmail.innerHTML = errors["email"];
      errorBlock[1].style.visibility = "visible";
    }
    if (errors["username"]) {
      errorUsername.innerHTML = errors["username"];
      errorBlock[2].style.visibility = "visible";
    }
    if (errors["password"]) {
      errorPassword.innerHTML = errors["password"];
      errorBlock[3].style.visibility = "visible";
    }
    if (errors["passwordConfirm"]) {
      errorCPassword.innerHTML = errors["passwordConfirm"];
      errorBlock[4].style.visibility = "visible";
    }

    setTimeout(() => {
      errorBlock.forEach((element) => (element.style.visibility = "hidden"));
    }, 5000);
  } else {

    var user = {
      fullname: fullname.value,
      username: username.value,
      email: email.value,
      password: password.value,
    };

    const userCheck = localStorage.getItem(user.username);
    const userCheckParsed = JSON.parse(userCheck);
    if (userCheckParsed != null) {
      errors["username"] = "Username already exists.";
    } else {
      localStorage.setItem(username.value, JSON.stringify(user));
      location.href = "./index.html";
    }
  }


  console.log(errors);

  /* var userFromStorage = localStorage.getItem("saurabh@gmail.com");
  var userOut = JSON.parse(userFromStorage);
  console.log(userOut); */
});
