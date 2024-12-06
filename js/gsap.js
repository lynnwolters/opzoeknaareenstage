gsap.registerPlugin(ScrollTrigger);

const intro =  document.querySelector("#intro");
const inleiden = document.querySelector("#inleiden");
const inleidenScrollContainer = document.querySelector("#inleiden div:nth-of-type(1)");
const overMij =  document.querySelector("#over-mij");
const infoContentSections = document.querySelectorAll("#info-content section");
const infoNavItems = document.querySelectorAll("#info-nav li");
const infoNavLinks = document.querySelectorAll("#info-nav li a");

ScrollTrigger.create({
    trigger: intro,
    start: "top center", 
    onEnter: () => {
        gsap.to("body", { backgroundColor: "#F585CA", duration: 0.5 }); 
    },
    onLeaveBack: () => {
        gsap.to("body", { backgroundColor: "#F2F1ED", duration: 0.5 }); 
    }
});

ScrollTrigger.create({
    trigger: inleiden,
    start: "center top", 
    markers: true,
    onEnter: () => {
        gsap.to("body", { backgroundColor: "#F2F1ED", duration: 0.5 }); 
    },
    onLeaveBack: () => {
        gsap.to("body", { backgroundColor: "#F585CA", duration: 0.5 }); 
    }
});

gsap.to(inleidenScrollContainer, {
    x: "-100vw",
    scrollTrigger: {
        trigger: inleiden,
        start: "top top",
        end: "+=200%", 
        scrub: 4,
        pin: true,
        onEnter: () => disableScrollSnap(),
        onLeaveBack: () => enableScrollSnap(),
        onLeave: () => enableScrollSnap(),
        onEnterBack: () => disableScrollSnap(),
    }
});

function disableScrollSnap() {
    document.documentElement.style.scrollSnapType = "none";
}

function enableScrollSnap() {
    document.documentElement.style.scrollSnapType = "y mandatory";
}


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






