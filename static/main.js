import { validate } from "./valiadation.js";

const form = document.querySelector("#form");
const errorUsername = document.querySelector(".error_username");
const errorPassword = document.querySelector(".error_password");
const errorBlock = document.querySelectorAll("#error");
const register = document.querySelector("#register");


const user = sessionStorage.key(0);
if (user !== null) {
  const userFromStorage = JSON.parse(localStorage.getItem(user));
  if (userFromStorage !== null && user === userFromStorage.username) {
    console.log('Entered')
    location.href = "./homepage.html";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = form.username.value.trim();
  const password = form.password.value.trim();

  const errors = validate(username, password);

  if (Object.keys(errors).length > 0) {
    // console.log(errors);

    if (errors["username"]) {
      errorUsername.innerHTML = errors["username"];
      errorBlock[0].style.visibility = "visible";
    }
    if (errors["password"]) {
      errorPassword.innerHTML = errors["password"];
      errorBlock[1].style.visibility = "visible";
    }

    setTimeout(() => {
      errorBlock.forEach((element) => (element.style.visibility = "hidden"));
    }, 5000);
  } else {
    const user = JSON.parse(localStorage.getItem(username));

    if (user !== null) {
      if (user.username === username && user.password === password) {
        console.log("Logged in !!!");
        sessionStorage.setItem(username, username);

        location.href = "./homepage.html";
      }
    } else {
      errorBlock[0].innerHTML = "Username or Password is incorrect.";
      errorBlock[0].style.visibility = "visible";

      setTimeout(() => {
        errorBlock[0].style.visibility = "hidden";
      }, 5000);
    }
  }
});

const clearFields = () => {
  form.username.value = "";
  form.password.value = "";
};

register.addEventListener("click", (e) => {
  location.href = "./register.html";
});
