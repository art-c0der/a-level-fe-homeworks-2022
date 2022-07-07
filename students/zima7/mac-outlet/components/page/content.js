import makeFormComponents from "../formComponent.js";
import sentRequest from "../../scripts/request.js";

export function Card(imgUrl, name, inStock, price, reviews, storage) {
  const $contentCard = makeFormComponents("div", "", ["content_card"], {});
  const $cardBody = makeFormComponents("div", "", ["card_body"], {});
  const $cardLikes = makeFormComponents("div", "", ["card_likes"], {});
  $cardLikes.onclick = function (event) {
    event.target.classList.toggle("active");
  };
  const $cardImg = makeFormComponents("img", "", ["card_img"], {
    src: `${imgUrl}`,
    alt: "#",
  });
  const $cardInner = makeFormComponents("div", "", ["card_inner"], {});
  const $elementTitile = makeFormComponents(
    "h2",
    `${name}`,
    ["element_titile"],
    {}
  );
  const $cardTrue = makeFormComponents("div", "", ["card_true"], {});
  let $true;
  if (inStock === 0) {
    $true = makeFormComponents("div", "", ["true", "false"], {});
  } else {
    $true = makeFormComponents("div", "", ["true"], {});
  }
  const $cardDescriptionFirst = makeFormComponents(
    "p",
    `${inStock} left in stock`,
    ["card_description"],
    {}
  );
  const $cardDescriptionTwo = makeFormComponents(
    "p",
    `Price: ${price} $`,
    ["card_description"],
    {}
  );
  let $cardButton;
  if (inStock === 0) {
    $cardButton = makeFormComponents(
      "a",
      "Add to cart",
      ["card_button", "order_false"],
      {
        href: "#",
      }
    );
  } else {
    $cardButton = makeFormComponents("a", "Add to cart", ["card_button"], {
      href: "#",
    });
  }
  $cardInner.appendChild($elementTitile);
  $cardInner.appendChild($cardTrue);
  $cardTrue.appendChild($true);
  $cardTrue.appendChild($cardDescriptionFirst);
  $cardInner.appendChild($cardDescriptionTwo);
  $cardInner.appendChild($cardButton);
  const $cardLike = makeFormComponents("div", "", ["card_like"], {});
  const $followLikes = makeFormComponents("div", "", ["follow_likes"], {});
  $cardLike.appendChild($followLikes);
  const $likeFllow = makeFormComponents("div", "", ["like_follow"], {});
  const $followDescriptionOne = makeFormComponents(
    "p",
    `<b>${reviews}% </b>Positive reviews`,
    ["follow_description"],
    {}
  );
  const $followDescriptionTwo = makeFormComponents(
    "p",
    "Above avarage",
    ["follow_description"],
    {}
  );
  $likeFllow.appendChild($followDescriptionOne);
  $likeFllow.appendChild($followDescriptionTwo);
  $cardLike.appendChild($likeFllow);
  const $likeOrders = makeFormComponents("div", "", ["like_orders"], {});
  const $ordersDescriptionOne = makeFormComponents(
    "p",
    `<b>${storage}</b>`,
    ["orders_description"],
    {}
  );
  const $ordersDescriptionTwo = makeFormComponents(
    "p",
    "orders",
    ["orders_description"],
    {}
  );
  $likeOrders.appendChild($ordersDescriptionOne);
  $likeOrders.appendChild($ordersDescriptionTwo);
  $cardLike.appendChild($likeOrders);
  $contentCard.appendChild($cardBody);
  $cardBody.appendChild($cardLikes);
  $cardBody.appendChild($cardImg);
  $cardBody.appendChild($cardInner);
  $cardBody.appendChild($cardLike);
  return $contentCard;
}

export default function Content() {
  const $content = makeFormComponents("div", "", ["content"], {
    id: "content",
  });
  sentRequest("https://shop-items-server.herokuapp.com/")
    .then((response) => JSON.parse(response))
    .then((items) => {
      for (let item of items.slice(0, 6)) {
        $content.appendChild(
          Card(
            item.imgUrl,
            item.name,
            item.orderInfo.inStock,
            item.price,
            item.orderInfo.reviews,
            item.storage
          )
        );
      }
    });

  return $content;
}

export function getContentByItemName(name) {
  let $content = document.getElementById("content");
  $content.innerHTML = "";

  sentRequest("https://shop-items-server.herokuapp.com/")
    .then((response) => JSON.parse(response))
    .then((items) => {
      const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );
      for (let filteredItem of filteredItems) {
        $content.appendChild(
          Card(
            filteredItem.imgUrl,
            filteredItem.name,
            filteredItem.orderInfo.inStock,
            filteredItem.price,
            filteredItem.orderInfo.reviews,
            filteredItem.storage
          )
        );
      }
    });

  return $content;
}
