/*
Many events automatically lead to browser actions. For instance:

1) A click on a link – initiates going to its URL.
2) A click on submit button inside a form – initiates its submission to the server.
3) Pressing a mouse button over a text and moving it – selects the text.

If we handle an event in JavaScript, often we don’t want browser actions. Fortunately, it can be
prevented.
*/

/*
There are two ways to tell the browser we don’t want it to act:

1) The main way is to use the event object. There’s a method event.preventDefault().
2) If the handler is assigned using on<event> (not by addEventListener), then we can just return
false from it.
*/
<a href="/" onclick="return false">Click here</a>
or
<a href="/" onclick="event.preventDefault()">here</a>

/*
Certain events flow one into another. If we prevent the first event, there will be no second. For
instance, mousedown on an <input> field leads to focusing in it, and the focus event. If we prevent
the mousedown event, there’s no focus.
*/
<input value="Focus works" onfocus="this.value=''"></input>
<input onmousedown="return false" onfocus="this.value=''" value="Click me"></input>

/*
The optional passive: true option of addEventListener signals the browser that the handler is not
going to call preventDefault(). There are some events like touchmove on mobile devices (when the
user moves their finger across the screen), that cause scrolling by default, but that scrolling can
be prevented using preventDefault() in the handler. So when the browser detects such event, it has
first to process all handlers, and then if preventDefault is not called anywhere, it can proceed
with scrolling. That may cause unnecessary delays and “jitters” in the UI. The passive: true options
tells the browser that the handler is not going to cancel scrolling. Then browser scrolls
immediately providing a maximally fluent experience, and the event is handled by the way. For some
browsers (Firefox, Chrome), passive is true by default for touchstart and touchmove events.
*/

/*
The property event.defaultPrevented is true if the default action was prevented, and false
otherwise. By default the browser on contextmenu event (right mouse click) shows a context menu with
standard options. We can prevent it and show our own as shown below.
*/
<button>Right-click for browser context menu</button>
<button oncontextmenu="alert('Draw our menu'); return false">
    Right-click for our context menu
</button>
