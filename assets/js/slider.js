const gap = 60;

const carousel = document.querySelector(".carusel"),
    content = document.getElementById("content"),
    next = document.querySelector(".next"),
    prev = document.querySelector(".prev");
    block = document.querySelector(".free__block");


next.addEventListener("click", (e) => {
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
        prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "none";
    }
});
prev.addEventListener("click", (e) => {
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
        prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "flex";
    }
});

let width = carousel.offsetWidth;
console.log(width)
window.addEventListener("resize", (e) => (width = carousel.offsetWidth));
