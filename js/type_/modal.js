const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.btn--close-modal');
const modalTitle = document.querySelector('.modal-h2');
const modalText = document.querySelector('.modal-p');

const openModal = function (
  title = 'Hello!',
  msg = `Welcome to the 'type_', have fun!`
) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  modalTitle.textContent = title;
  modalText.textContent = msg;
}

document.addEventListener('keydown', function (e) {
    console.log(e.key);
    console.log(modal.classList);
    if (e.key === 'Enter' && !modal.classList.contains('hidden')) {
      closeModal();
      console.log('close');
    }
  });

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModalBtn.addEventListener('click', closeModal);

openModal('Hello!', `Welcome to the 'type_', Have fun!`);
