const KINGDOM = [
  {
    id: 1,
    name: "Bacteria",
    img: "./img/bacteria.png",
    description: "They consist of one cell and do not have a nucleus.",
  },
  {
    id: 2,
    name: "Plants",
    img: "./img/plants.png",
    description:
      "They have chlorophyll and form organic substances in the light, releasing oxygen.",
  },
  {
    id: 3,
    name: "Animals",
    img: "./img/animals.png",
    description:
      "They feed on ready-made organic substances and are able to move.",
  },
  {
    id: 4,
    name: "Mushrooms",
    img: "./img/mushrooms.png",
    description:
      "They combine signs of plants and animals, feed on ready-made organic substances.",
  },
];

const nav = document.querySelector("#nav-list");
const contentWrapper = document.querySelector(".content");
const burger = document.querySelector("#btn-menu");

burger.addEventListener("click", () => {
  nav.classList.toggle("visible");
  contentWrapper.classList.toggle("hidden");
});

const createNavElement = (name) => {
  const navElement = `
  <li class="nav__element">${name}</li>`;
  return navElement;
};

const generateNavElements = (data) => {
  let navContent = "";

  data.forEach((kingdom) => {
    navContent += createNavElement(kingdom.name);
  });
  nav.innerHTML = navContent;
};

const filterData = (data, searchName) => {
  return data.filter((kingdom) => {
    if (kingdom.name === searchName) return kingdom;
  });
};
const createContent = (kingdom) => {
  const content = `
  <img class="kingdom__image" src="${kingdom.img}" alt="${kingdom.name}" avatar />
    <div class="kingdom__title">
      <h2>${kingdom.name}</h2>
      <div class="description"><p>${kingdom.description}</p></div>
    </div>`;
  return content;
};
nav.addEventListener("click", (e) => {
  const linkName = e.target.textContent;
  const result = filterData(KINGDOM, linkName);
  contentWrapper.innerHTML = createContent(result[0]);
});
generateNavElements(KINGDOM);
