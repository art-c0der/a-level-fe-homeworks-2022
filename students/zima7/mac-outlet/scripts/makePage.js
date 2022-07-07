import Header from "../components/page/header.js";
import Search from "../components/page/search.js";
import Content from "../components/page/content.js";
import Slider from "./slider.js";

export default function createPage() {
  document.body.appendChild(Header());
  Slider();
  document.body.appendChild(Search());
  document.body.appendChild(Content());
}
