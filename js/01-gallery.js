import { galleryItems } from './gallery-items.js';
// Change code below this line

const findDiv = document.querySelector('.gallery');
const boxImages = listGallery(galleryItems);
findDiv.insertAdjacentHTML('beforeend', boxImages);

function listGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    }).join('');
}

findDiv.addEventListener('click', viewBigImage);
function viewBigImage(evt) {
    evt.preventDefault();
    // console.log(evt);
    const tuchOneEl = evt.target.classList.contains('gallery__image');
    if (!tuchOneEl) {
        return;
    }
    const outputBigImage = basicLightbox.create(`<img src = ${evt.target.dataset.source}>`);
    outputBigImage.show();
}

