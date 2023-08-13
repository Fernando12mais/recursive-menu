export function showHideElements(child: Element) {
  const childHasAccordionContent =
    child.className.includes("accordion-content");
  if (childHasAccordionContent) {
    child.classList.toggle("show");

    return;
  }

  if (child.children.length) {
    Array.from(child.children).forEach((item) => showHideElements(item));
  }
}

export const createAccordion = () => {
  const ul = document.createElement("ul");
  ul.classList.add("accordion");

  return ul;
};

export const createAccordionContent = () => {
  const accordionContent = document.createElement("li");
  accordionContent.classList.add("accordion-content");
  accordionContent.onclick = (e) => {
    e.stopPropagation();
  };

  return accordionContent;
};
