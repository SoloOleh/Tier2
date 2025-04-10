function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = document.querySelector("input");
const create = document.querySelector(".controls button[data-create]");
const destroy = document.querySelector(".controls button[data-destroy]");
const boxes = document.querySelector("#boxes");

changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
});

list.innerHTML = markup;
