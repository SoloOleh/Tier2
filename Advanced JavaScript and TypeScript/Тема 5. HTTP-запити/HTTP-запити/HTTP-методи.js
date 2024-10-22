// POST — створити новий ресурс.
// GET — отримати набір ресурсів або один ресурс.
// PUT — оновити існуючий або створити новий ресурс.
// PATCH — оновити існуючий ресурс.
// DELETE — видалити ресурс.

const options = {
  method: "GET",
};

fetch("https://jsonplaceholder.typicode.com/users", options)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((data) => {
    // Data handling
  })
  .catch((error) => {
    // Error handling
  });
