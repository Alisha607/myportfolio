
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".about-slider");

    if (!slider) {
        console.error("Slider not found!");
        return;
    }

    const track = slider.querySelector(".slider-track");
    const slides = slider.querySelectorAll(".slide");
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");
    const dots = document.querySelectorAll(".slider-dots .dot");

    if (!track || slides.length === 0 || !prevBtn || !nextBtn) {
        console.error("Slider elements are missing!");
        return;
    }

    let currentIndex = 0;
    let autoSlide;

    function showSlide(index) {
        currentIndex = (index + slides.length) % slides.length;

        track.style.transform =
            "translateX(-" + currentIndex * 100 + "%)";

        dots.forEach(function (dot, i) {
            dot.classList.toggle("active", i === currentIndex);
        });
    }

    function startAutoSlide() {
        clearInterval(autoSlide);

        autoSlide = setInterval(function () {
            showSlide(currentIndex + 1);
        }, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    nextBtn.addEventListener("click", function () {
        showSlide(currentIndex + 1);
    });

    prevBtn.addEventListener("click", function () {
        showSlide(currentIndex - 1);
    });

    dots.forEach(function (dot, i) {
        dot.addEventListener("click", function () {
            showSlide(i);
        });
    });

    // Stop sliding when the mouse enters the photo
    slider.addEventListener("mouseenter", stopAutoSlide);

    // Resume sliding when the mouse leaves the photo
    slider.addEventListener("mouseleave", startAutoSlide);

    showSlide(0);
    startAutoSlide();
});
