const cookieBanner = document.getElementById("cookieBanner");
const acceptBtn = document.getElementById("acceptBtn");


const hasAcceptedCookies = getCookie("cookieConsent");

if (hasAcceptedCookies) {
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

    setCookie("cookieConsent", "true", twoMonthsFromNow);

    cookieBanner.style.display = "none";
}


acceptBtn.addEventListener("click", acceptCookies);
