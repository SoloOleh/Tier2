// import { name as newName } from "...";

// Module myModule.js
export const original = "Hello, World!";

// Your current module, for example app.js
import { original as renamed } from "./myModule.js";

console.log(renamed); // "Hello, World!"
