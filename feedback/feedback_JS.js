const form = document.querySelector("form");
const nameInput = form.querySelector('input[name="name"]');
const emailInput = form.querySelector('input[type="email"]');
const messageInput = form.querySelector("textarea");
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };

  // Here you can insert your own function to send the form data to a server using XMLHttpRequest or Fetch API.

  form.reset();
  successMessage.style.display = "block";
});
