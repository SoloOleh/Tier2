// Change value of id property to update different post
const postToUpdate = {
  id: 1,
  body: "CRUD is really awesome!",
};

const options = {
  method: "PATCH",
  body: JSON.stringify(postToUpdate),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((post) => console.log(post))
  .catch((error) => console.log("ERROR:", error));
