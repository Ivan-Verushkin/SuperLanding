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

const logoPreview = document.querySelector(".logo-preview");
const logoMask = document.querySelector(".logo-mask");
const logoText = document.querySelector(".logo-preview__text");

const backgroundButtons = document.querySelectorAll("[data-bg]");
const logoColorButtons = document.querySelectorAll("[data-logo]");

let selectedBackgroundColor = "#0B0B0B";
let selectedLogoColor = "#F7EEDA";

function updateDisabledColors() {
    backgroundButtons.forEach((button) => {
        button.disabled = button.dataset.bg.toLowerCase() === selectedLogoColor.toLowerCase();
    });

    logoColorButtons.forEach((button) => {
        button.disabled = button.dataset.logo.toLowerCase() === selectedBackgroundColor.toLowerCase();
    });
}

backgroundButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const newBackgroundColor = button.dataset.bg;

        if (newBackgroundColor.toLowerCase() === selectedLogoColor.toLowerCase()) {
            return;
        }

        selectedBackgroundColor = newBackgroundColor;
        logoPreview.style.backgroundColor = selectedBackgroundColor;

        updateDisabledColors();
    });
});

logoColorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const newLogoColor = button.dataset.logo;

        if (newLogoColor.toLowerCase() === selectedBackgroundColor.toLowerCase()) {
            return;
        }

        selectedLogoColor = newLogoColor;

        logoMask.style.backgroundColor = selectedLogoColor;
        logoText.style.color = selectedLogoColor;

        updateDisabledColors();
    });
});

logoMask.style.backgroundColor = selectedLogoColor;
logoText.style.color = selectedLogoColor;
logoPreview.style.backgroundColor = selectedBackgroundColor;

updateDisabledColors();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
const changingText = document.querySelector(".welcome__changing-text");

const texts = [
    "A Product Designer",
    "A UI/UX Designer",
    "A WEB Designer"
];

let index = 0;

function restartTypingAnimation() {
    changingText.style.animation = "none";
    changingText.style.width = "auto";

    const textWidth = changingText.scrollWidth;
    const textLength = changingText.textContent.length;

    changingText.style.setProperty("--steps", textLength);
    changingText.style.setProperty("--text-width", `${textWidth}px`);

    changingText.style.width = "0";

    changingText.offsetHeight;

    changingText.style.animation =
        "typing 1.5s steps(var(--steps)) forwards, blink 1s step-end infinite";
}

function changeText() {
    index = (index + 1) % texts.length;
    changingText.textContent = texts[index];

    restartTypingAnimation();
}

restartTypingAnimation();
setInterval(changeText, 3000);