import makeFormComponents from "../formComponent.js";
import { getContentByItemName } from "./content.js";

export default function Search() {
  const $search = makeFormComponents("div", "", ["search"], {});
  const $wreperInput = makeFormComponents("div", "", ["wreper_input"], {});
  const $searchInput = makeFormComponents("input", "", ["search_input"], {
    id: "search_input",
    type: "text",
    placeholder: "Enter device name...",
  });
  $searchInput.addEventListener("input", function (event) {
    getContentByItemName(event.target.value);
  });
  $wreperInput.appendChild($searchInput);
  $search.appendChild($wreperInput);
  return $search;
}
