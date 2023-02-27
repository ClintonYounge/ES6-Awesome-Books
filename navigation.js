const listSection = document.querySelector('.list-section');
const addNewSection = document.querySelector('.add-new-section');
const contactSection = document.querySelector('.contact-section');
const listLink = document.querySelector('.link1');
const addNewLink = document.querySelector('.link2');
const contactLink = document.querySelector('.link3');

listLink.addEventListener('click', () => {
  listSection.style.display = 'block';
  addNewSection.style.display = 'none';
  contactSection.style.display = 'none';
});

addNewLink.addEventListener('click', () => {
  listSection.style.display = 'none';
  addNewSection.style.display = 'block';
  contactSection.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  listSection.style.display = 'none';
  addNewSection.style.display = 'none';
  contactSection.style.display = 'block';
});

const navButtons = document.querySelectorAll('.link-item');

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove the active class from all buttons
    navButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    // Add the active class to the clicked button
    button.classList.add('active');
  });
});

document.querySelector('.date-time').textContent = Date();