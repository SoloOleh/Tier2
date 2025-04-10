function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.body;

changeColorButton.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});

// const widgetPage = document.querySelector('.widget');
// const changeColorButton = document.querySelector('.change-color');
// const backround = document.querySelector('.color');

// changeColorButton.addEventListener('click', event => {
//   backround.textContent = getRandomHexColor();
//   widgetPage.style.backgroundColor = `${backround.textContent}`;
// });

// const widget = document.querySelector('.widget');
// const color = document.querySelector('.color');
// const button = document.querySelector('.change-color');

// button.addEventListener('click', handleClick);

// function handleClick(event) {
//   color.textContent = getRandomHexColor();
//   widget.style.backgroundColor = color.textContent;
// }
