// v1
// axios.get("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name");

// v2
// const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: "name",
// });

// axios.get(`https://jsonplaceholder.typicode.com/users?${searchParams}`);

// v3
axios.get("https://jsonplaceholder.typicode.com/users", {
  params: {
    _limit: 7,
    _sort: "name",
  },
});
