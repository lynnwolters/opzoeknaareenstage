window.addEventListener("load", () => {
    const loadingScreen = document.querySelector("#loading-screen");
    const percentageText = document.querySelector("#loading-screen h2");
    let percentage = 0;

    const interval = setInterval(() => {
        percentage++;
        percentageText.textContent = `${percentage}%`;

        if (percentage === 100) {
            clearInterval(interval);
        }
    }, 20); 
});
