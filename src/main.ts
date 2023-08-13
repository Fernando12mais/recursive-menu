import list, { List } from "./list";
import {
  createAccordion,
  createAccordionContent,
  showHideElements,
} from "./accordion";

const app = document.querySelector("#app");

const h1 = document.createElement("h1");

h1.append(list.title);

app?.append(h1);

list.subItems?.forEach((subItem) => {
  const accordion = createAccordion();
  renderSubItems(subItem, accordion);

  app?.append(accordion);
});

function renderSubItems(list: List, accordion: HTMLUListElement) {
  const hasSubItems = !!list.subItems?.length;

  const li = document.createElement("li");
  li.append(list.title);

  accordion.append(li);

  if (!hasSubItems) return;

  const accordionContent = createAccordionContent();

  const newAccordion = createAccordion();

  accordionContent.append(newAccordion);

  li.append(accordionContent);

  li.onclick = (e) => {
    e.stopPropagation();

    showHideElements(li);

    li.classList.toggle("active");
  };

  list.subItems?.forEach((item) => renderSubItems(item, newAccordion));
}
