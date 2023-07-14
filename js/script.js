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
        src: "https://thumbs2.imgbox.com/42/c7/pkaelCSi_t.jpg",
        category: "autumn",
        filters: ["trees"],
    },
    img2: {
        src: "https://thumbs2.imgbox.com/03/12/Lf5Nth86_t.jpg",
        category: "autumn",
        filters: ["leaves", "sun"],
    },
    img3: {
        src: "https://thumbs2.imgbox.com/d8/4d/cIoNqnBJ_t.jpg",
        category: "autumn",
        filters: ["leaves", "dew", "water", "wet leaves"],
    },
    img4: {
        src: "https://thumbs2.imgbox.com/b2/f2/J4Lnnwxs_t.jpg",
        category: "autumn",
        filters: ["animal", "grass"],
    },
    img5: {
        src: "https://thumbs2.imgbox.com/b5/18/MQxwJ979_t.jpg",
        category: "autumn",
        filters: ["animal", "leaves", "dry leaves"],
    },
    img6: {
        src: "https://thumbs2.imgbox.com/45/d5/O6Ak8lLo_t.jpg",
        category: "autumn",
        filters: ["forest", "trees"],
    },
    img7: {
        src: "https://thumbs2.imgbox.com/98/6b/kW1hagTn_t.jpg",
        category: "autumn",
        filters: ["sunset", "grass"],
    },
    img8: {
        src: "https://thumbs2.imgbox.com/48/e8/HVTjEAQ7_t.jpg",
        category: "autumn",
        filters: ["stream", "rocks", "wet leaves"],
    },
    img9: {
        src: "https://thumbs2.imgbox.com/54/04/VgR086Qg_t.jpg",
        category: "autumn",
        filters: ["field", "grass"],
    },
    img10: {
        src: "https://thumbs2.imgbox.com/88/c1/lNiJfVzy_t.jpg",
        category: "autumn",
        filters: ["leaves"],
    },
    img11: {
        src: "https://thumbs2.imgbox.com/2d/fb/jBZgzuX5_t.jpg",
        category: "spring",
        filters: ["water", "leaves", "wet leaves"],
    },
    img12: {
        src: "https://thumbs2.imgbox.com/24/83/9qapZXQ9_t.jpg",
        category: "spring",
        filters: ["trees", "grass", "field"],
    },
    img13: {
        src: "https://thumbs2.imgbox.com/a2/3a/WSkUck3X_t.jpg",
        category: "spring",
        filters: ["water", "animal"],
    },
    img14: {
        src: "https://thumbs2.imgbox.com/bf/8c/F13sxOP1_t.jpg",
        category: "spring",
        filters: ["animal", "grass", "leaves"],
    },
    img15: {
        src: "https://thumbs2.imgbox.com/ed/63/8VDl40VI_t.jpg",
        category: "spring",
        filters: ["water", "leaves", "wet leaves"],
    },
    img16: {
        src: "https://thumbs2.imgbox.com/aa/5e/mwSUiWvk_t.jpg",
        category: "spring",
        filters: ["trees", "grass"],
    },
    img17: {
        src: "https://thumbs2.imgbox.com/bd/c4/Fg7DyfeC_t.jpg",
        category: "spring",
        filters: ["leaves", "flowers"],
    },
    img18: {
        src: "https://thumbs2.imgbox.com/bf/ce/KlsXgaEU_t.jpg",
        category: "spring",
        filters: ["grass", "water", "wet leaves", "animal"],
    },
    img19: {
        src: "https://thumbs2.imgbox.com/c5/d2/zZ23cky6_t.jpg",
        category: "spring",
        filters: ["flowers", "field", "grass", "clouds"],
    },
    img20: {
        src: "https://thumbs2.imgbox.com/8f/1d/WBwzYVSo_t.jpg",
        category: "spring",
        filters: ["trees", "flowers"],
    },
    img21: {
        src: "https://thumbs2.imgbox.com/f3/f8/rRLdW4v8_t.jpg",
        category: "summer",
        filters: ["sunset", "water", "sea"],
    },
    img22: {
        src: "https://thumbs2.imgbox.com/0b/97/uNXYiQ84_t.jpg",
        category: "summer",
        filters: ["trees", "rocks", "water"],
    },
    img23: {
        src: "https://thumbs2.imgbox.com/47/3e/Wi7BeJa4_t.jpg",
        category: "summer",
        filters: ["trees", "grass", "water", "clouds"],
    },
    img24: {
        src: "https://thumbs2.imgbox.com/b2/65/WdPnK2Mp_t.jpg",
        category: "summer",
        filters: ["flowers"],
    },
    img25: {
        src: "https://thumbs2.imgbox.com/55/08/sw6CAU1Y_t.jpg",
        category: "summer",
        filters: ["flowers", "field"],
    },
    img26: {
        src: "https://thumbs2.imgbox.com/71/84/oBU0TLVr_t.jpg",
        category: "summer",
        filters: ["rocks", "trees", "water", "ocean"],
    },
    img27: {
        src: "https://thumbs2.imgbox.com/18/e9/ZID1NOjO_t.jpg",
        category: "summer",
        filters: ["waterfalls", "rocks", "trees"],
    },
    img28: {
        src: "https://thumbs2.imgbox.com/ef/27/qL69wJTN_t.jpg",
        category: "summer",
        filters: ["field", "grass", "trees", "rocks"],
    },
    img29: {
        src: "https://thumbs2.imgbox.com/0f/0b/0kxlT2Ps_t.jpg",
        category: "summer",
        filters: ["beach", "trees", "ocean", "water"],
    },
    img30: {
        src: "https://thumbs2.imgbox.com/66/eb/Xr0ODXJ3_t.jpg",
        category: "summer",
        filters: ["clouds", "trees"],
    },
    img31: {
        src: "https://thumbs2.imgbox.com/d5/24/aU2zqvcc_t.jpg",
        category: "winter",
        filters: ["snow", "flowers"],
    },
    img32: {
        src: "https://thumbs2.imgbox.com/43/02/iiA3DBHH_t.jpg",
        category: "winter",
        filters: ["snow", "animal", "trees"],
    },
    img33: {
        src: "https://thumbs2.imgbox.com/ce/7b/KACwfss9_t.jpg",
        category: "winter",
        filters: ["snow", "rocks"],
    },
    img34: {
        src: "https://thumbs2.imgbox.com/b0/46/tY2S6pnx_t.jpg",
        category: "winter",
        filters: ["field", "rocks", "snow"],
    },
    img35: {
        src: "https://thumbs2.imgbox.com/7b/68/5M3aSssl_t.jpg",
        category: "winter",
        filters: ["ice", "flowers", "grass"],
    },
    img36: {
        src: "https://thumbs2.imgbox.com/ca/af/bkbQyFBK_t.jpg",
        category: "winter",
        filters: ["ice", "snow", "water", "rocks"],
    },
    img37: {
        src: "https://thumbs2.imgbox.com/d8/67/AThk6k8q_t.jpg",
        category: "winter",
        filters: ["trees", "water"],
    },
    img38: {
        src: "https://thumbs2.imgbox.com/99/86/kb4j2n3w_t.jpg",
        category: "winter",
        filters: ["ice", "snow", "animal"],
    },
    img39: {
        src: "https://thumbs2.imgbox.com/2c/ef/jTGJL6Qz_t.jpg",
        category: "winter",
        filters: ["animal", "snow"],
    },
    img40: {
        src: "https://thumbs2.imgbox.com/3e/db/yN3PTTC7_t.jpg",
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
