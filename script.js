// Grab DOM elements 
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");


// Event Listeners
// Listener when the form is submitted
form.addEventListener("submit", validateForm)

// Functions 
function validateForm(e) {

    // Prevent the form submission automatically
    e.preventDefault();

    // Track whether form is valid

    // Check if any of the field is empty
    if (nameInput.value.trim() === "") {
        
    }

    if (emailInput.value.trim() === "") {

    }

    if (passwordInput.value.trim() === "") {

    }

    if (confirmPassword.value.trim() === "") {

    }
}