const students = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["science", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];

const sortedByAscendingScore = students.toSorted((a, b) => a.score - b.score);
const names = sortedByAscendingScore.map((student) => student.name);

console.log(sortedByAscendingScore); // [ { name: 'Ajax', score: 37, courses: [ 'physics', 'biology' ] }, { name: 'Poly', score: 59, courses: [ 'science', 'mathematics' ] }, { name: 'Mango', score: 83, courses: [ 'mathematics', 'physics' ] }, { name: 'Kiwi', score: 94, courses: [ 'literature', 'science' ] } ]

console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

// const names = students
//   .toSorted((a, b) => a.score - b.score)
//   .map((student) => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

const uniqueSortedCourses = students
  .flatMap((student) => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .toSorted((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]
