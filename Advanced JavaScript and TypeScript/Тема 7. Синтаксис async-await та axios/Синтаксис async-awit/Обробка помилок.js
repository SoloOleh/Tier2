// const fetchUsers = async () => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const fetchUsers = async () => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   return response.data;
// };

// fetchUsers()
//   .then((users) => console.log(users))
//   .catch((error) => console.log(error));

const fetchUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

const doStuff = async () => {
  try {
    const users = await fetchUsers();
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

doStuff();
