// const greet = () => {
//   console.log("Hello!");
// };
// const timerId = setTimeout(greet, 3000);
// clearTimeout(timerId);

const setBtn = document.querySelector(".js-set");
const clearBtn = document.querySelector(".js-clear");
let timeoutId;

setBtn.addEventListener("click", () => {
  timeoutId = setTimeout(() => {
    console.log("I love async JS!");
  }, 2000);
});

clearBtn.addEventListener("click", () => {
  clearTimeout(timeoutId);
  console.log(`Timeout with id ${timeoutId} has stopped!`);
});
