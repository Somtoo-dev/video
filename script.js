
/* =========================================
   1. MOBILE NAVIGATION
========================================= */

// Select the menu button
const menuToggle = document.getElementById("menu-toggle");

// Select the navigation links container
const navLinks = document.getElementById("nav-links");

// Listen for clicks on the menu button
menuToggle.addEventListener("click", function () {

    // Toggle the active class
    navLinks.classList.toggle("active");

    // Check whether the menu is currently open
    const isOpen = navLinks.classList.contains("active");

    // Update accessibility state
    menuToggle.setAttribute("aria-expanded", isOpen);

    // Change hamburger icon to close icon
    if (isOpen) {
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});



/* =========================================
   2. CLOSE MENU AFTER CLICKING A LINK
========================================= */

// Select all links inside the navigation
const navItems = document.querySelectorAll(".nav-links a");

// Loop through each navigation link
navItems.forEach(function (link) {

    // Listen for clicks
    link.addEventListener("click", function () {

        // Remove active class to close menu
        navLinks.classList.remove("active");

        // Reset accessibility state
        menuToggle.setAttribute("aria-expanded", "false");

        // Restore hamburger icon
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});



/* =========================================
   3. CONTACT FORM
========================================= */

// Select the contact form
const contactForm = document.getElementById("contact-form");

// Listen for form submission
contactForm.addEventListener("submit", function (event) {

    // Prevent the browser from refreshing the page
    event.preventDefault();

    // Get values entered by the user
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const service = document.getElementById("service").value;

    const message = document.getElementById("message").value.trim();


    // Check whether all fields have been completed
    if (!name || !email || !service || !message) {

        alert("Please complete all fields.");

        return;

    }


    // Replace this with Tobi's actual WhatsApp number
    // Include the country code without the + sign
    const whatsappNumber = "234XXXXXXXXXX";


    // Create the enquiry message
    const whatsappMessage = `
Hello Tobi Editz!

My name is ${name}.

My email: ${email}

Service needed: ${service}

Project details:
${message}

I would like to discuss this project with you.
`;


    // Convert message into a URL-friendly format
    const encodedMessage = encodeURIComponent(whatsappMessage);


    // Create the WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");

});



/* =========================================
   4. AUTOMATIC COPYRIGHT YEAR
========================================= */

// Get the current year
const currentYear = new Date().getFullYear();

// Select the year element in the footer
const yearElement = document.getElementById("year");

// Display the current year
yearElement.textContent = currentYear;
