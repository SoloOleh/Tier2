// Change this number to fetch different post

// v1
const postId = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((post) => console.log(post))
  .catch((error) => console.log(error));

// v2
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((post) => console.log(post))
  .catch((error) => console.log(error));

// v3
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, { method: "GET" })
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((post) => console.log(post))
  .catch((error) => console.log(error));

// v4
const postIdNum = {
  id: 1,
};
const options = {
  method: "GET",
};
fetch(`https://jsonplaceholder.typicode.com/posts/${postIdNum.id}`, options)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((post) => console.log(post))
  .catch((error) => console.log(error));
