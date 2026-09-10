
// 1. Preloader Animation
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('loaded');
        }, 1800); // Thoda time badhaya taaki bada logo dhyan se dikhe
    }
});

// 2. Mobile Menu Toggle & Auto Close
document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const navItems = document.querySelectorAll('.nav-item');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Close menu when a link is tapped
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }

    // ===============================================
    // 3. Hairstyles Swiper Slider (Continuous Square Marquee)
    // ===============================================
    if (typeof Swiper !== 'undefined') {
        const hairSwiper = new Swiper(".hairSwiper", {
            spaceBetween: 20,           
            centeredSlides: false,
            speed: 3500,                
            autoplay: {
                delay: 0,               
                disableOnInteraction: false, 
            },
            loop: true,                 
            slidesPerView: "auto",      
            allowTouchMove: true,       
            grabCursor: true            
        });
    }

    // 4. Scroll Reveal Animation
    const reveals = document.querySelectorAll(".reveal");

    function reveal() {
        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = 80;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    reveal(); // Trigger once on load
});
