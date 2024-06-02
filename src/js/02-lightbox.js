import { galleryItems } from './gallery-items.js';
// Change code below this line

const listEl = document.querySelector(".gallery");
const elements = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");
listEl.insertAdjacentHTML("beforeend", elements);

new SimpleLightbox('.gallery__link',
        {   captionsData: 'alt',
            captionPosition: 'bottom',
            captionDelay: 250,
        });