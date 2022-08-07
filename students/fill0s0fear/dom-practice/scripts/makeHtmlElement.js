export default function makeHtmlElement(element, innerHTML, classes, attributes) {
  const createElement = document.createElement(element);
  if (innerHTML !== '' && innerHTML !== null) {
    createElement.innerHTML = innerHTML;
  }
  for (const type of classes) {
    createElement.classList.add(type);
  }
  for (const key in attributes) {
    createElement.setAttribute(key, attributes[key]);
  }
  return createElement;
}
