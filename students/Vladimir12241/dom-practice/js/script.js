/** @format */

import { title, turtles } from "./persons.js";

class App {
  constructor() {
    this.favicon = document.querySelector(".logo-link");
    this.menu = document.querySelector("#menu-toggle");

    this.favicon.addEventListener("click", (e) => {
      new Content(title);
      this.isActive("");
      return;
    });
    this.menu.addEventListener("change", (e) => {
      this.navigationListHiden();
    });
  }

  navigationListHiden() {
    if (document.getElementById("menu-toggle").checked) {
      document.getElementById("nav-list").classList.remove("nav-list-hiden");
    } else {
      document.getElementById("nav-list").classList.add("nav-list-hiden");
    }
  }

  router() {
    let hash = window.location.hash.split("/");
    hash = hash[hash.length - 1];

    if (hash === "") {
      new Content(title);
      turtles.map((item) => new Navigation(item));
    } else {
      turtles.map((item) => {
        if (item.hashName === hash) {
          new Content(item);
        }
        new Navigation(item);
      });
    }
    this.isActive();
  }

  isActive(hash) {
    let logo = this.favicon.childNodes[1];
    let navMenu = document.getElementById("nav-list").childNodes;
    if (hash === undefined) {
      let windowHash = window.location.hash.split("/");
      windowHash = windowHash[windowHash.length - 1];
      if (windowHash === "") {
        logo.classList.add("is-active");
      } else {
        turtles.map((item) => {
          if (item.hashName === windowHash) {
            navMenu[item.id].firstChild.classList.add("is-active");
          }
        });
      }
    } else {
      if (hash === "") {
        logo.classList.add("is-active");
        for (let i = 1; i < navMenu.length; i++) {
          navMenu[i].firstChild.classList.remove("is-active");
        }
      } else {
        logo.classList.remove("is-active");
        turtles.map((item) => {
          if (item.hashName === hash) {
            navMenu[item.id].firstChild.classList.add("is-active");
          } else {
            navMenu[item.id].firstChild.classList.remove("is-active");
          }
        });
      }
    }
  }
}

class Navigation {
  constructor({ id, name, hashName }) {
    this.id = id;
    this.name = name;
    this.hash = hashName;

    this.listItem = document.createElement("li");
    this.listLink = document.createElement("a");
    this.listItem.appendChild(this.listLink);

    this.listItem.classList = "list-item";
    this.listLink.href = ` #/${this.hash}`;
    this.listLink.innerHTML = `${this.name}`;

    this.print = document.querySelector("#nav-list");
    this.print.appendChild(this.listItem);

    this.listLink.addEventListener("click", (e) => {
      turtles.map((item) => {
        if (item.id === this.id) {
          document.getElementById("menu-toggle").checked = false;
          new Content(item);
          app.isActive(this.hash);
        }
      });
    });
  }
}

class Content {
  constructor({ name, bandage, weapon, about, img }) {
    this.name = name;
    this.bandage = bandage;
    this.weapon = weapon;
    this.text = about;
    this.img = img;

    this.parent = document.querySelector("#main-content");
    this.picture = document.createElement("img");
    this.imageBox = document.createElement("div");
    this.textBox = document.createElement("div");
    this.picture.src = this.img;
    this.picture.alt = this.name;
    this.imageBox.appendChild(this.picture);

    this.imageBox.classList = "img-box";
    this.textBox.classList = "text-box";

    this.print();
  }

  print() {
    this.preload();
    if (this.bandage !== "" && this.weapon !== "") {
      this.picture.classList = "img-peronages";
      this.parent.classList.remove("main-content-wrap");
      this.textBox.innerHTML = `<h1>${this.name}</h1>
								<p>${this.text}</p>
								<h2>Колір пов'язки:</h2>
								<p><strong>${this.bandage}</strong></p>
								<h2>Зброя:</h2>
								<p><strong>${this.weapon}</strong></p>`;
    } else {
      this.parent.classList.add("main-content-wrap");
      this.picture.classList = "img-about-all";
      this.textBox.innerHTML = `<h1>${this.name}</h1>
								<p>${this.text}</p>`;
    }

    this.parent.innerHTML = "";
    this.parent.appendChild(this.imageBox);
    this.parent.appendChild(this.textBox);
    app.navigationListHiden();
  }

  preload() {
    document.getElementById("main-content").classList.add("while-preload");
    document.getElementById("main").classList.remove("loaded");
    window.setTimeout(function () {
      document.getElementById("main").classList.add("loaded");
      document.getElementById("main-content").classList.remove("while-preload");
    }, 500);
  }
}

const app = new App();
app.router();
