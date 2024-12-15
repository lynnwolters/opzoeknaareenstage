window.addEventListener('load', () => {
    const overlay = document.getElementById('loading-overlay');

    // Automatically remove overlay after the fade-out animation
    overlay.addEventListener('animationend', () => {
        overlay.style.display = 'none'; // Remove overlay from view
    });
});