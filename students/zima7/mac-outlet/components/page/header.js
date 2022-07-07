import makeFormComponents from "../formComponent.js";
import makeSlider from "./makeSlider.js";

export default function Header() {
  const $header = makeFormComponents("header", "", ["header"], {});
  const $logo = makeFormComponents("div", "", ["logo"], {});
  const $imgLogo = makeFormComponents("img", "", [], {
    src: "./image/logo.png",
    alt: "#",
  });
  $logo.appendChild($imgLogo);
  $header.appendChild($logo);
  $header.appendChild(makeSlider());
  return $header;
}
