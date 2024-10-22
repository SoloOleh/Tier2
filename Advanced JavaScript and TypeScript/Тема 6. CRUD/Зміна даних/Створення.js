const postToAdd = {
  title: "CRUD",
  body: "CRUD is awesome!",
};

const options = {
  method: "POST",
  body: JSON.stringify(postToAdd),
  // body: JSON.stringify({ bla: "bla" }),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

fetch("https://jsonplaceholder.typicode.com/posts", options)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((post) => console.log(post))
  .catch((error) => console.log(error));
