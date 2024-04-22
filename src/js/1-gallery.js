
// Імпорт бібліотеки SimpleLightbox як залежність проекту
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { images } from './gallery-items';
// Change code below this line
const galleryElements = document.querySelector('.gallery');

// Формуємо розмітку галереї на основі масиву даних
const createGalleryMarkup = images => {
    return images
    .map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href=${original}>
                <img class="gallery__image" src=${preview} alt=${description} />
            </a>`;
    })
    .join('');
};

// Рендеримо розмітку галереї
galleryElements.insertAdjacentHTML('beforeend', createGalleryMarkup(images));

const lightbox = new SimpleLightbox('.gallery a', {
    overlayOpacity: 0.5,
    captionDelay: 250,
    captionsData: 'alt',
    fadeSpeed: 250,
    rtl: true,
});
