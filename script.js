// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    });
});

// Booking form confirmation
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
    bookingForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const result = document.getElementById("result");
        if(result){
            result.classList.remove("d-none");
            result.innerText = "Your ride has been booked successfully!";
        }
        bookingForm.reset(); // optional: clears form after submission
    });
}

// Contact form confirmation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Your message has been sent. We will contact you soon!");
        contactForm.reset();
    });
}
