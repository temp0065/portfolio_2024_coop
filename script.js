// Hamburger menu functionality
const $btnOpen = document.getElementById("btnOpen");
const $btnClose = document.getElementById("btnClose");
const media = window.matchMedia("(width < 600px)");
const $offScreenMenu = document.querySelector(".off-screen-menu");
const $main = document.querySelector("main")

function setUpTopNav(e) {
    if (e.matches) {
        // is mobile
        console.log("is mobile");
        $offScreenMenu.setAttribute("intert", "");
        $offScreenMenu.style.transition = "none";
    }
    else {
        // is tablet/desktop
        console.log("is desktop");
        $offScreenMenu.removeAttribute("intert");
        closeMobileMenu();
    }
}

media.addEventListener("change", e => {
    setUpTopNav(e);
})

function openMobileMenu() {
    $btnOpen.setAttribute("aria-expanded", "true");
    $offScreenMenu.removeAttribute("inert");
    $offScreenMenu.removeAttribute("style");
    $main.setAttribute("inter", "");
    $btnClose.focus();
}

function closeMobileMenu() {
    $btnOpen.setAttribute("aria-expanded", "false");
    $offScreenMenu.setAttribute("inert", "")
    $main.removeAttribute("intert");

    setTimeout(() => {
        $offScreenMenu.style.transition = "none";
    }, 500);
}

$btnOpen.addEventListener("click", openMobileMenu);
$btnClose.addEventListener("click", closeMobileMenu);