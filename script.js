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

    // Delete old errors 
    // Select them all 
    const oldErrors = document.querySelectorAll(".error-message");
    for (let i = 0; i <oldErrors.length; i++ ) {

        // Reset the border by targeting the the input associated with each error right before removing it
        oldErrors[i].previousElementSibling.style.border = ""; 
        
        // Remove the error
        oldErrors[i].remove();
    }

    // Track whether form is valid
    let formIsValid = true;

    // Email Regex (check if the email is legit)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // Check if any of the field is empty
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Please, enter your name!");
        formIsValid = false;     
    }

    if (emailInput.value.trim() === "") {
        showError(emailInput, "Please, enter your email!");
        formIsValid = false;
    
        // Check if the email is verified with the regex 
    } else if (!emailPattern.test(emailInput.value)) {
        showError(emailInput, "Please enter a valid email address!");
    }

    if (passwordInput.value.trim() === "") {
        showError(passwordInput, "Please, enter your password!");
        formIsValid = false;

        // Check if the password is less than 8 characters
    } else if (passwordInput.value.length < 8) {
        showError(passwordInput, "The password must be more than 8 characters!")
    }

    if (confirmPassword.value.trim() === "") {
        showError(confirmPassword, "Please, confirm your password!");
        formIsValid = false;

    } else if (confirmPassword.value.trim() !== passwordInput.value.trim()) {
        showError(confirmPassword, "Password doesn't match!");
    }

    // Check if everything is valid
    if (formIsValid === true) {
        alert("Account created successfully!");
        form.reset();        
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