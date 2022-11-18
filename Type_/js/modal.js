const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.btn--close-modal');
const modalTitle = document.querySelector('.modal-h2');
const modalText = document.querySelector('.modal-p');
export const openModal = function (
  title = 'Hello!',
  msg = `Welcome to the type_`
) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  modalTitle.innerHTML = title;
  modalText.innerHTML = msg;
};
openModal();

export const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
