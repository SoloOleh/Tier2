const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  form.reset();
});

// const registerForm = document.querySelector('.login-form');

// registerForm.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   //   console.log(form);
//   const email = form.elements.email.value;
//   //   console.log(email);
//   const password = form.elements.password.value;
//   //   console.log(password);

//   if (email === '' || password === '') {
//     return alert('All form fields must be filled in');
//   }

//   console.log(`Login: ${email}, Password: ${password}`);
//   form.reset();
// }

// v2

// const object = {};

// const registerForm = document.querySelector('.login-form');

// registerForm.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   console.log(form);
//   const email = form.elements.email.value.trim();
//   const password = form.elements.password.value.trim();

//   if (email === '' || password === '') {
//     return console.log('Please fill in all the fields!');
//   } else {
//     object.login = email;
//     object.password = password;
//   }
//   console.log(object);

//   //   console.log(`Login: ${login}, Password: ${password}`);
//   form.reset();
// }
