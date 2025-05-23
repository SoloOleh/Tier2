let formData = {
  email: "",
  message: "",
};

const localStorageKey = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

function saveFormData() {
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function loadFormData() {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || "";
    messageInput.value = formData.message || "";
  }
}

form.addEventListener("input", (event) => {
  formData[event.target.name] = event.target.value.trim();
  saveFormData();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert("Будь ласка заповніть усі поля!");
    return;
  }

  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
  formData = { email: "", message: "" };
});

window.addEventListener("DOMContentLoaded", loadFormData);
