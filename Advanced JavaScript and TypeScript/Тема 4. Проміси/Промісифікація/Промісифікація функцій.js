// 1.
// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);
// };

// fetchUserFromServer(
//   "Mango",
//   (user) => console.log(user),
//   (error) => console.error(error)
// );

// 2.
// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess("success value");
//     } else {
//       onError("error");
//     }
//   }, 2000);
// };

// fetchUserFromServer(
//   "Mango",
//   (user) => console.log(user),
//   (error) => console.error(error)
// );

// 3.
// const fetchUserFromServer = (username) => {
//   return new Promise((resolve, reject) => {
//     // ...
//   });
// };

// const userPromise = fetchUserFromServer("Mango"); // результатом виклику fetchUserFromServer("Mango") буде проміс

// // проміс обробляємо у методах then() i catch()
// userPromise
//   .then((user) => console.log(user))
//   .catch((error) => console.error(error));

// 4.
// const fetchUserFromServer = (username) => {
//   return new Promise((resolve, reject) => {
//     // ...
//   });
// };

// fetchUserFromServer("Mango") // результатом виклику fetchUserFromServer("Mango") буде проміс
//   .then((user) => console.log(user)) // проміс обробляємо в методі then()
//   .catch((error) => console.error(error)); // проміс обробляємо в методі catch()

// 5.
const fetchUserFromServer = (username) => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for ${username}`);

    setTimeout(() => {
      // Change value of isSuccess variable to simulate request status
      const isSuccess = true;

      if (isSuccess) {
        resolve("success value"); // значенням параметра resolve буде колбек-функція методу then()
      } else {
        reject("error"); // значенням параметра reject буде колбек-функція методу catch()
      }
    }, 2000);
  });
};

fetchUserFromServer("Mango")
  .then((user) => console.log(user))
  .catch((error) => console.error(error));
