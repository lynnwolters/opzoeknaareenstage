gsap.registerPlugin(ScrollTrigger);

const header =  document.querySelector("#header");
const intro =  document.querySelector("#intro");

ScrollTrigger.create({
    trigger: header,
    start: "center top", 
    onEnter: () => {
        gsap.to("body", { backgroundColor: "#F585CA", duration: 0.5 }); 
    },
    onLeaveBack: () => {
        gsap.to("body", { backgroundColor: "#F2F1ED", duration: 0.5 }); 
    }
});

ScrollTrigger.create({
    trigger: intro,
    start: "center top", 
    onEnter: () => {
        gsap.to("body", { backgroundColor: "#F2F1ED", duration: 0.5 }); 
    },
    onLeaveBack: () => {
        gsap.to("body", { backgroundColor: "#F585CA", duration: 0.5 }); 
    }
});