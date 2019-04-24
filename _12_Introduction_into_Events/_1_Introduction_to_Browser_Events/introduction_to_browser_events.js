/*
An event is a signal that something has happened. All DOM nodes generate such signals
(but events are not limited to DOM). Below is a list of the most useful DOM events:

Mouse events:
1) click – when the mouse clicks on an element (touchscreen devices generate it on a tap).
2) contextmenu – when the mouse right-clicks on an element.
3) mouseover / mouseout – when the mouse cursor comes over / leaves an element.
4) mousedown / mouseup – when the mouse button is pressed / released over an element.
5) mousemove – when the mouse is moved.

Form element events:
1) submit – when the visitor submits a <form>.
2) focus – when the visitor focuses on an element, e.g. on an <input>.

Keyboard events:
1) keydown and keyup – when the visitor presses and then releases the button.

Document events:
1) DOMContentLoaded – when the HTML is loaded and processed, DOM is fully built.

CSS events:
1) transitionend – when a CSS-animation finishes.
*/

/*
To react on events we can assign a handler – a function that runs in case of an event. Handlers are
a way to run JavaScript code in case of user actions. There are several ways to assign a handler as
shown the following notes.
*/

/*
A handler can be set in HTML with an attribute named on<event>. For instance, to assign a click
handler for an input, we can use onclick.
*/
<script>
    function countRabbits() {
        for(let i=1; i<=3; i++) {
            alert("Rabbit number " + i);
        }
    }
</script>

<input type="button" onclick="countRabbits()" value="Count rabbits!"></input>

// We can assign a handler using a DOM property on<event>. For instance, elem.onclick.
<input id="elem" type="button" value="Click me"></input>
<script>
    elem.onclick = function() {
        alert('Thank you');
    };
</script>

/*
The handler is always in the DOM property: the HTML-attribute is just one of the ways to initialize
it. These two code pieces below work the same.
*/
<input type="button" onclick="alert('Click!')" value="Button"></input>

<input type="button" id="button" value="Button"></input>
<script>
    button.onclick = function() {
        alert('Click!');
    };
</script>

// As there’s only one onclick property, we can’t assign more than one event handler.
<input type="button" id="elem" onclick="alert('Before')" value="Click me"></input>
<script>
    elem.onclick = function() { // overwrites the existing handler
        alert('After'); // only this will be shown
    };
</script>

/*
The value of this inside a handler is the element. The one which has the handler on it. In the code
below button shows its contents using this.innerHTML.
*/
<button onclick="alert(this.innerHTML)">Click me</button>

/*
The fundamental problem of the aforementioned ways to assign handlers – we can’t assign multiple
handlers to one event. For instance, one part of our code wants to highlight a button on click, and
another one wants to show a message. We’d like to assign two event handlers for that. But a new DOM
property will overwrite the existing one. Web-standard developers understood that long ago and
suggested an alternative way of managing handlers using special methods addEventListener and
removeEventListener. They are free of such a problem.

The syntax to add a handler is:

element.addEventListener(event, handler[, options]);

1) event- Event name, e.g. "click".
2) handler - The handler function.
3) options - Additional optional object with properties.
  a) once: if true, then the listener is automatically removed after it triggers.
  b) capture: the phrase where to handle the event, to be covered later in the chapter Bubbling and
  capturing. For historical reasons, options can also be false/true, that’s the same as
  {capture: false/true}.
  c) passive: if true, then the handler will not preventDefault(), we’ll cover that later in Browser
  default actions.

To remove the handler, use removeEventListener:

element.removeEventListener(event, handler[, options]);
*/
function handler() {
    alert( 'Thanks!' );
}
  
input.addEventListener("click", handler);
// ....
input.removeEventListener("click", handler);

/*
To properly handle an event we’d want to know more about what’s happened. Not just a “click” or a
“keypress”, but what were the pointer coordinates? Which key was pressed? And so on. When an event
happens, the browser creates an event object, puts details into it and passes it as an argument to
the handler. Some properties of event object:

1) event.type - Event type, here it’s "click".
2) event.currentTarget - Element that handled the event. That’s exactly the same as this, unless you
bind this to something else, and then event.currentTarget becomes useful.
3) event.clientX / event.clientY - Window-relative coordinates of the cursor, for mouse events.
*/

// Getting mouse coordinates from the event object
<input type="button" value="Click me" id="elem"></input>

<script>
    elem.onclick = function(event) {
        // show event type, element and coordinates of the click
        alert(event.type + " at " + event.currentTarget);
        alert("Coordinates: " + event.clientX + ":" + event.clientY);
    };
</script>

/*
We can assign an object as an event handler using addEventListener. When an event occurs, its
handleEvent method is called with it.
*/
<button id="elem">Click me</button>

<script>
    elem.addEventListener('click', {
        handleEvent(event) {
            alert(event.type + " at " + event.currentTarget);
        }
    });
</script>

/*
When addEventListener receives an object as the handler, it calls object.handleEvent(event) in case
of an event. We could also use a class for that.
*/
<button id="elem">Click me</button>

<script>
    class Menu {
        handleEvent(event) {
            switch(event.type) {
                case 'mousedown':
                    elem.innerHTML = "Mouse button pressed";
                    break;
                case 'mouseup':
                    elem.innerHTML += "...and released.";
                    break;
            }
        }
    }

    let menu = new Menu();
    elem.addEventListener('mousedown', menu);
    elem.addEventListener('mouseup', menu);
</script>
