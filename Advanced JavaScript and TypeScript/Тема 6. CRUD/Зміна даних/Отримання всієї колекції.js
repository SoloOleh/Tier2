fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((posts) => console.log(posts))
  .catch((error) => console.log(error));
