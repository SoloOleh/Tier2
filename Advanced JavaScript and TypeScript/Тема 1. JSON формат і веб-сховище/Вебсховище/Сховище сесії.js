console.log(window.sessionStorage); // Storage {length: 0}

sessionStorage.setItem("user-id", "123");

// const ticketsCity = { from: "Lviv", to: "Kyiv", quantity: 2 };
// const ticketsCityJSON = JSON.stringify(ticketsCity);
// sessionStorage.setItem("tickets", ticketsCityJSON);

sessionStorage.setItem(
  "tickets",
  JSON.stringify({ from: "Lviv", to: "Kyiv", quantity: 2 })
);

console.log(sessionStorage);
// Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}

const userId = sessionStorage.getItem("user-id");
console.log(userId); // "123"

// const ticketsCityJSON = sessionStorage.getItem("tickets");
// console.log(ticketsCityJSON); // "{"from":"Lviv","to":"Kyiv","quantity":2}"

const tickets = JSON.parse(sessionStorage.getItem("tickets"));
console.log(tickets); // { from: "Lviv", to: "Kyiv", quantity: 2 }

sessionStorage.removeItem("tickets");
console.log(sessionStorage); // Storage {user-id: '123', length: 1}

sessionStorage.clear();
console.log(sessionStorage); // Storage {length: 0}
