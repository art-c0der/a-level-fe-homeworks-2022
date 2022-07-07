import makeFormComponents from "../formComponent.js";

export default function makeSlider() {
  const $slider = makeFormComponents("div", "", ["slider"], {});
  const $slideOne = makeFormComponents("div", "", ["slide"], {});
  const $slideOneImg = makeFormComponents("img", "", ["slide_img"], {
    src: "./image/slide/ipad_air_banner.png",
    alt: "#",
  });
  $slideOne.appendChild($slideOneImg);
  const $slideOneInner = makeFormComponents("div", "", ["slide_inner"], {});
  const $slideOneTitle = makeFormComponents(
    "h1",
    "IPad Air",
    ["slide_title"],
    {}
  );
  const $slideOneButton = makeFormComponents(
    "a",
    "Add to cart",
    ["slide_button"],
    { href: "#" }
  );
  $slideOneInner.appendChild($slideOneTitle);
  $slideOneInner.appendChild($slideOneButton);
  $slideOne.appendChild($slideOneInner);
  const $slideTwo = makeFormComponents("div", "", ["slide"], {});
  const $slideTwoImg = makeFormComponents("img", "", ["slide_img"], {
    src: "./image/slide/airpods_pro_banner.png",
    alt: "#",
  });
  $slideTwo.appendChild($slideTwoImg);
  const $slideTwoInner = makeFormComponents("div", "", ["slide_inner"], {});
  const $slideTwoTitle = makeFormComponents(
    "h1",
    "AirPods Pro",
    ["slide_title"],
    {}
  );
  const $slideTwoButton = makeFormComponents(
    "a",
    "Add to cart",
    ["slide_button"],
    { href: "#" }
  );
  $slideTwoInner.appendChild($slideTwoTitle);
  $slideTwoInner.appendChild($slideTwoButton);
  $slideTwo.appendChild($slideTwoInner);
  const $slideThree = makeFormComponents("div", "", ["slide"], {});
  const $slideThreeImg = makeFormComponents("img", "", ["slide_img"], {
    src: "./image/slide/mac_book_banner.png",
    alt: "#",
  });
  $slideThree.appendChild($slideThreeImg);
  const $slideThreeInner = makeFormComponents("div", "", ["slide_inner"], {});
  const $slideThreeTitle = makeFormComponents(
    "h1",
    "MacBook Pro 16",
    ["slide_title"],
    {}
  );
  const $slideThreeButton = makeFormComponents(
    "a",
    "Add to cart",
    ["slide_button"],
    { href: "#" }
  );
  $slideThreeInner.appendChild($slideThreeTitle);
  $slideThreeInner.appendChild($slideThreeButton);
  $slideThree.appendChild($slideThreeInner);
  const $controlButtonNext = makeFormComponents(
    "button",
    ">",
    ["btn-slider", "btn-slider-next"],
    {}
  );
  const $controlButtonPrev = makeFormComponents(
    "button",
    "<",
    ["btn-slider", "btn-slider-prev"],
    {}
  );
  $slider.appendChild($slideOne);
  $slider.appendChild($slideTwo);
  $slider.appendChild($slideThree);
  $slider.appendChild($controlButtonNext);
  $slider.appendChild($controlButtonPrev);
  return $slider;
}
