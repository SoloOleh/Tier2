const savedTheme = localStorage.getItem("ui-theme");
console.log(savedTheme); // "light"

const savedItem = localStorage.getItem("key-that-does-not-exist");
console.log(savedItem); // null

const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};
localStorage.setItem("settings", JSON.stringify(settings));

const savedSettings = localStorage.getItem("settings");
console.log(savedSettings); // A string

const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings); // Settings object
