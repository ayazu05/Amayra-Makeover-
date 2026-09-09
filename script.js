
// 1. Preloader Animation
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('loaded');
    }, 1500); // 1.5 seconds delay
});

// 2. Scroll Reveal Animation
document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll(".reveal");

    function reveal() {
        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = 120;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    reveal();
});
