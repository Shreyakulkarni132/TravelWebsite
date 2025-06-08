// Alert on form submit
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // prevent actual submission
            alert('Thank you for contacting us!');
            contactForm.reset(); // optional
        });
    }
});