// const timerId = setTimeout(callback, delay, arg1, arg2, ...);

const button = document.querySelector("button");

const onClick = () => {
  const timerId = setTimeout(() => {
    console.log("I love async JS!");
  }, 2000);

  console.log(timerId);
};

button.addEventListener("click", onClick);
