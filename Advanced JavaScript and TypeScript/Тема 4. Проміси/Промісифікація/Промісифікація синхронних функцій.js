// const makeGreeting = (guestName, onSuccess, onError) => {
//   if (!guestName) {
//     onError("Guest name must not be empty");
//   } else {
//     onSuccess(`Welcome ${guestName}`);
//   }
// };

// makeGreeting(
//   "Mango",
//   (greeting) => console.log(greeting),
//   (error) => console.error(error)
// );

//Рефакторинг коду функції, яка приймає два колбеки та викликає їх за умовою.
// const makeGreeting = (guestName) => {
//   return new Promise((resolve, reject) => {
//     if (!guestName) {
//       reject("Guest name must not be empty");
//     } else {
//       resolve(`Welcome ${guestName}`);
//     }
//   });
// };

// makeGreeting("Mango")
//   .then((greeting) => console.log(greeting))
//   .catch((error) => console.error(error));

// Скорочений рефакторинг коду функції, яка приймає два колбеки та викликає їх за умовою.
const makeGreeting = (guestName) => {
  if (!guestName) {
    return Promise.reject("Guest name must not be empty");
  } else {
    return Promise.resolve(`Welcome ${guestName}`);
  }
};

makeGreeting("Mango")
  .then((greeting) => console.log(greeting))
  .catch((error) => console.error(error));
