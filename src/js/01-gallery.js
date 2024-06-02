import { galleryItems } from "./gallery-items.js";
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
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");
listEl.insertAdjacentHTML("beforeend", elements);

listEl.addEventListener("click", selectImage);
function selectImage(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const selectImg = e.target.dataset.source;
  basicLightbox
    .create(
      `<img width="1400" height="900" src="${selectImg}">`
    )
    .show();
  window.addEventListener("keydown", onCloseModalClick);
}
function onCloseModalClick(e) {
  const openInstance = document.querySelector(".basicLightbox");
  if (e.code === "Escape") {
    openInstance.remove();
    window.removeEventListener("keydown", onCloseModalClick);
  }
}
