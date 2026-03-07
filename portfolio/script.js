document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault()
    document.getElementById("formStatus").innerText = "Thank you! Your message has been submitted."
    this.reset()
})
