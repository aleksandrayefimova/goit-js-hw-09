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

const captionDelay = 250

const lightbox = new SimpleLightbox('.gallery a', { 
    captionDelay, 
    captions: true,
    captionPosition: "bottom",
    captionData: "title",
    additionalHtml: ` `,
});

function showCaption(event) {
    const captionElement = document.querySelector('.sl-additional-html');
    captionElement.textContent = event.target.firstElementChild.alt;

    setTimeout(() => {
        captionElement.classList.add('show');
    }, captionDelay);
}

function hideCaption() {
    const captionElement = document.querySelector('.sl-additional-html');
    captionElement.classList.remove('show');
}

lightbox.on('shown.simplelightbox', showCaption);

lightbox.on('changed.simplelightbox', function(event) {
    hideCaption();
    showCaption(event);
});

