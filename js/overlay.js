window.addEventListener("load", () => {
    const overlayButton = document.querySelector("#overlay button");
    const overlay = document.querySelector("#overlay");

    function checkScreenWidth() {
        if (window.innerWidth < 900) {
            overlay.classList.add("overlay-active");
        } else {
            overlay.classList.remove("overlay-active");
        }
    }

    function setupOverlayButton() {
        overlayButton.addEventListener("click", () => {
            overlay.classList.remove("overlay-active");
        });
    }

    checkScreenWidth();
    setupOverlayButton();
});

window.addEventListener("resize", () => {
    const overlay = document.querySelector("#overlay");
    if (window.innerWidth < 900) {
        overlay.classList.add("overlay-active");
    } else {
        overlay.classList.remove("overlay-active");
    }
});
