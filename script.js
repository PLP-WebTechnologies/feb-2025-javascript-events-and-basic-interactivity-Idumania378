// Interactive Button that changes text and color
document.getElementById("changeButton").addEventListener("click", function() {
    this.textContent = "You Clicked Me!";
    this.style.backgroundColor = "green";
    this.style.color = "white";
    this.style.transform = "scale(1.2)";
    setTimeout(() => {
        this.style.transform = "scale(1)";
    }, 300);
});

// Image Gallery: Display the image clicked in alert
let images = document.querySelectorAll(".gallery-image");
images.forEach(img => {
    img.addEventListener("click", function() {
        alert(`You clicked on ${this.alt}`);
    });
});

// Accordion (Tabs) functionality
let acc = document.querySelectorAll(".accordion-button");
acc.forEach(function(button) {
    button.addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});

// Form Validation for Login with animation feedback
document.getElementById("loginForm").addEventListener("submit", function(event) {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let feedback = document.getElementById("loginFeedback");

    // Basic email and password validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        feedback.textContent = "Please enter a valid email address.";
        feedback.style.color = "red";
        event.preventDefault();
    } else if (password.length < 8) {
        feedback.textContent = "Password must be at least 8 characters long.";
        feedback.style.color = "red";
        event.preventDefault();
    } else {
        feedback.textContent = "Login successful!";
        feedback.style.color = "green";
    }
});
