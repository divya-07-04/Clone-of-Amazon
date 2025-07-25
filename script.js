// 1. Greet in console
window.addEventListener("DOMContentLoaded", () => {
    console.log("👋 Welcome to Divya's Amazon Clone!");
});

// 2. Alert on clicking cart
document.querySelector(".nav-cart").addEventListener("click", () => {
    alert("🛒 Your cart is empty! Add something cool.");
});

// 3. Highlight search box on focus/blur
const searchBox = document.querySelector(".searchinput");
const searchContainer = document.querySelector(".nav-search");

searchBox.addEventListener("focus", () => {
    searchContainer.style.border = "2px solid orange";
});
searchBox.addEventListener("blur", () => {
    searchContainer.style.border = "none";
});

// 4. Fun hover message on account
document.querySelectorAll(".border")[2].addEventListener("mouseenter", () => {
    console.log("✨ Hovered over Account & Lists!");
});

// 5. Keypress effect: Press 's' to focus on search
document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === 's') {
        searchBox.focus();
        console.log("🔍 Quick Search activated with 's'");
    }
});

// 6. Back to top scroll
document.querySelector(".bttop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
