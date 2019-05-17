/*
Mouse events come not only from “mouse manipulators”, but are also emulated on touch devices, to
make them compatible. We can split mouse events into two categories: simple and complex.

The most used simple events are:

1) mousedown/mouseup - Mouse button is clicked/released over an element.
2) mouseover/mouseout - Mouse pointer comes over/out from an element.
3) mousemove - Every mouse move over an element triggers that event.

Complex events include:

1) click - Triggers after mousedown and then mouseup over the same element if the left mouse button
was used.
2) contextmenu - Triggers after mousedown if the right mouse button was used.
3) dblclick - Triggers after a double click over an element.
*/

/*
An action may trigger multiple events. For instance, a click first triggers mousedown, when the
button is pressed, then mouseup and click when it’s released. In cases when a single action
initiates multiple events, their order is fixed. That is, the handlers are called in the order
mousedown → mouseup → click. Events are handled in the same sequence: onmouseup finishes before
onclick runs.

Click-related events always have the which property, which allows to get the exact mouse button.
It is not used for click and contextmenu events, because the former happens only on left-click, and
the latter – only on right-click. But if we track mousedown and mouseup, then we need it, because
these events trigger on any button, so which allows to distinguish between right-mousedown and
left-mousedown. There are the three possible values:

1) event.which == 1 – the left button
2) event.which == 2 – the middle button
3) event.which == 3 – the right button

The middle button is somewhat exotic right now and is very rarely used.
*/

/*
All mouse events include the information about pressed modifier keys. The properties are:

1) shiftKey
2) altKey
3) ctrlKey
4) metaKey (Cmd for Mac)

For instance, the button below only works on Alt+Shift+click.
*/
<button id="button">Alt+Shift+Click on me!</button>

<script>
    button.onclick = function(event) {
        if (event.altKey && event.shiftKey) {
            alert('Hooray!');
        }
    };
</script>

/*
All mouse events have coordinates in two flavours:

1) Window-relative: clientX and clientY.
2) Document-relative: pageX and pageY.

For instance, if we have a window of the size 500x500, and the mouse is in the left-upper corner,
then clientX and clientY are 0. And if the mouse is in the center, then clientX and clientY are 250,
no matter what place in the document it is. They are similar to position:fixed. Move the mouse over
the input field to see clientX/clientY. Document-relative coordinates are counted from the
left-upper corner of the document, not the window. Coordinates pageX, pageY are similar to
position:absolute on the document level.
*/

/*
Mouse clicks have a side-effect that may be disturbing. A double click selects the text. If we want
to handle click events ourselves, then the “extra” selection doesn’t look good. For instance, a
double-click on the text below selects it in addition to our handler.
*/
<b ondblclick="alert('dblclick')">Double-click me</b>
