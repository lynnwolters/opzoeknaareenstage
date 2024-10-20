document.querySelectorAll("#fourth-section ul li button").forEach((accordion, index) => {

    accordion.addEventListener("click", () => {
        const accordionPanel = accordion.nextElementSibling;
        if (accordionPanel.classList.contains("accordion-toggle")) {
            accordionPanel.classList.remove("accordion-toggle");
            accordion.classList.remove("no-border"); 
        } else {
            document.querySelectorAll("#fourth-section ul li div").forEach(panel => {
                panel.classList.remove("accordion-toggle");
            });
            document.querySelectorAll("#fourth-section ul li button").forEach(btn => {
                btn.classList.remove("no-border");
            });
            accordionPanel.classList.add("accordion-toggle");
            accordion.classList.add("no-border"); 
        }
    });

    if (index === 1) {
        accordion.nextElementSibling.classList.add("accordion-toggle");
        accordion.classList.add("no-border");
    }

});
