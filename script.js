// Fade-in animation for sections
const sections = document.querySelectorAll('.section');
const observerOptions = {
    root: null,
    threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        } else {
            // Reset when not visible (to allow repeated animation)
            entry.target.style.opacity = 0;
            entry.target.style.transform = 'translateY(50px)';
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
    sectionObserver.observe(section);
});
