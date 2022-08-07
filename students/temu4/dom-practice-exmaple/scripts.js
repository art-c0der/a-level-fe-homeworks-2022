// 1. Page data
const DATA = {
  tank1: {
    id: 'tank1',
    title: 'T-84 Oplot',
    imgSrc: 'images/tank-1.jpeg',
    description:
      'The T-84 is a Ukrainian main battle tank (MBT), a development of the Soviet T-80 main battle tank introduced in 1976. The T-84 was first built in 1994 and entered service in the Ukrainian Armed Forces in 1999. The T-84 is based on the diesel-engined T-80 version, the T-80UD. Its high-performance opposed-piston engine makes it one of the fastest MBTs in the world, with a power-to-weight ratio of about 26 horsepower per tonne (19 kW/t).'
  },
  tank2: {
    id: 'tank2',
    title: 'M1 Abrams',
    imgSrc: 'images/tank-2.png',
    description:
      'The M1 Abrams is a third-generation American main battle tank designed by Chrysler Defense (now General Dynamics Land Systems)[9] and named for General Creighton Abrams. Conceived for modern armored ground warfare and now one of the heaviest tanks in service at nearly 68 short tons (almost 62 metric tons), it introduced several innovative features, including a multifuel turbine engine, sophisticated Chobham composite armor, a computer fire control system, separate ammunition storage in a blow-out compartment, and NBC protection for crew safety. Initial models of the M1 were armed with a licensed-produced 105 mm Royal Ordnance L7 gun, while later variants feature a licensed Rheinmetall 120 mm L/44.'
  },
  tank3: {
    id: 'tank3',
    title: 'Merkava',
    imgSrc: 'images/tank-3.jpeg',
    description:
      'Merkava is a series of main battle tanks used by the Israel Defense Forces and is the backbone of the IDF\'s armored corps. The tank began development in 1970, and its first generation - the Merkava mark 1 - entered official service in 1979.[7] Four main variants have been deployed, with the Merkava mark 4 being the latest version. The Merkava was first used extensively in the 1982 Lebanon War. The name "Merkava" was derived from the IDFs initial development program name.'
  },
  tank4: {
    id: 'tank4',
    title: 'Leopard 2',
    imgSrc: 'images/tank-4.jpeg',
    description:
      'The Leopard 2 is a main battle tank originally developed by Krauss-Maffei in the 1970s for the West German army. The tank first entered service in 1979 and succeeded the earlier Leopard 1 as the main battle tank of the German Army. It is armed with a 120 mm smoothbore cannon, and is powered by a V-12 twin-turbo diesel engine. Various versions have served in the armed forces of Germany and 13 other European countries, as well as several non-European nations, including Canada, Chile, Indonesia and Singapore. The Leopard 2 was used in Kosovo with the German Army, and has seen action in Afghanistan with the Dutch, Danish and Canadian contributions to the International Security Assistance Force, as well as seeing action in Syria with the Turkish Armed Forces.'
  }
};

// 2. Generate menu
const createListItem = (tankData) => `<li class="list__item item">
  <a class="item__link" href="#${tankData.title.replace(' ', '-').toLowerCase()}"
    data-number=${tankData.id}>${tankData.title}
  </a>
</li>`;

const generateMenu = (data) => {
  // 1. find ul
  const list = document.querySelector('.list');
  // 2. create HTML content

  /*
    let content = '';

    Object.values(data).forEach((item) => {
      content += createListItem(item);
    });
  */

  const content = Object.values(data).reduce((acc, item) => {
    acc += createListItem(item);
    return acc;
  }, '');

  // 3. paste HTML into ul
  list.innerHTML = content;
};

// 3. Generate content
const changeContent = (propName) => {
  const content = document.getElementById('content');

  content.innerHTML = `
  <h1 class="content__title">${DATA[propName].title}</h1>
  <img class="content__image" src="${DATA[propName].imgSrc}" alt="picture of ${DATA[propName].title}">
  <p class="content__description">${DATA[propName].description}</p>`;
};

const list = document.querySelector('.list'); // object

list.addEventListener('click', (event) => {
  if (!event.target.classList.contains('item__link')) return;

  const linkNumber = event.target.dataset.number;

  changeContent(linkNumber);
});

// init
generateMenu(DATA);
