gsap.registerPlugin(ScrollTrigger);

const infoContentSections = document.querySelectorAll("#info-content section");
const infoNavItems = document.querySelectorAll("#info-nav li");
const infoNavLinks = document.querySelectorAll("#info-nav li a");

infoNavItems[0].classList.add("active");

infoContentSections.forEach((section, index) => {
    ScrollTrigger.create({
    trigger: section, 
    start: "top center",
        onEnter: () => setActive(index), 
        onEnterBack: () => setActive(index), 
    });
});

infoNavLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
        setActive(index);
    });
});

function setActive(index) {
    infoNavItems.forEach((item) => item.classList.remove("active"));
    infoNavItems[index].classList.add("active");
}