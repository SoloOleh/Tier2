const box = document.querySelector("div.box");

// box.addEventListener("click", function (event)
box.addEventListener("click", (event) => {
  console.log(event.target);
});
