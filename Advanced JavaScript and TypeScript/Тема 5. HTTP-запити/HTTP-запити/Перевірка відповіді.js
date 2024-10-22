fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((data) => {
    // Data handling
    console.log(data);
  })
  .catch((error) => {
    // Error handling
    console.log(error);
  });
