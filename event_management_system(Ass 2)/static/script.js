/*
Project: Event Management Website
*/

function validateForm() {
    let phone = document.querySelector("input[name='phone']").value;

    if (phone.length < 10) {
        alert("Invalid phone number");
        return false;
    }
    return true;
}

// Live Search
document.addEventListener("DOMContentLoaded", () => {
    let search = document.getElementById("search");

    if (search) {
        search.addEventListener("keyup", () => {
            let value = search.value.toLowerCase();
            document.querySelectorAll(".card").forEach(card => {
                card.style.display = card.innerText.toLowerCase().includes(value)
                    ? "block"
                    : "none";
            });
        });
    }
});