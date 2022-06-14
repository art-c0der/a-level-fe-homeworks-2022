import {hamburger, navMenu, bannerRow} from "./cosntants.js"

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navMenu.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })

navMenu.addEventListener("click", (event) => {
  let bannerNumber = event.target.dataset.number;
  bannerRow.forEach((element) => {
    element.classList.remove("show");
    if (element.classList.contains(`${bannerNumber}-banner`)) {
      element.classList.add("show");
    }
  });
});
