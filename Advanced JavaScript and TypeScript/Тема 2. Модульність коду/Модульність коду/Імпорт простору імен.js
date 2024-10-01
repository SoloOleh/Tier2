// Module user.js
export const name = "Mango";
export const age = 26;
export const email = "mango@mail.com";

// Your current module
import * as user from "./user.js";

console.log(user.name); // "Mango"
console.log(user.age); // 26
console.log(user.email); // "mango@mail.com"
