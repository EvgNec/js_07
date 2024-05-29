import { galleryItems } from './gallery-items.js';
// Change code below this line


const listEl = document.querySelector(".gallery");
const elements = galleryItems.map(({ preview, original, description }) =>
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
).join("");
listEl.insertAdjacentHTML("beforeend", elements);


// listEl2.style.display = "flex";
// listEl2.style.gap = "60px";
// listEl2.style.listStyle = "none";
// listEl2.style.flexWrap = 'wrap';

