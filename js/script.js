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

window.addEventListener("load", function () {
    let body = document.querySelector("body");
    setTimeout(function () {
        addClass(body, "loaded");
        body.style.overflow = "auto";
    }, 2000);
    getRecentFilters();
});

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
const filtersList = document.querySelector(".filters__list");
const recentFiltersList = document.querySelector(".filters__recents-list");
let suggestions = [];

inputElem.addEventListener("keyup", () => {
    const inputValue = inputElem.value;
    const submitBtn = document.querySelector(".filters__form-btn");

    clearSuggestions();
    removeClass(filtersList, "show");
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

        filtersList.append(listItem);
        addClass(filtersList, "show");
    });
}

function clearSuggestions() {
    filtersList.innerHTML = "";
}

function selectFilter(input) {
    let suggestions = document.querySelectorAll(".filters__item");

    suggestions.forEach((suggestion) =>
        suggestion.addEventListener("click", (e) => {
            input.value = e.currentTarget.innerText;
            clearSuggestions();
            removeClass(filtersList, "show");
        })
    );
}

let recentFilters = new Set();
function setRecentFilters(filter) {
    if (recentFilters.size === 5) {
        recentFilters.delete([...recentFilters][0]);
    }
    recentFilters.add(filter);
    localStorage.setItem("recentFilters", JSON.stringify([...recentFilters]));
}

function getRecentFilters() {
    let storedFilters = JSON.parse(localStorage.getItem("recentFilters"));

    storedFilters.forEach((filter) => {
        let recentFilter = makeElement(
            "li",
            { className: "filters__recents-item" },
            null
        );
        recentFilter.textContent = filter;
        recentFiltersList.append(recentFilter);

        const recentFilterItems = document.querySelectorAll(
            ".filters__recents-item"
        );
        const recentFiltersMap = new Map();
        recentFilterItems.forEach((item) => {
            const text = item.textContent;
            if (recentFiltersMap.has(text)) {
                item.remove();
            } else {
                recentFiltersMap.set(text, true);
            }
        });

        if (recentFiltersList.children) {
            addClass(recentFiltersList.previousElementSibling, "show");
            addClass(recentFiltersList, "show");
        }

        if (recentFiltersList.children.length === 6) {
            recentFiltersList.firstElementChild.remove();
        }
    });
}

const form = document.querySelector(".filters__form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (inputElem.value.trim() && filters.includes(inputElem.value.trim())) {
        displayImagesByFilter(inputElem.value);
        setRecentFilters(inputElem.value.trim());
        getRecentFilters();
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
            [makeElement("img", { className: "gallery__image-img" }, [])]
        );
        imageContainer.firstElementChild.setAttribute("src", `${image.src}`);
        imageContainer.firstElementChild.setAttribute("alt", `${image.alt}`);

        let singleImg = imageContainer.firstElementChild;
        singleImg.addEventListener("click", () => {
            openLightbox(images, image.id);
        });

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

        let singleImg = imageContainer.firstElementChild;
        singleImg.addEventListener("click", () => {
            openLightbox(images, images[i].id);
        });

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
window.addEventListener("load", () => {
    loadImagesByArray(gallery);
});
/******************************************* RENDER IMAGES ********************************************/

/************************************************* LIGHTBOX **********************************************/
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("btn-close");
const nextBtn = document.getElementById("btn-next");
const prevBtn = document.getElementById("btn-prev");
let imgIndex = 0;

function openLightbox(images, imgId) {
    imgIndex = images.findIndex((image) => image.id === imgId);
    lightbox.style.display = "block";
    changeLighboxImage();
    removeClass(lightboxImg, "zoom-out");
    addClass(lightboxImg, "zoom-in");
}

function changeLighboxImage() {
    lightboxImg.src = imagesArr[imgIndex].src;
    lightboxImg.alt = imagesArr[imgIndex].alt;
}

function navigateLightbox(step) {
    imgIndex += step;
    if (imgIndex < 0) {
        imgIndex = imagesArr.length - 1;
    } else if (imgIndex >= imagesArr.length) {
        imgIndex = 0;
    }
    changeLighboxImage();
}

function closeLightbox() {
    removeClass(lightboxImg, "zoom-in");
    addClass(lightboxImg, "zoom-out");
    setTimeout(() => {
        lightbox.style.display = "none";
    }, 500);
}

nextBtn.addEventListener("click", () => {
    navigateLightbox(1);
});
prevBtn.addEventListener("click", () => {
    navigateLightbox(-1);
});
closeBtn.addEventListener("click", closeLightbox);

/************************************************* LIGHTBOX **********************************************/
