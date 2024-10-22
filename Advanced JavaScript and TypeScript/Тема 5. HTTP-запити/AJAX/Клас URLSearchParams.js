const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: "name",
});

console.log(searchParams.toString()); // "_limit=5&_sort=name"
const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"
