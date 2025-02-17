// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h>Hello, <span id="name-output">Anonymous</span>!</h

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value.trim();
});
