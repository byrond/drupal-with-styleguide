---
title: 'Pager'
---
#### Description
The pager component is used to navigate long lists of content. It provides controls for a user to navigate to first, prev, next, last, or specific page numbers. There is an active state that is used to indicate the current page a user is on.

#### Variables
~~~
first:
  text: string / optional
  href: href / required
previous:
  text: string / optional
  href: href / required
next:
  text: string / optional
  href: href / required
last:
  text: string / optional
  href: href / required
pages:
  text: number / required
  href: href / required
  active: state / optional
  attributes: sting / optional
ellipses:
  previous: state / optional
  next: state / optional
current: number / required
~~~

