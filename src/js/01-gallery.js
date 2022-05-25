// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

console.log(galleryItems);

// Функция для второго задания.

const gallery = document.querySelector('.gallery');

const doSecondTask = () => {
const createGallery = (galleryItems) => {
    gallery.insertAdjacentHTML('afterbegin', galleryItems.map(item => {
        return `<a class="gallery__item" href="${item.original}" onclick="event.preventDefault()">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}" />
      </a>
      `;
        
    }).join(''));
}
createGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
}
doSecondTask();