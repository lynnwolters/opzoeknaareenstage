const overlayButton = document.querySelector("#overlay button");

function checkScreenWidth() {
    const overlay = document.querySelector("#overlay");
    if (window.innerWidth < 900) {
        overlay.classList.add("overlay-active");
    } else {
        overlay.classList.remove("overlay-active");
    }
}

function setupOverlayButton() {
    const overlay = document.querySelector("#overlay");
    overlayButton.addEventListener("click", () => {
        overlay.classList.remove("overlay-active");
    });
}

// Zorg dat beide functies correct worden aangeroepen
window.addEventListener("load", () => {
    checkScreenWidth();
    setupOverlayButton();
});
window.addEventListener("resize", checkScreenWidth);
