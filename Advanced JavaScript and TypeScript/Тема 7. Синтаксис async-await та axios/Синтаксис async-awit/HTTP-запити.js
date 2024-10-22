// const fetchUsers = () => {
//   axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
//     console.log(response.data);
//   });
// };

// const fetchUsers = async () => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   console.log(response.data);
// };

const fetchUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

// fetchUsers().then((users) => console.log(users));
