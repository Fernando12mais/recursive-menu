export const createAccordion = () => {
  const ul = document.createElement("ul");
  ul.classList.add("accordion");

  ul.onclick = (e) => {
    Array.from(ul.children).forEach((child) => {
      if (child.className.includes("accordion-content"))
        child.classList.toggle("show");
    });
    ul.classList.toggle("active");
  };

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
