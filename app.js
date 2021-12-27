document.querySelectorAll(".win-btn").forEach((b) => {

    b.onmouseleave = e => {
        // remove effects
        e.target.style.background = "black";
        e.target.style.borderImage = null;
    };

    b.addEventListener("mousemove", e => {
        // add effects
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top; // y position within the element
        e.target.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.2), rgba(255,255,255,0))`
    });
});