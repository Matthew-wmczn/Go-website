// slide information container
const slideData = [
    {
        subtitle: "one",
        description: "Words descriptions Words descriptions Words descriptions Words descriptions...",
        imageSrc: "images/player1.jpg"
    },
    {
        subtitle: "two",
        description: "Words descriptions Words descriptions Words descriptions Words descriptions...",
        imageSrc: "images/player2.jpg"
    },
    {
        subtitle: "three",
        description: "Words descriptions Words descriptions Words descriptions Words descriptions...",
        imageSrc: "images/player3.jpg"
    },
    {
        subtitle: "four",
        description: "Words descriptions Words descriptions Words descriptions Words descriptions...",
        imageSrc: "images/player4.jpg"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const subtitleEl = document.getElementById("slide-subtitle");
    const descriptionEl = document.getElementById("slide-description");
    const imageEl = document.getElementById("slide-image");
    const dots = document.querySelectorAll(".dot");

    // Function to update the slide content
    function updateSlide(index) {
        const data = slideData[index];
        if (!data) return;

        subtitleEl.textContent = data.subtitle;
        descriptionEl.textContent = data.description;
        imageEl.src = data.imageSrc;
        imageEl.alt = data.subtitle;

        // Update active dot styling
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    // click listeners for dots
    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            const index = parseInt(e.target.getAttribute("data-index"));
            updateSlide(index);
        });
    });
});