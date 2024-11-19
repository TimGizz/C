const gap = 70;

const carousel = document.querySelector(".carusel"),
    content = document.getElementById("content"),
    next = document.querySelector(".next"),
    prev = document.querySelector(".prev");
    block = document.querySelector(".free__block");
    wrapper = document.querySelector('.wrapper')


let width1 = carousel.scrollWidth
rast = 0 
next.addEventListener("click", (e) => {
    carousel.scrollBy(width + gap, 0);
    rast+=width+gap
    if (carousel.scrollWidth !== 0) {
        prev.style.display = "flex";
    }
    if (width1 -gap - width <= rast + wrapper.scrollWidth - width) {
        next.style.display = "none";
    }
});
prev.addEventListener("click", (e) => {
    carousel.scrollBy(-(width + gap), 0);
    rast-=(width+gap)
    if (carousel.scrollLeft - width - gap <= 0) {
        prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "flex";
    }
    
});
let width = block.scrollWidth;
// window.addEventListener("resize", (e) => (width = carousel.offsetWidth));
