import { filters, gallery } from "./store.js";

/******************************************* NAVBAR ********************************************/
const navBtn = document.getElementById("navbar__btn");
const navLinks = document.querySelectorAll(".nav__link");
const navbar = document.querySelector(".nav");
const navbarHeight = navbar.getBoundingClientRect().height;

navBtn.addEventListener("click", toggleMenu);
navLinks.forEach((link) => link.addEventListener("click", handleActiveNav));
window.addEventListener("scroll", (e) => {
    if (e.currentTarget.scrollY > navbarHeight) {
        navbar.classList.add("white-nav");
    } else {
        navbar.classList.remove("white-nav");
    }
});

function toggleMenu() {
    const navHarmburger = document.getElementById("nav__harmburger");
    const navList = document.getElementById("nav__list");
    const navItem = document.querySelectorAll(".nav__item");

    navList.classList.toggle("open");
    if (navList.classList.contains("open")) {
        navHarmburger.classList.add("open");
        navItem.forEach((item) => {
            item.classList.add("open");
        });
    } else {
        navHarmburger.classList.remove("open");
        navItem.forEach((item) => {
            item.classList.remove("open");
        });
    }
}

function handleActiveNav(e) {
    navLinks.forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");
}

/******************************************* NAVBAR ********************************************/

/******************************************* HERO SECTION ********************************************/
let slideIndex = 1;
const showSlides = () => {
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
};
showSlides(slideIndex);
/******************************************* HERO SECTION ********************************************/

/******************************************* RENDER IMAGES ********************************************/

const galleryContainer = document.querySelector(".gallery");
const galleryHeading = document.querySelector(".gallery__subheading");
const galleryClone = gallery.slice();

let visibleImages = 0;

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
};

const observer = new IntersectionObserver(renderImage, options);
observer.observe(galleryContainer);

function shuffleGallery(gallery) {
    for (let i = gallery.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [gallery[i], gallery[j]] = [gallery[j], gallery[i]];
    }
}

function renderImage(enteries, observer) {
    shuffleGallery(galleryClone);
    enteries.forEach((entry) => {
        if (entry.isIntersecting) {
            const imagesToLoad = 6;

            for (let i = visibleImages; i < visibleImages + imagesToLoad; i++) {
                if (i >= galleryClone.length) {
                    observer.disconnect();
                    return;
                }
                const imageContainer = document.createElement("div");
                imageContainer.setAttribute("class", "gallery__image");
                imageContainer.innerHTML = `<img src="${galleryClone[i].src}" alt="${galleryClone[i].alt}"/>`;
                galleryContainer.append(imageContainer);
            }
            visibleImages += imagesToLoad;
        }
    });
}

/******************************************* RENDER IMAGES ********************************************/

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
    filtersElem.classList.remove("show");
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

const form = document.querySelector(".filters__form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (inputElem.value.trim() && filters.includes(inputElem.value.trim())) {
        setRecents(inputElem.value.trim());
        inputElem.value = "";
        return true;
    }
});

function displaySuggestions(input) {
    suggestions.map((word) => {
        let listItem = document.createElement("li");
        listItem.setAttribute("class", "filters__item");
        let match =
            "<b>" +
            word.substring(0, input.trim().length) +
            "</b>" +
            word.substring(input.trim().length);
        listItem.innerHTML = match;
        filtersElem.append(listItem);
        filtersElem.classList.add("show");
    });
}

function clearSuggestions() {
    let suggestions = document.querySelectorAll(".filters__item");
    suggestions.forEach((suggestion) => suggestion.remove());
}

function selectFilter(input) {
    let suggestions = document.querySelectorAll(".filters__item");
    suggestions.forEach((suggestion) =>
        suggestion.addEventListener("click", (e) => {
            input.value = e.target.innerText;
            clearSuggestions();
            filtersElem.classList.remove("show");
        })
    );
}

function setRecents(filter) {
    if (recentFilters.size === 5) {
        recentFilters.delete([...recentFilters][0]);
    }
    recentFilters.add(filter);
    localStorage.setItem("recentFilters", JSON.stringify([...recentFilters]));
    let savedFilters = JSON.parse(localStorage.getItem("recentFilters"));
    let recentFilter = document.createElement("li");
    recentFilter.textContent = savedFilters.slice(-1)[0];
    recentFiltersElem.append(recentFilter);
    if (recentFiltersElem.children) {
        recentFiltersElem.previousElementSibling.classList.add("show");
        recentFiltersElem.classList.add("show");
    }
    if (recentFilter.isEqualNode(recentFilter.previousElementSibling)) {
        recentFilter.remove();
    }
    if (recentFiltersElem.children.length === 6) {
        recentFiltersElem.firstElementChild.remove();
    }
}
/******************************************* FILTERS ********************************************/
