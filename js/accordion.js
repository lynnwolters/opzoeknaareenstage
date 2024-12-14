document.addEventListener("DOMContentLoaded", () => {
    const accordion = document.querySelectorAll("#ervaring ul li button");
    const section = document.querySelector("#ervaring");

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function () {
            const panel = this.nextElementSibling;

            accordion.forEach(function (button) {
                const otherPanel = button.nextElementSibling;
                if (button !== this) {
                    otherPanel.style.maxHeight = null;
                }
            }, this);

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }

            setTimeout(() => {
                const isPanelOpen = [...accordion].some((button) => {
                    const panel = button.nextElementSibling;
                    return panel.style.maxHeight;
                });

                section.style.height = isPanelOpen ? "fit-content" : "100vh";
            }, 300); 
        });
    }
});
