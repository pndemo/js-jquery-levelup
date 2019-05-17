/*
An element receives a focus when the user either clicks on it or uses the Tab key on the keyboard.
There’s also an autofocus HTML attribute that puts the focus into an element by default when a page
loads and other means of getting a focus. Focusing generally means: “prepare to accept the data
here”, so that’s the moment when we can run the code to initialize or load something. The moment of
losing the focus (“blur”) can be even more important. That’s when a user clicks somewhere else or
presses Tab to go to the next form field, or there are other means as well. Losing the focus
generally means: “the data has been entered”, so we can run the code to check it or even to save it
to the server and so on. There are important peculiarities when working with focus events though.
*/

/*
The focus event is called on focusing, and blur – when the element loses the focus. Let’s use them
for validation of an input field. In the example below:

1) The blur handler checks if the field the email is entered, and if not – shows an error.
2) The focus handler hides the error message (on blur it will be checked again).
*/
<style>
    .invalid { border-color: red; }
    #error { color: red }
</style>

Your email please: <input type="email" id="input">

<div id="error"></div>

<script>
    input.onblur = function() {
        if (!input.value.includes('@')) { // not email
            input.classList.add('invalid');
            error.innerHTML = 'Please enter a correct email.'
        }
    };

    input.onfocus = function() {
        if (this.classList.contains('invalid')) {
            // remove the "error" indication to allow user wants to re-enter input
            this.classList.remove('invalid');
            error.innerHTML = "";
        }
    };
</script>

/*
Modern HTML allows to do many validations using input attributes: required, pattern and so on. And
sometimes they are just what we need. JavaScript can be used when we want more flexibility.
*/

/*
By default many elements do not support focusing. The list varies between browsers, but one thing is
always correct: focus/blur support is guaranteed for elements that a visitor can interact with:
<button>, <input>, <select>, <a> and so on. From the other hand, elements that exist to format
something like <div>, <span>, <table> – are unfocusable by default. The method elem.focus() doesn’t
work on them, and focus/blur events are never triggered. This can be changed using HTML-attribute
tabindex. The purpose of this attribute is to specify the order number of the element when Tab is
used to switch between them. That is: if we have two elements, the first has tabindex="1", and the
second has tabindex="2", then pressing Tab while in the first element – moves us to the second one.

There are two special values:

1) tabindex="0" makes the element the last one.
2) abindex="-1" means that Tab should ignore that element.
*/
<ul>
    <li tabindex="1">One</li>
    <li tabindex="0">Zero</li>
    <li tabindex="2">Two</li>
    <li tabindex="-1">Minus one</li>
</ul>

<style>
    li { cursor: pointer; }
    :focus { outline: 1px dashed green; }
</style>

/*
Events focus and blur do not bubble. For instance, we can’t put onfocus on the <form> to highlight
it as shown below.
*/
<!-- on focusing in the form -- add the class -->
<form onfocus="this.className='focused'">
    <input type="text" name="name" value="Name">
    <input type="text" name="surname" value="Surname">
</form>

<style> .focused { outline: 1px solid red; } </style>

/*
The example above doesn’t work, because when user focuses on an <input>, the focus event triggers on
that input only. It doesn’t bubble up. So form.onfocus never triggers. There are two solutions
described below.
*/

/*
First, there’s a funny historical feature: focus/blur do not bubble up, but propagate down on the
capturing phase. The code below works.
*/
<form id="form">
    <input type="text" name="name" value="Name">
    <input type="text" name="surname" value="Surname">
</form>

<style> .focused { outline: 1px solid red; } </style>

<script>
    // put the handler on capturing phase (last argument true)
    form.addEventListener("focus", () => form.classList.add('focused'), true);
    form.addEventListener("blur", () => form.classList.remove('focused'), true);
</script>

/*
Second, there are focusin and focusout events – exactly the same as focus/blur, but they bubble.
Note that they must be assigned using elem.addEventListener, not on<event>. Below, shows another
working variant.
*/
<form id="form">
    <input type="text" name="name" value="Name">
    <input type="text" name="surname" value="Surname">
</form>

<style> .focused { outline: 1px solid red; } </style>

<script>
    // put the handler on capturing phase (last argument true)
    form.addEventListener("focusin", () => form.classList.add('focused'));
    form.addEventListener("focusout", () => form.classList.remove('focused'));
</script>
