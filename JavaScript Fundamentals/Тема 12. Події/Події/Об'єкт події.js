const button = document.querySelector(".btn");

const handleClick = (event) => {
  console.log("event: ", event);
  console.log("event type: ", event.type);
  console.log("currentTarget: ", event.currentTarget);
};

button.addEventListener("click", handleClick);

// події клавіатури
document.addEventListener("keydown", (event) => {
  console.log("Keydown: ", event);
});

document.addEventListener("keyup", (event) => {
  console.log("Keyup: ", event);
});
