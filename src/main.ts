import list, { List } from "./list";
import { createAccordion, createAccordionContent } from "./accordion";

const app = document.querySelector("#app");

const ul = document.createElement("ul");

const h1 = document.createElement("h1");

h1.append(list.title);

app?.append(h1, ul);

list.subItems?.forEach((subItem) => {
  renderSubItems(subItem, ul);
});

function renderSubItems(list: List, ul: HTMLUListElement) {
  const li = document.createElement("li");
  li.append(list.title);

  ul.append(li);

  if (list.subItems?.length) {
    const ul = document.createElement("ul");

    li.append(ul);

    list.subItems.forEach((item) => renderSubItems(item, ul));
  }
}
