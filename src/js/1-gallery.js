// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { images } from './gallery-items';


const ulGallary = document.querySelector(".gallery");


function renderGallery(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    
    const html = arr.map(item => htmlTemplate(item)).join("");

    ulGallary.innerHTML = html;
}

function htmlTemplate({ preview, original, description }) {
    return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`;
}

renderGallery(images);

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });

