// Get the elements
const cookieBanner = document.getElementById("cookieBanner");
const acceptBtn = document.getElementById("acceptBtn");

// Check if the user has already accepted cookies
const hasAcceptedCookies = localStorage.getItem("cookieConsent");

if (!hasAcceptedCookies) {
    cookieBanner.style.display = "block";
}

// Function to handle cookie acceptance
function acceptCookies() {
    // Set a local storage item to remember user's choice
    localStorage.setItem("cookieConsent", "true");
    cookieBanner.style.display = "none";
}

// Event listener for the accept button
acceptBtn.addEventListener("click", acceptCookies);
