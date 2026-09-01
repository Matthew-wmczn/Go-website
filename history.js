// Image banner carousel array
const bannerImages = [
    "images/ancient.png",
    "images/jp-art.jpg",
    "images/goseigen.jpg",
    "images/alphago.png"
];

document.addEventListener("DOMContentLoaded", () => {
    const bannerImgEl = document.getElementById("banner-image");
    const dots = document.querySelectorAll(".dot");

    function updateBannerImage(index) {
        if (!bannerImages[index]) return;


        setTimeout(() => {
            bannerImgEl.src = bannerImages[index];
        });

    }

    // Add click event listeners to dots
    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            const index = parseInt(e.target.getAttribute("data-index"));
            updateBannerImage(index);
        });
    });
});