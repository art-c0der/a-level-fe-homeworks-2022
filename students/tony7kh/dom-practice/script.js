import { navMenu, bannerRow } from '/constants.js';

navMenu.addEventListener('click', (event) => {
  const bannerNumber = event.target.dataset.number;
  bannerRow.forEach((element) => {
    element.classList.remove('show');
    if (element.classList.contains(`${bannerNumber}-banner`)) {
      element.classList.add('show');
    }
  });
});
