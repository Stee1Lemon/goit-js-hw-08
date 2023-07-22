// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const refs = {
  galleryEl: document.querySelector('.gallery'),
};

createFinalGalleryByReduce(galleryItems);

function createFinalGalleryByReduce(arrayImages) {
  const finalGallery = arrayImages.reduce(
    (accumulator, item) =>
      (accumulator += `<li class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
          </a>
        </li>`),
    ''
  );

  refs.galleryEl.insertAdjacentHTML('beforeend', finalGallery);
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
