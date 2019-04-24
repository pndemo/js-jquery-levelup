/*
When an event happens on an element, it first runs the handlers on it, then on its parent, then all
the way up on other ancestors. Let’s say we have 3 nested elements FORM > DIV > P with a handler on
each of them. So if we click on <p>, then we’ll see 3 alerts: p → div → form. Example is shown
below.
*/
<style>
    body * {
        margin: 10px;
        border: 1px solid blue;
    }
</style>

<form onclick="alert('form')">FORM
    <div onclick="alert('div')">DIV
        <p onclick="alert('p')">P</p>
    </div>
</form>

/*
A handler on a parent element can always get the details about where it actually happened. The most
deeply nested element that caused the event is called a target element, accessible as event.target.

Note the differences from (=event.currentTarget):

1) vent.target – is the “target” element that initiated the event, it doesn’t change through the
bubbling process.
2) this – is the “current” element, the one that has a currently running handler on it.

For instance, if we have a single handler form.onclick, then it can “catch” all clicks inside the
form. No matter where the click happened, it bubbles up to <form> and runs the handler. In
form.onclick handler:

1) this (=event.currentTarget) is the <form> element, because the handler runs on it.
2) event.target is the concrete element inside the form that actually was clicked.
*/

/*
A bubbling event goes from the target element straight up. Normally it goes upwards till <html>, and
then to document object, and some events even reach window, calling all handlers on the path. But
any handler may decide that the event has been fully processed and stop the bubbling. The method for
it is event.stopPropagation(). For instance, below body.onclick doesn’t work if you click on
<button>.
*/
<body onclick="alert(`the bubbling doesn't reach here`)">
    <button onclick="event.stopPropagation()">Click me</button>
</body>

/*
There’s another phase of event processing called “capturing”. It is rarely used in real code, but
sometimes can be useful. The standard DOM Events describes 3 phases of event propagation:

1) Capturing phase – the event goes down to the element.
2) Target phase – the event reached the target element.
3) Bubbling phase – the event bubbles up from the element.

That is: for a click on <td> the event first goes through the ancestors chain down to the element
(capturing), then it reaches the target, and then it goes up (bubbles), calling handlers on its way.
Before we only talked about bubbling, because the capturing phase is rarely used. Normally it is
invisible to us. Handlers added using on<event>-property or using HTML attributes or using
addEventListener(event, handler) don’t know anything about capturing, they only run on the 2nd and
3rd phases. To catch an event on the capturing phase, we need to set the handler capture option to
true as shown below:

elem.addEventListener(..., {capture: true})

There are two possible values of the capture option:

1) If it’s false (default), then the handler is set on the bubbling phase.
2) If it’s true, then the handler is set on the capturing phase.
*/

/*
If one puts capturing and bubbling handlers on the target element, the capture handler triggers last
in the capturing phase and the bubble handler triggers first in the bubbling phase. The code sets
click handlers on every element in the document to see which ones are working. If you click on <p>,
then the sequence is:

1) HTML → BODY → FORM → DIV → P (capturing phase, the first listener), and then:
2) P → DIV → FORM → BODY → HTML (bubbling phase, the second listener).
*/
<style>
    body * {
        margin: 10px;
        border: 1px solid blue;
    }
</style>

<form>FORM
    <div>DIV
        <p>P</p>
    </div>
</form>

<script>
    for(let elem of document.querySelectorAll('*')) {
        elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true);
        elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));
    }
</script>
