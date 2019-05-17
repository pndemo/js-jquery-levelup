/*
The mouseover event occurs when a mouse pointer comes over an element, and mouseout – when it
leaves. These events are special, because they have a relatedTarget.

For mouseover:

1) event.target – is the element where the mouse came over.
2) event.relatedTarget – is the element from which the mouse came.

For mouseout the reverse:

1) event.target – is the element that mouse left.
2) event.relatedTarget – is the new under-the-pointer element (that mouse left for).
*/

/*
The mousemove event triggers when the mouse moves. But that doesn’t mean that every pixel leads to
an event. The browser checks the mouse position from time to time. And if it notices changes then
triggers the events. That means that if the visitor is moving the mouse very fast then DOM-elements
may be skipped. The mouseout event may trigger on #FROM and then immediately mouseover on #TO. In
practice that’s helpful, because if there may be many intermediate elements. We don’t really want to
process in and out of each one. On the other hand, we should keep in mind that we can’t assume that
the mouse slowly moves from one event to another. No, it can “jump”. In particular it’s possible
that the cursor jumps right inside the middle of the page from out of the window. And
relatedTarget=null, because it came from “nowhere”.
*/

/*
Imagine – a mouse pointer entered an element. The mouseover triggered. Then the cursor goes into a
child element. The interesting fact is that mouseout triggers in that case. The cursor is still in
the element, but we have a mouseout from it. According to the browser logic, the mouse cursor may
be only over a single element at any time – the most nested one (and top by z-index).
*/

/*
Events mouseenter/mouseleave are like mouseover/mouseout. They also trigger when the mouse pointer
enters/leaves the element. But there are two differences:

1) Transitions inside the element are not counted.
2) Events mouseenter/mouseleave do not bubble.

These events are intuitively very clear. When the pointer enters an element – the mouseenter
triggers, and then doesn’t matter where it goes while inside the element. The mouseleave event
only triggers when the cursor leaves it.
*/

/*
Events mouseenter/leave are very simple and easy to use. But they do not bubble. So we can’t use
event delegation with them. Imagine we want to handle mouse enter/leave for table cells. And there
are hundreds of cells. The natural solution would be – to set the handler on <table> and process
events there. But mouseenter/leave don’t bubble. So if such event happens on <td>, then only a
handler on that <td> can catch it. Handlers for mouseenter/leave on <table> only trigger on
entering/leaving the whole table. It’s impossible to get any information about transitions inside
it.
*/
