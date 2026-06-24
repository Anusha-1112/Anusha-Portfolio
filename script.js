// Loader

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 2000);

});


// Header Sticky Effect

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    header.classList.toggle(
        "sticky",
        window.scrollY > 50
    );

});


// Typing Animation

var typed = new Typed(".typing", {

    strings:[
        "Software Developer",
        "Software Engineer",
        "Full Stack Developer",
        "AI Developer",
        "Web Developer"
    ],

    typeSpeed:80,
    backSpeed:50,
    backDelay:1500,
    loop:true

});


// Section Title Scroll Effect

const titles = document.querySelectorAll(".section-title");

window.addEventListener("scroll", () => {

    titles.forEach(title => {

        const titleTop = title.getBoundingClientRect().top;

        if(titleTop < window.innerHeight - 100){
            title.classList.add("active");
        }

    });

});
// =========================
// HAMBURGER MENU
// =========================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if(hamburger){
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// =========================
// THEME TOGGLE
// =========================

const themeBtn = document.getElementById("theme-toggle");

if(themeBtn){
    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");

        if(document.body.classList.contains("light-theme")){
            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }else{
            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }

    });
}