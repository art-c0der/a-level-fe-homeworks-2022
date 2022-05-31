const DATA = [
  {
    id: 1,
    name: "Цепляющиеся",
    image1: "./img/clinging/clematis.png",
    image2: "./img/clinging/lathyrus.png",
    classes: {
      image1: "main--content__image--clematis",
      image2: "main--content__image--lathyrus",
      types: "main--content__text__clinging--types main--content__text__left",
      info: "main--content__text__clinging--info",
    },
    types: `Растения данного вида: <li>клематис (Clematis)</li> <li>пассифлора (Passiflora)</li> <li>чина (Lathyrus)</li> <li>виноград (Vitis)</li> <li>лагенария (Lagenaria)</li>`,
    info: `Длинными черешками листьев или спиралевидными органами крепления (например, усами у чины) цепляющиеся лианы обвивают, как вьющиеся лианы стеблями, опору, которая им необходима`,
  },
  {
    id: 2,
    name: "Лазящие",
    image1: "./img/climbing/hedera.png",
    image2: false,
    classes: {
      image1: "main--content__image--hedera",
      types: "main--content__text__climbing--types",
      info: "main--content__text__climbing--info main--content__text__left",
    },
    types:
      "Растения данного вида: <li>плющ (Hedera)</li> <li>девичий виноград (Parthenocissus)</li> <li>гортензия черешковая (Hydrangea petiolaris)</li> <li>кампсис (Campsis)</li> <li>бересклет Форчуна (Euonymus fortunei)</li>",
    info: "Эта группа растений вообще обходится без опоры, поскольку данные лианы крепятся к вертикальной поверхности воздушными корнями или аппрессориями (специальными органами прикрепления типа присосок)",
  },
  {
    id: 3,
    name: "Вьющиеся",
    image1: "./img/curly/wisteria.png",
    image2: "./img/curly/lonicera.png",
    classes: {
      image1: "main--content__image--wisteria",
      image2: "main--content__image--lonicera",
      types: "main--content__text__curly--types",
      info: "main--content__text__curly--info",
    },
    types:
      "Растения данного вида: <li>глициния (Wisteria)</li> <li>жимолость (Lonicera)</li> <li>хмель (Humulus)</li> <li>кирказон (Aristolochia)</li> <li>акебия (Akebia)</li>",
    info: "Это вьющиеся представители флоры, которые не могут взобраться на высоту без опоры. Они обвивают ее и закрепляются на конструкции своими побегами.",
  },
  {
    id: 4,
    name: "Опирающиеся",
    image1: "./img/leaning/jasminum.png",
    image2: "./img/leaning/rosa.png",
    classes: {
      image1: "main--content__image--clematis",
      image2: "main--content__image--lathyrus",
      types: "main--content__text__leaning--types main--content__text__left",
      info: "main--content__text__leaning--info",
    },
    types:
      "Растения данного вида: <li>плетистая роза (Rosa)</li> <li>жасмин голоцветковый (Jasminum nudiflorum)</li> <li>ежевика кустарниковая (Rubus fruticosus)</li>",
    info: "Поскольку у полулиан нет органов крепления в классическом понимании этого слова, и сами они не способны обвивать опору, их гибкие побеги необходимо регулярно прикреплять к ней (с помощью колючек, шипов, волосков или торчащих боковых побегов они просто держатся за опору, но никак не взбираются по ней)",
  },
];

const nav = document.querySelector('#nav');
const contentWrapper = document.querySelector('#contentWrapper');
const navbutton = document.querySelector("#navbutton");

const createNavElement = (name) => {
  const navElement = `
  <li>
    <a href="#${name.toLowerCase().replace(' ', '-')}">${name}</a> 
  </li>
  `;
  return navElement;
};

const generateNavElements = (data) => {
  let navContent = '';
  data.forEach((plant) => {
    navContent += createNavElement(plant.name);
  });
  nav.innerHTML = navContent;
};

const filterData = (data, searchName) => {
  return data.filter((plant) => {
    if (plant.name === searchName) return plant;
  });
};

const createContent = (plant) => {
  let content;
  if (plant.image2) {
    content = `
    <a href="index.html" class="main--content__close"></a> 
    <img class="${plant.classes.image1}" src="${plant.image1}" alt="${plant.name}" />
    <img class="${plant.classes.image2}" src="${plant.image2}" alt="${plant.name}" />
    <ul class="main--content__text ${plant.classes.types}">${plant.types}</ul>
    <p class="main--content__text ${plant.classes.info}">${plant.info}</p>
  `;
  } else {
    content = `
    <a href="index.html" class="main--content__close"></a> 
    <img class="${plant.classes.image1}" src="${plant.image1}" alt="${plant.name}" />
    <ul class="main--content__text ${plant.classes.types}">${plant.types}</ul>
    <p class="main--content__text ${plant.classes.info}">${plant.info}</p>
  `;
  }
  return content;
};


nav.addEventListener('click', (e) => {
  const linkName = e.target.textContent;
  if(document.getElementsByClassName("main--navigation__link__active")[0]){
  document
    .getElementsByClassName("main--navigation__link__active")[0]
    .classList.remove("main--navigation__link__active");
  }
  e.target.className = "main--navigation__link__active";
  const result = filterData(DATA, linkName);
  navbutton.innerHTML = e.target.textContent;
  contentWrapper.innerHTML = createContent(result[0]);
  nav.classList.remove("main--navigation__active");
});

generateNavElements(DATA);

navbutton.addEventListener("click", (e) => {
  if (nav.classList.contains("main--navigation__active")){
    nav.classList.remove("main--navigation__active");
  }
  else{
    nav.classList.add("main--navigation__active");
  }
});