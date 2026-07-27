// ===============================
// ParkEasy - Main JavaScript
// ===============================

// -------------------------------
// Active Navigation
// -------------------------------
document.querySelectorAll("nav a").forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("text-cyan-400", "font-semibold");
    }
});

// -------------------------------
// Smooth Scroll
// -------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// -------------------------------
// Search Parking
// -------------------------------
const locationInput = document.getElementById("location");
const searchBtn = document.getElementById("search-btn");
const typing = document.getElementById("typing");

if (locationInput) {

    locationInput.addEventListener("input", () => {

        if (typing) {
            typing.textContent = "Searching : " + locationInput.value;
        }

    });

}

if (searchBtn) {

    searchBtn.addEventListener("click", () => {

        if (!locationInput.value.trim()) {

            alert("Please enter a location.");
            return;

        }

        alert("Searching parking near " + locationInput.value);

    });

}

// -------------------------------
// Parking Type
// -------------------------------
const parkingType = document.getElementById("parking-type");

if (parkingType) {

    parkingType.addEventListener("change", () => {

        console.log("Parking Type:", parkingType.value);

    });

}

// -------------------------------
// Parking Cards Hover
// -------------------------------
document.querySelectorAll(".parking-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "scale(1)";

    });

});

// -------------------------------
// Reserve Button
// -------------------------------
document.querySelectorAll(".reserve-btn").forEach(button => {

    button.addEventListener("click", function () {

        const parkingName = this.parentElement.querySelector("h3").innerText;

        localStorage.setItem("selectedParking", parkingName);

        this.innerHTML = "✔ Reserved";
        this.style.backgroundColor = "#22c55e";
        this.disabled = true;

        alert("Parking Slot Reserved Successfully!");

        setTimeout(() => {

            window.location.href = "reservation.html";

        }, 1000);

    });

});

// -------------------------------
// User Login Display
// -------------------------------
const username = localStorage.getItem("username");
const email = localStorage.getItem("email");


const userInfo = document.getElementById("user-info");
const authButtons = document.getElementById("auth-buttons");

if (username && userInfo && authButtons) {

    userInfo.classList.remove("hidden");

    document.getElementById("user-name").textContent = username;
    document.getElementById("user-email").textContent = email;
    
    authButtons.classList.add("hidden");


}

// -------------------------------
// Logout
// -------------------------------
const logoutBtn = document.getElementById("logout-btn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("photo");

        window.location.href = "login.html";

    });

}

// -------------------------------
// Logo Double Click
// -------------------------------
const logo = document.getElementById("logo");

if (logo) {

    logo.addEventListener("dblclick", () => {

        window.location.href = "index.html";

    });

}

// -------------------------------
// Keyboard Shortcut
// -------------------------------
document.addEventListener("keydown", function (e) {

    if (e.ctrlKey && e.key === "f") {

        if (locationInput) {

            e.preventDefault();
            locationInput.focus();

        }

    }

});

// -------------------------------
// Window Events
// -------------------------------
window.addEventListener("load", () => {

    console.log("ParkEasy Loaded Successfully");

});

window.addEventListener("resize", () => {

    console.log("Width:", window.innerWidth);

});

// ===============================
// Register User
// ===============================
const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (!name || !email || !phone || !password || !confirmPassword) {

            alert("Please fill all fields.");
            return;

        }

        if (password !== confirmPassword) {

            alert("Passwords do not match.");
            return;

        }

        try {

            const response = await fetch("/register", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    password
                })

            });

            const result = await response.json();

            alert(result.message);

            if (result.success) {

                registerForm.reset();

                window.location.href = "login.html";

            }

        } catch (error) {

            console.error(error);
            alert("Unable to connect to the server.");

        }

    });

}
// ===============================
// Login User
// ===============================
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (!email || !password) {
            alert("Please fill all fields.");
            return;
        }

        try {

            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const result = await response.json();

            alert(result.message);

            if (result.success) {

                localStorage.setItem("username", result.user.full_name);
                localStorage.setItem("email", result.user.email);
                localStorage.setItem("user_id", result.user.user_id);

                window.location.href = "index.html";
            }

        } catch (error) {

            console.error(error);
            alert("Unable to connect to the server.");

        }

    });

}