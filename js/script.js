// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
}

// Active Navigation Highlight
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("text-blue-500", "font-bold");
    }
});

// Parking Search Demo
const searchBtn = document.getElementById("search-btn");

if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        const locationInput = document.getElementById("location");

        if (locationInput) {
            const location = locationInput.value;

            if (location.trim() === "") {
                alert("Please enter a location");
            } else {
                alert(`Searching parking slots near ${location}`);
            }
        }
    });
}

// Reservation Button
const reserveBtns = document.querySelectorAll(".reserve-btn");

reserveBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Parking Slot Reserved Successfully!");
    });
});


// Contact Form with EmailJS
const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_0tl6bv8",
            "template_p13cgfc",
            this
        )
        .then(() => {

            alert("Message Sent Successfully!");
            contactForm.reset();

        })
        .catch((error) => {

            alert("Failed to send message.");
            console.error(error);

        });

    });

}



// Smooth Scroll (Safe Version)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        // Ignore empty links like href="#"
        if (href && href !== "#") {

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});
// ==========================
// Google Login User Display
// ==========================

const username = localStorage.getItem("username");
const email = localStorage.getItem("email");
const photo = localStorage.getItem("photo");

const userInfo = document.getElementById("user-info");
const authButtons = document.getElementById("auth-buttons");

if (username && userInfo && authButtons) {

    userInfo.classList.remove("hidden");

    document.getElementById("user-name").textContent = username;
    document.getElementById("user-email").textContent = email;
    document.getElementById("profile-pic").src = photo;

    authButtons.style.display = "none";
}

const logoutBtn = document.getElementById("logout-btn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        localStorage.clear();

        window.location.href = "login.html";

    });

}