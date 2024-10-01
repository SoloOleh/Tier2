// promise
//   .then((value) => {
//     // Promise fulfilled
//   })
//   .catch((error) => {
//     // Promise rejected
//   })
//   .finally(() => {
//     // Promise fulfilled or rejected
//   });

const isSuccess = true;

// Create promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

// Registering promise callbacks
promise
  .then((value) => console.log(value)) // "Success! Value passed to resolve function"
  .catch((error) => console.log(error)) // "Error! Error passed to reject function"
  .finally(() => console.log("Promise settled")); // "Promise settled"

// promise.then((value) => console.log(value)); // "Success! Value passed to resolve function"
// promise.catch((error) => console.log(error)); // "Error! Error passed to reject function"
// promise.finally(() => console.log("Promise settled")); // "Promise settled"
