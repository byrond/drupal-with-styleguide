// Accordion based on https://inclusive-components.design/collapsible-sections/
const accordionTitle = document.querySelectorAll('.accordion .accordion__title');

if (accordionTitle) {
  Array.prototype.forEach.call(accordionTitle, (t) => {
    const btn = t.querySelector('button');
    const target = t.nextElementSibling;

    btn.onclick = () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      btn.setAttribute('aria-expanded', !expanded);
      target.hidden = expanded;
    };
  });
}
