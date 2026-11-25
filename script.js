'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
const modalHeading = document.querySelector('#modal-heading');
const modalDescription = document.querySelector('#modal-description');

let lastFocusedElement;

const openModal = function (event) {
  const trigger = event.currentTarget;
  const triggerLabel = trigger.textContent.trim();
  const modalNumber = triggerLabel.replace('Show modal ', '');

  lastFocusedElement = trigger;
  modalHeading.textContent = `Modal ${modalNumber}`;
  modalDescription.textContent = `You opened this dialog with the ${triggerLabel} button.`;
  modal.classList.add('is-open');
  overlay.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  btnCloseModal.focus();
};

const closeModal = function () {
  modal.classList.remove('is-open');
  overlay.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  lastFocusedElement.focus();
};

btnsShowModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) {
    closeModal();
  }
});
