const object = {};

const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  console.log(form);
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    return console.log("Please fill in all the fields!");
  } else {
    object.login = email;
    object.password = password;
  }
  console.log(object);

  //   console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}
