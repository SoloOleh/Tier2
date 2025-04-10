const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", handleInput);

function handleInput(event) {
  outputText.textContent = event.currentTarget.value.trim() || "Anonymous";
}
