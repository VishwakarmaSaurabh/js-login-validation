const logoutButton = document.querySelector("#logout");

logoutButton.addEventListener("click", (e) => {

    const userSession = sessionStorage.key(0);
    if (userSession) {
        sessionStorage.removeItem(userSession);
        location.href = "./index.html";
    }
});