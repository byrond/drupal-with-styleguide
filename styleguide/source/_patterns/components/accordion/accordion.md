---
title: 'Accordion'
---

This component is based on the [accordion example](https://inclusive-components.design/collapsible-sections/) from **inclusive-components.design**.

### Description
The accordion component allows users to toggle the visibility of content by clicking on the content's label.

### User Behavior
All accordion content is hidden from users and screen readers on page load. Users can navigate to each accordion label to identify and decide if they'd like to read its content. The user can click on the label or press the `tab` key on their keyboard to view the content. The user can then click again to hide the content.

#### Hidden Attribute
The `hidden` attribute is used to keep a user from seeing an element unless that user interacts with the corresponding label to the element. JavaScript then removes the `hidden` attribute, and make the element visible.

### Variables
~~~
accordion: array / required
  label: string / required
  desc: string / required
~~~
