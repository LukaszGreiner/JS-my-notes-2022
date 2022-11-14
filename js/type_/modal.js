const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.btn--close-modal');
const modalTitle = document.querySelector('.modal-h2');
const modalText = document.querySelector('.modal-p');

export const openModal = function (
  title = 'Hello!',
  msg = `Welcome to the <span class="bold">type_</span> , have fun!`
) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  modalTitle.innerHTML = title;
  modalText.innerHTML = msg;
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !modal.classList.contains('hidden')) {
    closeModal();
    console.log('close');
  }
});

export const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModalBtn.addEventListener('click', closeModal);

openModal();
