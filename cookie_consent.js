const cookieBanner = document.getElementById("cookieBanner");
const acceptBtn = document.getElementById("acceptBtn");
const declineBtn = document.getElementById("declineBtn");
const cookieStatus = getCookie("cookieStatus");

if (cookieStatus === "accepted") {
    cookieBanner.style.display = "none"; 
} else if (cookieStatus === "declined") {
    cookieBanner.style.display = "none"; 
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

function setCookie(name, value, expirationDate) {
    const expires = expirationDate.toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function acceptCookies() {
    const twoMonthsFromNow = new Date();
    twoMonthsFromNow.setMonth(twoMonthsFromNow.getMonth() + 2);

    setCookie("cookieStatus", "accepted", twoMonthsFromNow);

    cookieBanner.style.display = "none";
    trackAnalytics("cookie_accepted");
}

function declineCookies() {
    setCookie("cookieStatus", "declined", new Date(0)); 

    cookieBanner.style.display = "none";
    trackAnalytics("cookie_declined");
}

acceptBtn.addEventListener("click", acceptCookies);
declineBtn.addEventListener("click", declineCookies);
