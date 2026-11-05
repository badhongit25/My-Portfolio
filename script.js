
/* =========================
   STUDENT-FOCUSED TYPING
========================= */

const words = [
    "Software Engineering Student",
    "Curious Mind, Creative Learner",
    "Exploring New Technologies",
    "Learning. Building. Growing.",
    "Passionate About Technology"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        currentWord.substring(0, charIndex);

    let speed = deleting ? 40 : 75;

    if (!deleting && charIndex === currentWord.length) {

        deleting = true;
        speed = 1800;

    }

    else if (deleting && charIndex === 0) {

        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

        speed = 400;

    }

    setTimeout(typeEffect, speed);
}

if (typingElement) {
    typeEffect();
}


/* =========================
   MOBILE NAVIGATION
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.replace("fa-bars", "fa-xmark");

        } else {

            icon.classList.replace("fa-xmark", "fa-bars");

        }

    });


    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.replace("fa-xmark", "fa-bars");

        });

    });

}


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* =========================
   WELCOME MESSAGE
========================= */

console.log(
    "%cWelcome to Badhon's Portfolio!",
    "color: #a855f7; font-size: 20px; font-weight: bold;"
);

console.log(
    "%cLearning. Exploring. Growing.",
    "color: #b47aff; font-size: 14px;"
);
