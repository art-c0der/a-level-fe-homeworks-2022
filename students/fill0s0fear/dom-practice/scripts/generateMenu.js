import makeHtmlElement from './makeHtmlElement.js';

function createListItem(ascendancyContent, currentIndex) {
  const $item = new makeHtmlElement('li', '', ['navigation_item', 'item'], {});
  const $link = new makeHtmlElement('a', ascendancyContent.title, ['navigation_link'], {
    href: ascendancyContent.id.replace(' ', '-').toLowerCase(),
    'data-number': currentIndex,
  });
  $item.appendChild($link);

  return $item;
}

export default function generateMenu(data) {
  const list = document.querySelector('.navigation_list');
  Object.entries(data).forEach(([key, value]) => {
    list.appendChild(createListItem(value, key));
  });
}
