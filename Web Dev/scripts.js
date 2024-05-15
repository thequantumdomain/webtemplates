document.addEventListener('DOMContentLoaded', function () {
    const heroSection = document.querySelector('.hero');
    gsap.fromTo(heroSection, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
});
