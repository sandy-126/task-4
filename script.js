// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Contact Form Submission
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    document.getElementById("formStatus").textContent = "Please fill in all fields.";
    return;
  }

  // Save to localStorage
  const formData = { name, email, message };
  localStorage.setItem("contactFormData", JSON.stringify(formData));

  // Clear form
  this.reset();
  document.getElementById("formStatus").textContent = "Message sent successfully!";
});
