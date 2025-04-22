import { getPhotos } from "./js/pixaby-api.js";
import { createCardsMarkup } from "./js/render-functions.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
  searchForm: document.querySelector(".js-form"),
  galleryList: document.querySelector(".js-gallery"),
  loader: document.querySelector(".js-loader"),
};

let lightbox;

function updateLightbox() {
  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionDelay: 250,
    });
  }
}

function showLoader() {
  refs.loader.style.display = "block";
}

function hideLoader() {
  refs.loader.style.display = "none";
}

refs.searchForm.addEventListener("submit", handleSearch);

async function handleSearch(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const userQuery = form.elements.search.value.trim();
  console.log(userQuery);

  if (userQuery === "") {
    // alert("Будь ласка, введіть запит!");
    // return;
    iziToast.error({
      title: "Error",
      message: "Please enter a search query!",
      position: "topRight",
    });
    return;
  }

  showLoader(); // Показати loader перед запитом

  try {
    const photos = await getPhotos(userQuery);
    if (photos.total === 0) {
      refs.galleryList.innerHTML = "";
      // Можеш тут показати повідомлення, якщо хочеш
      iziToast.info({
        title: "No Results",
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
      return;
    }

    refs.galleryList.innerHTML = createCardsMarkup(photos.hits);
    updateLightbox();
  } catch (error) {
    console.log("Помилка під час завантаження фото:", error);
    iziToast.error({
      title: "Error",
      message: `Something went wrong: ${error.message}`,
      position: "topRight",
    });
  } finally {
    hideLoader(); // Сховати loader після завершення
    form.reset();
  }
}

export { refs };
