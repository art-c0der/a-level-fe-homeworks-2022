import { HOME_CONTENT, EPISODES } from "./items.js";

const contentDiv = document.getElementById("content");
const homeBtn = document.getElementById("logo-container");
const menuToggle = document.getElementById("menu__toggle");

function loadHomeContent(contentHome) {
  contentDiv.innerHTML = `
    <h2>${contentHome.title}</h2>
    <p>${contentHome.description}</p>`;
}

loadHomeContent(HOME_CONTENT);

homeBtn.addEventListener("click", () => {
  loadHomeContent(HOME_CONTENT);
});

const loadMainContent = (propName) => {
  const content = document.getElementById('content');
  menuToggle.click();
  content.innerHTML = `
  <div class = "imageDiv">
    <img class="content__image" src="${EPISODES[propName].imgSrc}" alt="picture of ${EPISODES[propName].title}">
  </div>
  <div class="textDiv">
  <h2 class="content__title">${EPISODES[propName].title}</h2>
  <p class="content__description">${EPISODES[propName].description}</p>
  </div>`;
};

const list = document.querySelector('.nav-box');

list.addEventListener('click', (event) => {
  if (!event.target.classList.contains('nav-item')) return;

  const linkNumber = event.target.dataset.number;

  loadMainContent(linkNumber);
});
