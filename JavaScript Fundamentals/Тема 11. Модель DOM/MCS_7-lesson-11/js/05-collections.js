/*
 * Створюємо та додаємо колекцію
 */
const pictures = [
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/0/700/460",
    alt: "laptop",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/1/700/460",
    alt: "developer",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/10/700/460",
    alt: "forest",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/100/700/460",
    alt: "beach",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/1000/700/460",
    alt: "mountain",
  },
];

/*
<li class="gallery-item">
  <a href="#">
    <img src="" alt="" width="" height="">
  </a>
</li>
*/

const createGalleryItem = (item) => {
  const liEl = document.createElement("li");
  liEl.classList.add("gallery-item");

  const linkEl = document.createElement("a");
  linkEl.href = "#";

  const imageEl = document.createElement("img");
  imageEl.src = item.url;
  imageEl.alt = item.alt;
  imageEl.width = item.width;
  imageEl.height = item.height;

  linkEl.append(imageEl);
  liEl.append(linkEl);

  return liEl;
};

const galleryNodes = pictures.map(createGalleryItem);

console.log(galleryNodes);

const galleryEl = document.querySelector(".js-gallery");

galleryEl.append(...galleryNodes);
