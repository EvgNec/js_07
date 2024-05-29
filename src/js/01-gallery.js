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
  if (e.target.nodeName !== "IMG") {
    console.log("e.target", e.target);
    return;
  }
  console.log("e.target", e.target);
  const selectImg = e.target.dataset.source;
  console.log("selectImg ", selectImg);
  basicLightbox
    .create(
      `
      <div class="modal">
		<img width="1400" height="900" src="${selectImg}">
        </div>`
    )
      .show();
    basicLightbox.close();
}
