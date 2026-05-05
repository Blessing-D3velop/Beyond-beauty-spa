import { galleryData } from "./data/gallery-data.js";

const galleryContainer = document.querySelector('.js-gallery-container');

const modal = document.querySelector('.js-image-modal');
const modalImg = document.querySelector('.js-modal-image');
const closeModal = document.querySelector('.js-close-modal');
const prevBtn = document.querySelector('.js-prev-btn');
const nextBtn = document.querySelector('.js-next-btn');

let currentIndex = 0;
let showAll = false;

const renderGallery = () => {
  galleryContainer.innerHTML = '';

  const dataToShow = showAll ? galleryData : galleryData.slice(0, 5);

  dataToShow.forEach((image, index) => {
    galleryContainer.innerHTML += `
      <div class="gallery-item" data-index="${index}">
        <img src="${image.img}" class="gallery-image js-gallery-image">
      </div>
    `;
  });

  addImageEvents();
};

const openModal = (index) => {
  currentIndex = index;
  modalImg.src = galleryData[currentIndex].img;
  modal.classList.add('active');
};

const closeModalFunc = () => {
  modal.classList.remove('active');
};

const nextImage = () => {
  currentIndex = (currentIndex + 1) % galleryData.length;
  modalImg.src = galleryData[currentIndex].img;
};

const prevImage = () => {
  currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
  modalImg.src = galleryData[currentIndex].img;
};

const addImageEvents = () => {
  document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.addEventListener('click', () => {
      openModal(index);
    });
  });
};

closeModal.addEventListener('click', closeModalFunc);
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModalFunc();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
});

renderGallery();