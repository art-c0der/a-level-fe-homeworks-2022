import { content } from "./scripts/content.js";
import generateMenu from "./scripts/generateMenu.js";
import addInform from "./scripts/addInform.js";

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".navigation_pages");

const list = document.querySelector(".navigation_list");
list.addEventListener("click", function (event) {
  event.preventDefault();
  if (!event.target.classList.contains("navigation_link")) return;

  const linkNumber = event.target.dataset.number;

  addInform(linkNumber);
  menuBtn.classList.remove("active");
  menu.classList.remove("active");
});

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

generateMenu(content);
