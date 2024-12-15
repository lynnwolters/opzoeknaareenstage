document.addEventListener("DOMContentLoaded", () => {
    const accordion = document.querySelectorAll("#ervaring ul li button");
    const section = document.querySelector("#ervaring");

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function () {
            const panel = this.nextElementSibling;

            // Sluit alle andere panels
            accordion.forEach(function (button) {
                const otherPanel = button.nextElementSibling;
                if (button !== this) {
                    otherPanel.style.maxHeight = null;
                }
            }, this);

            // Open of sluit het huidige paneel
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }

            // Pas de hoogte van de sectie aan, alleen voor schermen < 500px
            setTimeout(() => {
                const isPanelOpen = [...accordion].some((button) => {
                    const panel = button.nextElementSibling;
                    return panel.style.maxHeight;
                });

                // Check of we op een mobiel scherm (<500px) zitten
                if (window.matchMedia("(max-width: 500px)").matches) {
                    section.style.height = isPanelOpen ? "fit-content" : "100vh";
                } else {
                    section.style.height = "100vh"; // Zorg dat het op desktop altijd 100vh is
                }
            }, 300); // Wacht tot de paneltransitie klaar is
        });
    }
});
