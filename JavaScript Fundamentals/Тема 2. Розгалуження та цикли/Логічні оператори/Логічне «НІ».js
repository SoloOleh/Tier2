console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !"Mango" -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !"" -> !false -> true
console.log(!null); // !null -> !false -> true


// const isBlocked = false;
// const canChat = !isBlocked; // !false -> true

// if(canChat) {
// 	console.log("Can type in chat!")
// } else {
// 	console.log("Blocked from typing in chat!")
// }


// const isBlocked = true;
// const canChat = !isBlocked; // !true -> false

// if(canChat) {
// 	console.log("Can type in chat!")
// } else {
// 	console.log("Blocked from typing in chat!")
// }


const isOnline = true;
const isBlocked = false;
const canChat = isOnline && !isBlocked; 
// true && !false -> true && true -> true

if(canChat) {
	console.log("Can type in chat!")
} else {
	console.log("Blocked from typing in chat!")
}
