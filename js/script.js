import { filters, gallery } from "./store.js";

function addClass(el, clas) {
    el.classList.add(clas);
}

function removeClass(el, clas) {
    el.classList.remove(clas);
}

function makeElement(type, properties, children) {
    const el = document.createElement(type);
    if (properties) Object.assign(el, properties);
    if (children) el.append(...children);
    return el;
}

/******************************************* NAVBAR ********************************************/
const navBtn = document.getElementById("navbar__btn");
const navLinks = document.querySelectorAll(".nav__link");
const navLogo = document.getElementById("home");
const navList = document.getElementById("nav__list");
const navHarmburger = document.getElementById("nav__harmburger");
const navItem = document.querySelectorAll(".nav__item");

function openNavbar() {
    addClass(navList, "open");
    addClass(navHarmburger, "open");
    navItem.forEach((item) => {
        addClass(item, "open");
    });
}

function closeNavbar() {
    removeClass(navList, "open");
    removeClass(navHarmburger, "open");
    navItem.forEach((item) => {
        removeClass(item, "open");
    });
}

function toggleMenu() {
    navList.classList.contains("open") ? closeNavbar() : openNavbar();
}

function handleActiveNav(e) {
    navLinks.forEach((link) => removeClass(link, "active"));
    addClass(e, "active");
}

navBtn.addEventListener("click", toggleMenu);

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        handleActiveNav(link);
        if (link.classList.contains("active")) {
            closeNavbar();
            displayImagesByCategory(link.innerText.toLowerCase());
        }
    });
});

navLogo.addEventListener("click", () => {
    navLinks.forEach((link) => removeClass(link, "active"));
});

window.addEventListener("scroll", (e) => {
    const navbar = document.querySelector(".nav");
    const navbarHeight = navbar.getBoundingClientRect().height;

    e.currentTarget.scrollY > navbarHeight
        ? addClass(navbar, "nav__white")
        : removeClass(navbar, "nav__white");
});
/******************************************* NAVBAR ********************************************/

/******************************************* HERO SECTION ********************************************/
let slideIndex = 1;
function showSlides() {
    const slideImages = document.querySelectorAll(".hero__images-img");
    slideImages.forEach((slide) => {
        slide.style.display = "none";
    });
    slideIndex++;
    if (slideIndex > slideImages.length) {
        slideIndex = 1;
    }
    slideImages[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}
showSlides();
/******************************************* HERO SECTION ********************************************/

/******************************************* FILTERS ********************************************/
const inputElem = document.querySelector(".filters__form-input");
const filtersElem = document.querySelector(".filters__list");
const recentFiltersElem = document.querySelector(".filters__recents-list");
let suggestions = [];
let recentFilters = new Set();

inputElem.addEventListener("keyup", () => {
    const inputValue = inputElem.value;
    const submitBtn = document.querySelector(".filters__form-btn");

    clearSuggestions();
    removeClass(filtersElem, "show");
    if (inputValue.trim()) {
        submitBtn.removeAttribute("disabled");
        suggestions = filters.filter((suggestion) => {
            return suggestion
                .toLowerCase()
                .startsWith(inputValue.toLowerCase().trim());
        });
        displaySuggestions(inputValue);
    }
    selectFilter(inputElem);
});

function displaySuggestions(input) {
    suggestions.map((word) => {
        let listItem = makeElement("li", { className: "filters__item" }, []);

        let match =
            "<b>" +
            word.substring(0, input.trim().length) +
            "</b>" +
            word.substring(input.trim().length);
        listItem.innerHTML = match;

        filtersElem.append(listItem);
        addClass(filtersElem, "show");
    });
}

function clearSuggestions() {
    filtersElem.innerHTML = "";
}

function selectFilter(input) {
    let suggestions = document.querySelectorAll(".filters__item");

    suggestions.forEach((suggestion) =>
        suggestion.addEventListener("click", (e) => {
            input.value = e.target.innerText;
            clearSuggestions();
            removeClass(filtersElem, "show");
        })
    );
}

function setRecents(filter) {
    if (recentFilters.size === 5) recentFilters.delete([...recentFilters][0]);
    recentFilters.add(filter);

    localStorage.setItem("recentFilters", JSON.stringify([...recentFilters]));
    let storedFilters = JSON.parse(localStorage.getItem("recentFilters"));

    let recentFilter = makeElement("li", null, null);
    recentFilter.textContent = storedFilters.slice(-1)[0];
    recentFiltersElem.append(recentFilter);

    if (recentFiltersElem.children) {
        addClass(recentFiltersElem.previousElementSibling, "show");
        addClass(recentFiltersElem, "show");
    }

    if (recentFilter.isEqualNode(recentFilter.previousElementSibling)) {
        recentFilter.remove();
    }

    if (recentFiltersElem.children.length === 6) {
        recentFiltersElem.firstElementChild.remove();
    }
}

const form = document.querySelector(".filters__form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (inputElem.value.trim() && filters.includes(inputElem.value.trim())) {
        displayImagesByFilter(inputElem.value);
        setRecents(inputElem.value.trim());
        inputElem.value = "";
        return;
    }
});
/******************************************* FILTERS ********************************************/

/******************************************* RENDER IMAGES ********************************************/

const galleryContainer = document.querySelector(".gallery");
const galleryHeading = document.querySelector(".gallery__subheading");

function shuffleGallery(gallery) {
    for (let i = gallery.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [gallery[i], gallery[j]] = [gallery[j], gallery[i]];
    }
}
shuffleGallery(gallery);

function displayImages(images) {
    images.forEach((image) => {
        const imageContainer = makeElement(
            "div",
            { className: "gallery__image" },
            [makeElement("img", null, [])]
        );
        imageContainer.firstElementChild.setAttribute("src", `${image.src}`);
        imageContainer.firstElementChild.setAttribute("alt", `${image.alt}`);
        galleryContainer.append(imageContainer);
    });
}

function displayImagesByCategory(category) {
    const filteredImages = gallery.filter(
        (image) => image.category === category
    );
    galleryHeading.textContent =
        category.charAt(0).toUpperCase() + category.slice(1);
    displayImages(filteredImages);
    loadImagesByArray(filteredImages);
}

function displayImagesByFilter(filter) {
    const filteredImages = gallery.filter((image) =>
        image.filters.includes(filter)
    );
    galleryHeading.textContent =
        filter.charAt(0).toUpperCase() + filter.slice(1);
    displayImages(filteredImages);
    loadImagesByArray(filteredImages);
}

function loadMoreImages(images, startIndex) {
    for (let i = startIndex; i < startIndex + 3; i++) {
        if (i >= images.length) {
            window.removeEventListener("scroll", imageScroll);
            return;
        }
        const imageContainer = makeElement(
            "div",
            { className: "gallery__image" },
            [makeElement("img", null, [])]
        );
        imageContainer.firstElementChild.setAttribute(
            "src",
            `${images[i].src}`
        );
        imageContainer.firstElementChild.setAttribute(
            "alt",
            `${images[i].alt}`
        );

        galleryContainer.append(imageContainer);
    }
}

let loadedImages = 3;
let imagesArr = [];
function imageScroll() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    if (windowHeight + scrollPosition >= documentHeight - 200) {
        loadMoreImages(imagesArr, loadedImages);
        loadedImages += 3;
    }
}

function loadImagesByArray(images) {
    loadedImages = 3;
    galleryContainer.innerHTML = "";
    imagesArr = images;

    displayImages(images.slice(0, 3));
    window.addEventListener("scroll", imageScroll);
    galleryContainer.scroll({
        top: 0,
        behavior: "smooth",
    });
}
window.addEventListener("load", () => loadImagesByArray(gallery));

/******************************************* RENDER IMAGES ********************************************/
