const makeMessage = (username) => {
  return `Welcome, ${username}!`;
};

export default makeMessage;

import { makeMessage, levels } from "./makeMessage";

console.log(makeMessage("Jacob")); // "Welcom, Jacob!"
console.log(levels); // ["easy", "medium", "hard"]
