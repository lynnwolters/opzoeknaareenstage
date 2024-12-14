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

            // Pas de hoogte van de sectie aan
            setTimeout(() => {
                const isPanelOpen = [...accordion].some((button) => {
                    const panel = button.nextElementSibling;
                    return panel.style.maxHeight;
                });

                // Zet de hoogte op 'fit-content' als een paneel open is, anders terug naar '100vh'
                section.style.height = isPanelOpen ? "fit-content" : "100vh";
            }, 300); // Wacht tot de paneltransitie klaar is
        });
    }
});
