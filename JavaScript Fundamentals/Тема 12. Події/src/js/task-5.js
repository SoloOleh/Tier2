function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetPage = document.querySelector(".widget");
const changeColorButton = document.querySelector(".change-color");
const backround = document.querySelector(".color");

changeColorButton.addEventListener("click", (event) => {
  backround.textContent = getRandomHexColor();
  widgetPage.style.backgroundColor = `${backround.textContent}`;
});
