const BASE_URL = "https://pixabay.com/api";
const ENDPOINT = "image_type=photo&orientation=horizontal&safesearch=true";
const API_KEY = "46451021-7873f1dc2ed25ef257fef9075";

// * v1
function getPhotos(query) {
  return fetch(`${BASE_URL}/?key=${API_KEY}&q=${query}&${ENDPOINT}`).then(
    (res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      return res.json();
    }
  );
}
export { getPhotos };
