gsap.registerPlugin(ScrollTrigger);

const inleiden = document.querySelector("#inleiden");
const inleidenScrollContainer = document.querySelector("#inleiden div:nth-of-type(1)");
const contentWidth = inleidenScrollContainer.scrollWidth;
const marginRight = window.innerWidth * 0.6;

gsap.to(inleidenScrollContainer, {
    x: `-${contentWidth - marginRight}px`, 
    scrollTrigger: {
        trigger: inleiden,
        start: "top top",
        end: () => `+=${contentWidth + window.innerWidth - marginRight}`, 
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