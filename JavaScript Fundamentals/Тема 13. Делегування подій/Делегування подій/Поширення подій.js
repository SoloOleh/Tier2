const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

parent.addEventListener("click", (event) => {
  console.log("Parent click handler");
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
});

child.addEventListener("click", (event) => {
  console.log("Child click handler");
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
});

descendant.addEventListener("click", (event) => {
  console.log("Descendant click handler");
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
});
