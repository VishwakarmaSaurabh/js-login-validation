const logoutButton = document.querySelector("#logout");

const user = sessionStorage.key(0);
if (user === JSON.parse(localStorage.getItem(user))) {
  location.href = "./index.html";
}

logoutButton.addEventListener("click", (e) => {

    const userSession = sessionStorage.key(0);
    if (userSession) {
        sessionStorage.removeItem(userSession);
        location.href = "./index.html";
    }
});