document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.service-card, .feature-card, .pricing-content, .contact-info');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});