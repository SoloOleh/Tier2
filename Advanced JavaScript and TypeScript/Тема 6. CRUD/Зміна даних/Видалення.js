const postIdToDelete = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
  method: "DELETE",
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((deletedPost) => console.log(deletedPost))
  .catch((error) => console.log("Error:", error));
