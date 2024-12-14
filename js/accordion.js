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

            // Pas de hoogte van de sectie aan op basis van de inhoud
            setTimeout(() => {
                section.style.height = Math.max(section.scrollHeight, window.innerHeight) + "px";
            }, 300); // Wacht tot de animatie klaar is
        });
    }
});
