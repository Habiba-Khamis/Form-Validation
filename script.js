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

    // Track whether form is valid
    let formIsValid = true;

    // Email Regex (check if the email is legit)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Prevent the form submission automatically
    e.preventDefault();

    // Check if any of the field is empty
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Please, enter your name!");

        // Track whether the form is valid
        formIsValid = false;     
    }

    if (emailInput.value.trim() === "") {
        showError(emailInput, "Please, enter your email!");

        formIsValid = false;
    }

    if (passwordInput.value.trim() === "") {
        showError(passwordInput, "Please, enter your password!");

        formIsValid = false;
    }

    if (confirmPassword.value.trim() === "") {
        showError(confirmPassword, "Please, confirm your password!");

        formIsValid = false;
    }

    // Check if everything is valid
    if (formIsValid === true) {
        
    }
}

// Create a function to show errors
// It takes two parameters the input we're currently on and display the error message
function showError (input, message) {

    // 1. Change the input border color
    input.style.border = "solid 2px #7d0f0f";

    // 2. Create a new <p> element and append it under the input box (the error message)
    const errorMessage = document.createElement("p");
    errorMessage.textContent = message;
    
    // 3. Add the CSS class to it 
    errorMessage.classList.add("error-message");

    // 4. Add the error message underneath the inputs
    input.after(errorMessage);  
} 