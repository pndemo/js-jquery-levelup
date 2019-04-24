/*
To move elements around we should be familiar with coordinates. Most JavaScript methods deal with
one of two coordinate systems:

1) Relative to the window(or another viewport) top/left.
2) Relative to the document top/left.
*/

/*
Window coordinates start at the upper-left corner of the window. The method
elem.getBoundingClientRect() returns window coordinates for elem as an object with properties:

1) top – Y-coordinate for the top element edge,
2) left – X-coordinate for the left element edge,
3) right – X-coordinate for the right element edge,
4) bottom – Y-coordinate for the bottom element edge.

Window coordinates do not take the scrolled out part of the document into account, they are
calculated from the window’s upper-left corner. In other words, when we scroll the page, the element
goes up or down, its window coordinates change. That’s very important. If you scroll the page, the
button position changes, and window coordinates as well. Also:

1) Coordinates may be decimal fractions. That’s normal, internally browser uses them for
calculations. We don’t have to round them when setting to style.position.left/top, the browser is
fine with fractions.
2) Coordinates may be negative. For instance, if the page is scrolled down and the top elem is now
above the window. Then, elem.getBoundingClientRect().top is negative.
3) Some browsers (like Chrome) provide additional properties, width and height of the element that
invoked the method to getBoundingClientRect as the result. We can also get them by subtraction:
height=bottom-top, width=right-left.
*/

/*
The call to document.elementFromPoint(x, y) returns the most nested element at window coordinates
(x, y). For instance, the code below highlights and outputs the tag of the element that is now in
the middle of the window.
*/
let centerX = document.documentElement.clientWidth / 2;
let centerY = document.documentElement.clientHeight / 2;

let elem = document.elementFromPoint(centerX, centerY);

elem.style.background = "red";
alert(elem.tagName);

/*
Most of time we need coordinates to position something. In CSS, to position an element relative to
the viewport we use position:fixed together with left/top (or right/bottom). We can use
getBoundingClientRect to get coordinates of an element, and then to show something near it. For
instance, the function createMessageUnder(elem, html) below shows the message under elem.
*/
let elem = document.getElementById("coords-show-mark");

function createMessageUnder(elem, html) {
    // create message element
    let message = document.createElement('div');
    // better to use a css class for the style here
    message.style.cssText = "position:fixed; color: red";
    // assign coordinates, don't forget "px"!
    let coords = elem.getBoundingClientRect();
    message.style.left = coords.left + "px";
    message.style.top = coords.bottom + "px";
    message.innerHTML = html;
    return message;
}

// Usage:
// add it for 5 seconds in the document
let message = createMessageUnder(elem, 'Hello, world!');
document.body.append(message);
setTimeout(() => message.remove(), 5000);

/*
Document-relative coordinates start from the upper-left corner of the document, not the window. In
CSS, window coordinates correspond to position:fixed, while document coordinates are similar to
position:absolute on top. We can use position:absolute and top/left to put something at a certain
place of the document, so that it remains there during a page scroll. But we need the right
coordinates first. For clarity we’ll call window coordinates (clientX,clientY) and document
coordinates (pageX,pageY). When the page is not scrolled, then window coordinate and document
coordinates are actually the same. Their zero points match too. And if we scroll it, then
(clientX,clientY) change, because they are relative to the window, but (pageX,pageY) remain the
same.
*/

/*
There’s no standard method to get the document coordinates of an element. But it’s easy to write it.
The two coordinate systems are connected by the formula:

1) pageY = clientY + height of the scrolled-out vertical part of the document.
2) pageX = clientX + width of the scrolled-out horizontal part of the document.

The function getCoords(elem) will take window coordinates from elem.getBoundingClientRect() and add
the current scroll to them.
*/

// get document coordinates of the element
function getCoords(elem) {
    let box = elem.getBoundingClientRect();
  
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
