const plusButton = document.querySelector(".plus-button");
const minusButton = document.querySelector(".minus-button");
const counter = document.querySelector(".counter");

let counterNumber = 0;
counter.textContent = counterNumber;

plusButton.addEventListener("click", () => {
  console.log("Plus");
  counterNumber += 1;
  console.log(counterNumber);
  counter.textContent = counterNumber;
});
minusButton.addEventListener("click", () => {
  console.log("Minus");
  counterNumber -= 1;
  console.log(counterNumber);
  counter.textContent = counterNumber;
});
