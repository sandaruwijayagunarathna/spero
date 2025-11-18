// Booking form confirmation
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
    bookingForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const result = document.getElementById("result");
        result.classList.remove("d-none");
        result.innerText = "Your ride has been booked successfully!";
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
