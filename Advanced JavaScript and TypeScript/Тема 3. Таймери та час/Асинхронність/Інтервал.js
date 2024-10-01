// const intervalId = setInterval(callback, delay, arg1, arg2, ...);

const startBtn = document.querySelector(".js-start");

startBtn.addEventListener("click", () => {
  const intervalId = setInterval(() => {
    console.log(`Interval ID: ${intervalId}, ${Math.random()}`);
  }, 1000);
});
