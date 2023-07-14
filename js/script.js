const filters = [
    "animal",
    "beach",
    "clouds",
    "dew",
    "dry leaves",
    "forest",
    "grass",
    "ice",
    "leaves",
    "ocean",
    "rocks",
    "sea",
    "snow",
    "stream",
    "sun",
    "sunset",
    "trees",
    "water",
    "waterfalls",
    "wet leaves",
];
const gallery = {
    img1: {
        src: "../images/autumn/pexels-eberhard-grossgasteiger-2310641.jpg",
        category: "autumn",
        filters: ["trees"],
    },
    img2: {
        src: "../images/autumn/pexels-irina-iriser-1590549.jpg",
        category: "autumn",
        filters: ["leaves", "sun"],
    },
    img3: {
        src: "..images/autumn/pexels-jara-3083250.jpg",
        category: "autumn",
        filters: ["leaves", "dew", "water", "wet leaves"],
    },
    img4: {
        src: "../images/autumn/pexels-josh-hild-14269090.jpg",
        category: "autumn",
        filters: ["animal", "grass"],
    },
    img5: {
        src: "../images/autumn/pexels-lil-artsy-3127729.jpg",
        category: "autumn",
        filters: ["animal", "leaves", "dry leaves"],
    },
    img6: {
        src: "../images/autumn/pexels-lisa-fotios-2812164.jpg",
        category: "autumn",
        filters: ["forest", "trees"],
    },
    img7: {
        src: "../images/autumn/pexels-luke-barky-2899722.jpg",
        category: "autumn",
        filters: ["sunset", "grass"],
    },
    img8: {
        src: "../images/autumn/pexels-maroš-markovič-1468735.jpg",
        category: "autumn",
        filters: ["stream", "rocks", "wet leaves"],
    },
    img9: {
        src: "../images/autumn/pexels-petar-starčević-2389122.jpg",
        category: "autumn",
        filters: ["field", "grass"],
    },
    img10: {
        src: "../images/autumn/pexels-ylanite-koppens-612816.jpg",
        category: "autumn",
        filters: ["leaves"],
    },
    img11: {
        src: "..images/spring/pexels-afr-creation-15994490.jpg",
        category: "spring",
        filters: ["water", "leaves", "wet leaves"],
    },
    img12: {
        src: "..images/spring/pexels-andreas-15985749.jpg",
        category: "spring",
        filters: ["trees", "grass", "field"],
    },
    img13: {
        src: "..images/spring/pexels-david-brown-16001827.jpg",
        category: "spring",
        filters: ["water", "animal"],
    },
    img14: {
        src: "../images/spring/pexels-denniz-futalan-5049271.jpg",
        category: "spring",
        filters: ["animal", "grass", "leaves"],
    },
    img15: {
        src: "../images/spring/pexels-dids-4261738.jpg",
        category: "spring",
        filters: ["water", "leaves", "wet leaves"],
    },
    img16: {
        src: "../images/spring/pexels-jonathan-petersson-1076183.jpg",
        category: "spring",
        filters: ["trees", "grass"],
    },
    img17: {
        src: "../images/spring/pexels-maria-orlova-4906295.jpg",
        category: "spring",
        filters: ["leaves", "flowers"],
    },
    img18: {
        src: "..images/spring/pexels-pixabay-40731.jpg",
        category: "spring",
        filters: ["grass", "water", "wet leaves", "animal"],
    },
    img19: {
        src: "../images/spring/pexels-pixabay-86431.jpg",
        category: "spring",
        filters: ["flowers", "field", "grass", "clouds"],
    },
    img20: {
        src: "../images/spring/pexels-q-hưng-phạm-15962267.jpg",
        category: "spring",
        filters: ["trees", "flowers"],
    },
    img21: {
        src: "../images/summer/pexels-asad-photo-maldives-3601421.jpg",
        category: "summer",
        filters: ["sunset", "water", "sea"],
    },
    img22: {
        src: "../images/summer/pexels-dom-gould-325807.jpg",
        category: "summer",
        filters: ["trees", "rocks", "water"],
    },
    img23: {
        src: "../images/summer/pexels-james-wheeler-1486974.jpg",
        category: "summer",
        filters: ["trees", "grass", "water", "clouds"],
    },
    img24: {
        src: "../images/summer/pexels-partha-chatterjee-16070595.jpg",
        category: "summer",
        filters: ["flowers"],
    },
    img25: {
        src: "../images/summer/pexels-pixabay-262713.jpg",
        category: "summer",
        filters: ["flowers", "field"],
    },
    img26: {
        src: "../images/summer/pexels-pixabay-302549.jpg",
        category: "summer",
        filters: ["rocks", "trees", "water", "ocean"],
    },
    img27: {
        src: "../images/summer/pexels-pixabay-358457.jpg",
        category: "summer",
        filters: ["waterfalls", "rocks", "trees"],
    },
    img28: {
        src: "../images/summer/pexels-robert-so-15968083.jpg",
        category: "summer",
        filters: ["field", "grass", "trees", "rocks"],
    },
    img29: {
        src: "../images/summer/pexels-roberto-nickson-2631613.jpg",
        category: "summer",
        filters: ["beach", "trees", "ocean", "water"],
    },
    img30: {
        src: "../images/summer/pexels-ryan-delfin-2270389.jpg",
        category: "summer",
        filters: ["clouds", "trees"],
    },
    img31: {
        src: "../images/winter/pexels-alissa-nabiullina-997567.jpg",
        category: "winter",
        filters: ["snow", "flowers"],
    },
    img32: {
        src: "../images/winter/pexels-annika-thierfeld-735986.jpg",
        category: "winter",
        filters: ["snow", "animal", "trees"],
    },
    img33: {
        src: "../images/winter/pexels-eberhard-grossgasteiger-1366919.jpg",
        category: "winter",
        filters: ["snow", "rocks"],
    },
    img34: {
        src: "../images/winter/pexels-eberhard-grossgasteiger-1417651.jpg",
        category: "winter",
        filters: ["field", "rocks", "snow"],
    },
    img35: {
        src: "../images/winter/pexels-egor-kamelev-813872.jpg",
        category: "winter",
        filters: ["ice", "flowers", "grass"],
    },
    img36: {
        src: "../images/winter/pexels-julia-volk-5111048.jpg",
        category: "winter",
        filters: ["ice", "snow", "water", "rocks"],
    },
    img37: {
        src: "../images/winter/pexels-nikolai-ulltang-325139.jpg",
        category: "winter",
        filters: ["trees", "water"],
    },
    img38: {
        src: "../images/winter/pexels-pixabay-86405.jpg",
        category: "winter",
        filters: ["ice", "snow", "animal"],
    },
    img39: {
        src: "../images/winter/pexels-rok-romih-3894112.jpg",
        category: "winter",
        filters: ["animal", "snow"],
    },
    img40: {
        src: "../images/winter/pexels-simon-berger-3732527.jpg",
        category: "winter",
        filters: ["trees", "snow"],
    },
};

/************************************ NAVBAR ******************************************/
const nav = document.querySelector(".nav");
const navBtn = document.getElementById("navbar__btn");
const navHeight = nav.getBoundingClientRect().height;
const toggleMenu = () => {
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
};
navBtn.addEventListener("click", toggleMenu);

window.addEventListener("scroll", (e) => {
    if (e.currentTarget.scrollY > navHeight) {
        nav.classList.add("white-nav");
    } else {
        nav.classList.remove("white-nav");
    }
});

/********************************* HERO SECTION ***************************************/
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

/*************************************** FILTERS **************************************/

// const sectionFilters = document.querySelector(".filters");
// for (let i = 0; i < filters.length; i++) {
//     let btnContainer = document.createElement("div");
//     btnContainer.className = "filters__btn-container";

//     let btnElem = document.createElement("button");
//     btnElem.className = "filters__btn";
//     btnElem.innerHTML = `${filters[i]}`;

//     btnContainer.append(btnElem);
//     sectionFilters.append(btnContainer);
// }
