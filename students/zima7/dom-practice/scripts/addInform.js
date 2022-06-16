import makeHtmlElement from './makeHtmlElement.js';
import { content } from './content.js';

export default function addInform(propName) {
  const inform = document.getElementById('inform');
  inform.innerHTML = '';
  const $informImg = new makeHtmlElement('div', '', ['inform__img'], {});
  const $contentImage = new makeHtmlElement('img', '', ['content__image'], {
    src: content[propName].imgSrc,
    alt: `picture of ${content[propName].title}`,
  });
  $informImg.appendChild($contentImage);
  inform.appendChild($informImg);

  const $informInner = new makeHtmlElement('div', '', ['inform__inner'], {});
  const $informTitle = new makeHtmlElement('h2', content[propName].title, ['inform__title'], {});
  $informInner.appendChild($informTitle);

  const $informDescription = new makeHtmlElement('div', '', ['inform__description'], {});
  const $description = new makeHtmlElement('p', content[propName].description, ['description'], {});
  $informDescription.appendChild($description);
  $informInner.appendChild($informDescription);
  inform.appendChild($informInner);
}
