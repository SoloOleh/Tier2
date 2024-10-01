localStorage.setItem("ui-theme", "dark");
console.log(localStorage.getItem("ui-theme")); // "dark"

localStorage.removeItem("ui-theme");
console.log(localStorage.getItem("ui-theme")); // null

localStorage.setItem("ui-theme", "light");
localStorage.setItem("notif-level", "mute");

console.log(localStorage);
// Storage {notif-level: 'mute', ui-theme: 'light', length: 2}

localStorage.clear();
console.log(localStorage); // Storage {length: 0}
