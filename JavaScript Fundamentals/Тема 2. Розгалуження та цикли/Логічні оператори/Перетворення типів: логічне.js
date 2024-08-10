console.log(Boolean(true)); // true
console.log(Boolean(false)); // false

console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(3.14)); // true
console.log(Boolean(-10)); // true


if(null) {
	console.log("Block if")
} else {
	console.log("Block else")
}

if(0) {
	console.log("Block if")
} else {
	console.log("Block else")
}
// Значення в умові інструкцій if приводиться до false .
// Отже, виконується код із блоку else.



if(5) {
	console.log("Block if")
} else {
	console.log("Block else")
}
// Значення в умові інструкції if приводиться до true .
// Отже, виконується код із блоку if.



console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean("false")); // true

if("") {
	console.log("Block if")
} else {
	console.log("Block else")
}
// У прикладі в умові інструкції if вказаний порожній рядок.
// Порожній рядок приводиться до false. Отже, виконується код із блоку else.

if("batman") {
	console.log("Block if")
} else {
	console.log("Block else")
}
// Отже, if наводиться до true. Виконується код із блоку if.