document.addEventListener("DOMContentLoaded", () => {
    const accordion = document.querySelectorAll("#ervaring ul li button");

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function() {
            const panel = this.nextElementSibling;
            accordion.forEach(function(button) {
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
        });
    }
});
