const mobileMenuButton = document.querySelector("#nav button");
const mobileMenu = document.querySelector("#nav ul");

mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("toggle-mobile-menu");
    mobileMenuButton.classList.toggle("mobile-menu-active");
});

document.addEventListener("click", (event) => {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnButton = mobileMenuButton.contains(event.target);

    if (!isClickInsideMenu && !isClickOnButton) {
        mobileMenu.classList.remove("toggle-mobile-menu");
        mobileMenuButton.classList.remove("mobile-menu-active"); 
    }
});