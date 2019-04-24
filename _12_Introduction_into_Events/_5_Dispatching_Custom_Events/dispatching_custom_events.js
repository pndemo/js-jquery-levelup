/*
We can not only assign handlers, but also generate events from JavaScript. Custom events can be used
to create “graphical components”. For instance, a root element of the menu may trigger events
telling what happens with the menu: open (menu open), select (an item is selected) and so on. Also
we can generate built-in events like click, mousedown etc, that may be good for testing.
*/

/*
Events form a hierarchy, just like DOM element classes. The root is the built-in Event class. We can
create Event objects using the syntax below.

let event = new Event(event type[, options]);

1) event type – may be any string, like "click" or our own like "hey-ho!".
2) options – the object with two optional properties:
  a) bubbles: true/false – if true, then the event bubbles.
  b) cancelable: true/false – if true, then the “default action” may be prevented. Later we’ll see
  what it means for custom events.

By default both are false: {bubbles: false, cancelable: false}.
*/

/*
After an event object is created, we should “run” it on an element using the call
elem.dispatchEvent(event). Then handlers react on it as if it were a regular built-in event. If the
event was created with the bubbles flag, then it bubbles. In the example below the click event is
initiated in JavaScript. The handler works same way as if the button was clicked.
*/
<button id="elem" onclick="alert('Click!');">Autoclick</button>
<script>
    let event = new Event("click");
    elem.dispatchEvent(event);
</script>

/*
We can create a bubbling event with the name "hello" and catch it on document. All we need is to set
bubbles to true.

1) We should use addEventListener for our custom events, because on<event> only exists for built-in
events, document.onhello doesn’t work.
2) Must set bubbles:true, otherwise the event won’t bubble up.

The bubbling mechanics is the same for built-in (click) and custom (hello) events. There are also
capturing and bubbling stages.
*/
<h1 id="elem">Hello from the script!</h1>

<script>
    // catch on document...
    document.addEventListener("hello", function(event) { // (1)
        alert("Hello from " + event.target.tagName); // Hello from H1
    });

    // ...dispatch on elem!
    let event = new Event("hello", {bubbles: true}); // (2)
    elem.dispatchEvent(event);
</script>

/*
Here’s a short list of classes for UI Events from the UI Event specification:

1) UIEvent
2) FocusEvent
3) MouseEvent
4) WheelEvent
5) KeyboardEvent

We should use them instead of new Event if we want to create such events. For instance, new
MouseEvent("click"). The right constructor allows to specify standard properties for that type of
event. Like clientX/clientY for a mouse event.
*/
let event = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    clientX: 100,
    clientY: 100
});
  
alert(event.clientX); // 100

/*
For our own, custom events like "hello" we should use new CustomEvent. Technically CustomEvent is
the same as Event, with one exception. In the second argument (object) we can add an additional
property detail for any custom information that we want to pass with the event. See example below.
The detail property can have any data. Technically we could live without, because we can assign any
properties into a regular new Event object after its creation. But CustomEvent provides the special
detail field for it to evade conflicts with other event properties. The event class tells something
about “what kind of event” it is, and if the event is custom, then we should use CustomEvent just to
be clear about what it is.
*/
<h1 id="elem">Hello for John!</h1>

<script>
    // additional details come with the event to the handler
    elem.addEventListener("hello", function(event) {
        alert(event.detail.name);
    });

    elem.dispatchEvent(new CustomEvent("hello", {
        detail: { name: "John" }
    }));
</script>

/*
We can call event.preventDefault() on a script-generated event if cancelable:true flag is specified.
Of course, if the event has a non-standard name, then it’s not known to the browser, and there’s no
“default browser action” for it. But the event-generating code may plan some actions after
dispatchEvent. The call of event.preventDefault() is a way for the handler to send a signal that
those actions shouldn’t be performed. In that case the call to elem.dispatchEvent(event) returns
false. And the event-generating code knows that the processing shouldn’t continue.
*/

/*
Usually events are processed asynchronously. That is: if the browser is processing onclick and in
the process a new event occurs, then it awaits till onclick processing is finished. The exception is
when one event is initiated from within another one. Then the control jumps to the nested event
handler, and after it goes back. For instance, below the nested menu-open event is processed
synchronously, during the onclick.
*/
<button id="menu">Menu (click me)</button>

<script>
    // 1 -> nested -> 2
    menu.onclick = function() {
        alert(1);

        // alert("nested")
        menu.dispatchEvent(new CustomEvent("menu-open", {
            bubbles: true
        }));

        alert(2);
    };

    document.addEventListener('menu-open', () => alert('nested'))
</script>
