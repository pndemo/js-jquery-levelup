/*
From the DOM point of view, the root document element is document.documentElement. That element
corresponds to <html> and has geometry properties described in the previous chapter. For some
cases we can use it, but there are additional methods and peculiarities important enough to
consider.
*/

/*
Width/height of the window - Properties clientWidth/clientHeight of document.documentElement.
*/

/*
Width/height of the document - Theoretically, as the root document element is
documentElement.clientWidth/Height, and it encloses all the content, we could measure its full size
as documentElement.scrollWidth/scrollHeight. These properties work well for regular elements. But
for the whole page these properties do not work as intended. In Chrome/Safari/Opera if there’s no
scroll, then documentElement.scrollHeight may be even less than documentElement.clientHeight. To
have a reliable result on the full document height, we should take the maximum of these properties.
*/

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
  
alert('Full document height, with scrolled out part: ' + scrollHeight);

/*
Regular elements have their current scroll state in elem.scrollLeft/scrollTop. Most browsers provide
documentElement.scrollLeft/Top for the document scroll, but Chrome/Safari/Opera have bugs and we
should use document.body instead of document.documentElement there. Luckily, we don’t have to
remember these peculiarities at all, because of the special properties
window.pageXOffset/pageYOffset.
*/
alert('Current scroll from the top: ' + window.pageYOffset);
alert('Current scroll from the left: ' + window.pageXOffset);

/*
The method scrollBy(x,y) scrolls the page relative to its current position. For instance,
scrollBy(0,10) scrolls the page 10px down.

The method scrollTo(pageX,pageY) scrolls the page relative to the document’s top-left corner. It’s
like setting scrollLeft/scrollTop. To scroll to the very beginning, we can use scrollTo(0,0).
*/

/*
The call to elem.scrollIntoView(top) scrolls the page to make elem visible. If top=true
(that’s the default), then the page will be scrolled to make elem appear on the top of the window.
The upper edge of the element is aligned with the window top. If top=false, then the page scrolls to
make elem appear at the bottom. The bottom edge of the element is aligned with the window bottom.
*/

/*
Sometimes we need to make the document “unscrollable”. For instance, when we need to cover it with a
large message requiring immediate attention, and we want the visitor to interact with that message,
not with the document. To make the document unscrollable, it’s enough to set
document.body.style.overflow = "hidden".
*/
