gsap.registerPlugin(ScrollTrigger);

const text = document.querySelector(".typewriter-effect");
const characters = text.textContent.split("");
text.textContent = ""; 

characters.forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.opacity = 0; 
    text.appendChild(span);
});

const spans = text.querySelectorAll("span");

gsap.to(spans, {
    opacity: 1, 
    stagger: .05, 
    scrollTrigger: {
    trigger: text, 
    start: "top bottom", 
    end: "bottom 40%",
    markers: true,
    scrub: 1,
    }
});