function createCardsMarkup(photos) {
  return photos
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      data-source="${largeImageURL}"
      alt="👍 Likes: ${likes} | 👁 Views: ${views} | 💬 Comments: ${comments} | ⬇ Downloads: ${downloads}"
    />
  </a>
</li>`
    )
    .join("");
}
export { createCardsMarkup };
