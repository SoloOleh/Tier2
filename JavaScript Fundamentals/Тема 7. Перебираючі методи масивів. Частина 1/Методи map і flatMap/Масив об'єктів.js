const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const names = students.map((student) => student.name);
console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]
