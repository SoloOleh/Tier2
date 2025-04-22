// import axios from "axios";

// const BASE_URL = "https://pixabay.com/api";
// const ENDPOINT = "image_type=photo&orientation=horizontal&safesearch=true";
// const API_KEY = "46451021-7873f1dc2ed25ef257fef9075";
// const PAGE = "page=1";
// const PER_PAGE = "per_page=15";

// * v1
// function getPhotos(query) {
//   return fetch(`${BASE_URL}/?key=${API_KEY}&q=${query}&${ENDPOINT}`).then(
//     (res) => {
//       if (!res.ok) {
//         throw new Error(res.status);
//       }

//       return res.json();
//     }
//   );
// }
// export { getPhotos };

// v2 без axios
// function getPhotos(query) {
//   return axios
//     .get(`${BASE_URL}/?key=${API_KEY}&q=${query}&${ENDPOINT}`)
//     .then((response) => {
//       return response.data;
//     });
// }
// export { getPhotos };

// v2 з axios
// async function getPhotos(query) {
//   const response = await axios.get(
//     `${BASE_URL}/?key=${API_KEY}&q=${query}&${ENDPOINT}&${PAGE}&${PER_PAGE}`
//   );
//   return response.data;
// }
// export { getPhotos };

import axios from "axios";

// Базова URL адреса
axios.defaults.baseURL = "https://pixabay.com/api";

// Загальний параметр ключа API
const API_KEY = "46451021-7873f1dc2ed25ef257fef9075";

async function getPhotos({ query, page = 1, perPage = 15 }) {
  const response = await axios.get("/", {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page,
      per_page: perPage,
    },
  });

  return response.data;
}

export { getPhotos };
