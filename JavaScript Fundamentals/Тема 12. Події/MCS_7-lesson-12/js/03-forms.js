/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 */

/*
? Оброби форму та збережи відгук користувача в об'єкт
*/

const formEl = document.querySelector(".js-form");

formEl.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault(); // зупиняє поведінку браузера за замовчуванням (наприклад, перезавантаження сторінки при сабміті форми)

  const form = event.target;
  const formElements = event.target.elements;

  const formData = {
    email: formElements.email.value,
    password: formElements.password.value,
    comment: formElements.comment.value,
  };

  console.log(formData);

  form.reset(); // очищуємо поля форми
}
