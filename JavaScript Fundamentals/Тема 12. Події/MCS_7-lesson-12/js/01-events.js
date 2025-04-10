/*
 * Подія сlick
 *
 * - Іменування колбеків для слухачів
 * - handle*: handleSubjectEvent
 * - *Handler: subjectEventHandler
 * - on*: onSubjectEvent
 */

/*
? Натискаючи на кнопку "Click me" змусь
? червоний квадратик зміщуватись на 50px по діагоналі
*/

const refs = {
  clickBtn: document.querySelector(".js-click"),
  resetBtn: document.querySelector(".js-reset"),
  box: document.querySelector(".js-box"),
};

// let counter = 0;
// refs.clickBtn.addEventListener("click", () => {
//   counter += 1;
//   console.log(`Ви клікнули на кнопку ${counter} разів`);
// });

let step = 0;

refs.clickBtn.addEventListener("click", handleClick);
refs.resetBtn.addEventListener("click", handleResetClick);

function handleClick(event) {
  console.log(event); // обʼєкт з усією актуальною інформацією про подію яка відбулася,

  step += 50;
  refs.box.style.transform = `translate(${step}px, ${step}px)`;

  if (step >= 300) {
    refs.clickBtn.disabled = true;
    refs.clickBtn.removeEventListener("click", handleClick);
  }
}

function handleResetClick() {
  step = 0;
  refs.box.style.transform = `translate(${step}px, ${step}px)`;

  if (refs.clickBtn.disabled) {
    refs.clickBtn.disabled = false;
    refs.clickBtn.addEventListener("click", handleClick);
  }
}
