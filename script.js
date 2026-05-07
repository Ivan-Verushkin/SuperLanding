const header = document.querySelector(".header");
const burger = header.querySelector(".burger-menu");
const burgerIcon = header.querySelector(".burger-menu__icon");

burger.addEventListener("click", function () {
    header.classList.toggle("header--mobile");

    if (header.classList.contains("header--mobile")) {
        burgerIcon.src = "images/burger-exit.svg";
    } else {
        burgerIcon.src = "images/burger.svg";
    }
});