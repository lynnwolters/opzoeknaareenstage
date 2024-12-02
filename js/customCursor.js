const cursor = document.querySelector(".cursor");
const triggerCursor = document.querySelectorAll(".trigger-cursor");
const defaultCursorImg = document.querySelector(".default-cursor");
const hoverCursorImg = document.querySelector(".hover-cursor");

document.addEventListener("mousemove", function(e) {
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

triggerCursor.forEach(item => {
    item.addEventListener("mouseenter", () => {
        defaultCursorImg.style.display = "none";
        hoverCursorImg.style.display = "block";
    });

    item.addEventListener("mouseleave", () => {
        defaultCursorImg.style.display = "block";
        hoverCursorImg.style.display = "none";
    });
});
