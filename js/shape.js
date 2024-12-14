gsap.registerPlugin(ScrollTrigger);

const shape = document.querySelector("#inleiden div:nth-of-type(2) img");

gsap.timeline({
    scrollTrigger: {
        trigger: "#inleiden",
        start: "-200px center", 
        end: "bottom top", 
        scrub: 6
    }
})

.to(shape, {
    transform: "scale(.85) skewX(0deg) skewY(0deg)", 
    ease: "power1.inOut"
})
.to(shape, {
    transform: "scale(.95) skewX(-4deg) skewY(-4deg)", 
    ease: "power1.inOut"
})
.to(shape, {
    transform: "scale(.75) skewX(4deg) skewY(4deg)",
    ease: "power1.inOut"
})
.to(shape, {
    transform: "scale(.85) skewX(0deg) skewY(0deg)", 
    ease: "power1.inOut"
});







