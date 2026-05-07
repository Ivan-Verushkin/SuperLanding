const header = document.querySelector(".header");
const burger = header.querySelector(".burger-menu");
const burgerIcon = header.querySelector(".burger-menu__icon");
const nav = header.querySelector(".header__nav");

function hideMobileNav() {
    if (window.innerWidth <= 500) {
        nav.style.display = "none";
        header.classList.remove("header--mobile");
        burgerIcon.src = "Images/burger.svg";
    } else {
        nav.style.display = "flex";
    }
}

// При загрузке страницы
hideMobileNav();

// При изменении размера окна
window.addEventListener("resize", hideMobileNav);

burger.addEventListener("click", function () {
    header.classList.toggle("header--mobile");

    if (header.classList.contains("header--mobile")) {
        nav.style.display = "flex";
        burgerIcon.src = "Images/burger-exit.svg";
    } else {
        nav.style.display = "none";
        burgerIcon.src = "Images/burger.svg";
    }
});