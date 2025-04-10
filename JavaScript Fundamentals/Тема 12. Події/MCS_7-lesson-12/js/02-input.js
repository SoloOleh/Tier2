/*
 * - Подія input - викликається кожного разу як відбулась зміна в полі вводу (chatty event)
 * - Подія blur - викликається кожного разу як з інпуту пропадає фокус
 * - Подія change - викликається кожного разу як з інпуту пропадає фокус АЛЕ якщо в інпуті щось змінилось
 */

const inputEl = document.querySelector(".js-user-name");
const checkboxPolicyEl = document.querySelector(".js-policy-checkbox");

/*
? Виводь в консоль все що користувач вводить в input

*/

// inputEl.addEventListener("input", handleInput);

// function handleInput(event) {
//   //   console.log(event);

//   //* v1
//   console.log(inputEl.value);

//   //* v2
//   console.log(event.target.value);
// }

/*
? Користувач вводить в input своє ім'я після втрати
? фокусу отримує alert з повідомленням-привітанням
 */

// inputEl.addEventListener("blur", handleBlur);

// function handleBlur(event) {
//     alert(`Hello, ${event.target.value.trim()}`)
// }

/*
? Після того, як користувач активує чекбокс, виводиться alert
*/

inputEl.addEventListener("change", handleChange);
checkboxPolicyEl.addEventListener("change", handleCheckboxChange);

function handleChange(event) {
  alert(`Hello, ${event.target.value.trim()}`);
}

function handleCheckboxChange(event) {
  console.log(event.target.checked);

  if (event.target.checked) {
    console.log("Done!");
  }
}
