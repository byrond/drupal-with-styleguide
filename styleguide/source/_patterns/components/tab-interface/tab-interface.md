---
title: 'Tab Interface'
---

This component is based on the [tab interface example](https://inclusive-components.design/tabbed-interfaces/#truetabbedinterfaces) from **inclusive-components.design**.

### Description
The tab interface component is used to organize and prioritize page content by showing and hiding certain sections. Tabs provide control for the user to navigate between different sections of the component by clicking on labels or using their keyboard arrow keys.

### Keyboard Behavior
Most tab interfaces use the tab key to navigate between labels before advancing to tab content. This is problematic behavior and not a natural progression for screen readers. Ideally, once you have selected a label you should immediately be taken to the corresponding content.

This is why we have implemented the left and right arrow keys as designated controls for navigating labels. The tab key is reserved for its intended use, navigating page content.

### When to use tabs
* Tabs are often a useful solution when you don’t want to create additional pages.
* You can use tabs to chunk up content of equal importance. For example, you’ll often see them on an e-commerce product page to show different aspects of a product.

### Do's
* Use simple, short, plain language labels for the tab titles.
* Try not to make too many tabs (4-5 max).
* Use tabs for content of equal hierarchy (ex: overview, tech specs, FAQs ).
* Use for content that doesn’t have to be ordered. Meaning, all the content is of equal relevance, and not order dependent.
* Try to format content the same within each tab when possible. (Ex: paragraph length, similar formatting etc).

### Don'ts
* When tab component is mid page, try to avoid varying height from tab to tab. It can push the content below down the screen creating a visual disruption when the content moves. (NOTE: Less of a problem if tab component is at bottom of page).
* Don’t use tabs for content that needs to be compared.
* Don’t use for content that should be ordered (1, 2, 3 etc).

### Variables
~~~
tablist: array / required
  label: string / required
  desc: string / required
~~~
