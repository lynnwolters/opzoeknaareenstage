// const overlayButton = document.querySelector("#overlay button");
// let overlayDismissed = false; 

// function checkScreenWidth() {
//     const overlay = document.querySelector("#overlay");
//     if (window.innerWidth < 900 && !overlayDismissed) {
//         overlay.classList.add("overlay-active");
//     } else if (window.innerWidth >= 900 || overlayDismissed) {
//         overlay.classList.remove("overlay-active");
//     }
// }

// function setupOverlayButton() {
//     const overlay = document.querySelector("#overlay");
//     const overlayButton = document.querySelector("#overlay button");
//     overlayButton.addEventListener("click", () => {
//         overlay.classList.remove("overlay-active");
//         overlayDismissed = true; 
//     });
// }

// window.addEventListener("load", () => {
//     checkScreenWidth();
//     setupOverlayButton();
// });
// window.addEventListener("resize", checkScreenWidth);

