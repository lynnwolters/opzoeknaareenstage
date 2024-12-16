document.addEventListener("DOMContentLoaded", () => {
    const imageUrls = [
        "/img/playheart.io.png",
        "/img/cssttr.png",
        "/img/tol.png",
        "/img/swapfiets.png",
        "/img/de-man-met-de-hamer.png",
        "/img/illustration-wheel.png"
    ];

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url; 
    });
});
