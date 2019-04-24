/*
There are many JavaScript properties that allow us to read information about element width, height
and other geometry features. We often need them when moving or positioning elements in JavaScript,
to correctly calculate coordinates. Element properties that provide width, height and other geometry
are always numbers. They are assumed to be in pixels. They are many properties, it’s difficult to
fit them all in the single picture, but their values are simple and easy to understand.

1) offsetParent, offsetLeft/Top - These properties are rarely needed, but still they are the
“most outer” geometry properties. In most practical cases we can use offsetParent to get the nearest
CSS-positioned ancestor. And offsetLeft/offsetTop provide x/y coordinates relative to its upper-left
corner.
2) offsetWidth/Height - These two properties are the simplest ones. They provide the “outer”
width/height of the element. Or, in other words, its full size including borders.
3) clientTop/Left - Inside the element we have the borders. To measure them, there are properties
clientTop and clientLeft.
4) clientWidth/Height - These properties provide the size of the area inside the element borders.
They include the content width together with paddings, but without the scrollbar.
5) scrollWidth/Height - Properties clientWidth/clientHeight only account for the visible part of the
element. Properties scrollWidth/scrollHeight also include the scrolled out (hidden) parts.
6) scrollLeft/scrollTop - Properties scrollLeft/scrollTop are the width/height of the hidden,
scrolled out part of the element.
*/
