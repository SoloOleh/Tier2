const refs = {
  mainForm: document.querySelector("#mainForm"),
  container: document.querySelector(".js-container"),
};

refs.mainForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const amount = Number(form.elements.amount.value);

  if (isNaN(amount) || amount <= 0) {
    alert("Enter a positive number please!");
    return;
  }

  refs.container.innerHTML = generateCircles(amount);

  refs.container.addEventListener("click", handleCircleDelete);

  form.reset();
}

function handleCircleDelete(event) {
  console.log("currentTarget", event.currentTarget); // посилання на елемент на якому висить обробник подій (елемент, який обробив подію)
  console.log("target", event.target); // посилання на елемент на якому сталась подія (елемент, який викликав подію)

  if (event.target === event.currentTarget) {
    return;
  }

  //* у випадках коли в контейнері багато елементів - можна конкретизувати з яким саме ми будемо працювати (через клас, айді, дата атрибут, назву тегу, тощо)
  // if (event.target.classList.contains("circle")) {
  //   event.target.remove();
  // }

  event.target.remove();
}

function generateCircles(amount) {
  let markup = "";
  for (let i = 1; i <= amount; i += 1) {
    markup += `<div class='circle' style="background-color: ${generateRandomColor()}"></div>`;
  }
  return markup;
}

function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// ! ====

document
  .querySelector("#button")
  .addEventListener("click", () => console.log("Click 1"));
  document
    .querySelector("#button")
    .addEventListener("click", () => console.log("Click 4"));
document
  .querySelector("#button")
  .addEventListener("click", () => console.log("Click 2"));
document
  .querySelector("#button")
  .addEventListener("click", () => console.log("Click 3"));
