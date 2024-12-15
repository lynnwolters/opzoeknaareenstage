window.addEventListener("load", () => {
    const loadingScreen = document.querySelector("#loading-screen");
    const percentageText = document.querySelector("#loading-screen h2");
    const header = document.querySelector("#header");
    let percentage = 0;

    const interval = setInterval(() => {
        percentage++;
        percentageText.textContent = `${percentage}%`;

        if (percentage === 100) {
            clearInterval(interval);
            
            // loadingScreen.addEventListener("animationstart", () => {
            //     nav.classList.add("slide-in");
            //     header.classList.add("slide-in");
            // });
        }
    }, 20);
});

