// gsap.registerPlugin(ScrollTrigger);

// document.querySelectorAll(".scroll-section").forEach((section) => {
//     const text = section.querySelector(".typewriter-effect");
//     if (!text) return; 

//     const characters = text.textContent.split("");
//     text.textContent = ""; 

//     characters.forEach((char) => {
//         const span = document.createElement("span");
//         span.textContent = char;
//         span.style.visibility = "hidden"; 
//         text.appendChild(span);
//     });

//     const spans = text.querySelectorAll("span");

//     gsap.to(spans, {
//         visibility: "visible", 
//         stagger: 0.01, 
//         scrollTrigger: {
//             trigger: section,
//             start: "top 80%", 
//             toggleActions: "play reverse play reverse", 
//         },
//     });
// });
