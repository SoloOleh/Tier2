const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

// const json = JSON.stringify(settings);
// console.log(json); // {"theme":"dark","isAuthenticated":true,"options":[1,2,3]}
// localStorage.setItem("settings", json);

localStorage.setItem("settings", JSON.stringify(settings));
