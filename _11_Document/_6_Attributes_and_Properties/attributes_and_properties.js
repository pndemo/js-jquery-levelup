/*
When the browser loads the page, it “reads” (another word: “parses”) the HTML and generates DOM
objects from it. For element nodes, most standard HTML attributes automatically become properties of
DOM objects. For instance, if the tag is <body id="page">, then the DOM object has body.id="page".
*/

// DOM nodes are regular JavaScript objects. We can alter them.

// Create a new property in document.body
document.body.myData = {
    name: 'Caesar',
    title: 'Imperator'
};
  
alert(document.body.myData.title); // Imperator

// Add a method
document.body.sayTagName = function() {
    alert(this.tagName);
};
  
document.body.sayTagName(); // BODY (the value of "this" in the method is document.body)

// Modify built-in prototypes like Element.prototype and add new methods to all elements
Element.prototype.sayHi = function() {
    alert(`Hello, I'm ${this.tagName}`);
};
  
document.documentElement.sayHi(); // Hello, I'm HTML
document.body.sayHi(); // Hello, I'm BODY

/*
In HTML, tags may have attributes. When the browser parses the HTML to create DOM objects for tags,
it recognizes standard attributes and creates DOM properties from them. So when an element has id or
another standard attribute, the corresponding property gets created. But that doesn’t happen if the
attribute is non-standard.
*/
<body id="test" something="non-standard">
    <script>
        alert(document.body.id); // test
        // non-standard attribute does not yield a property
        alert(document.body.something); // undefined
    </script>
</body>

/*
A standard attribute for one element can be unknown for another one. For instance, "type" is
standard for <input> (HTMLInputElement), but not for <body> (HTMLBodyElement).
*/
<body id="body" type="...">
    <input id="input" type="text"></input>
    <script>
        alert(input.type); // text
        alert(body.type); // undefined: DOM property not created, because it's non-standard
    </script>
</body>

/*
All attributes are accessible by using the following methods:

1) elem.hasAttribute(name) – checks for existence.
2) elem.getAttribute(name) – gets the value.
3) elem.setAttribute(name, value) – sets the value.
4) elem.removeAttribute(name) – removes the attribute.
*/
<body something="non-standard">
    <script>
        alert(document.body.getAttribute('something')); // non-standard
    </script>
</body>

/*
When a standard attribute changes, the corresponding property is auto-updated, and (with some
exceptions) vice versa. In the example below id is modified as an attribute, and we can see the
property changed too. And then the same backwards.
*/
<input></input>

<script>
    let input = document.querySelector('input');

    // attribute => property
    input.setAttribute('id', 'id');
    alert(input.id); // id (updated)

    // property => attribute
    input.id = 'newId';
    alert(input.getAttribute('id')); // newId (updated)
</script>

/*
DOM properties are not always strings. For instance, the input.checked property (for checkboxes) is
a boolean.
*/
<input id="input" type="checkbox" checked> checkbox </input>

<script>
    alert(input.getAttribute('checked')); // the attribute value is: empty string
    alert(input.checked); // the property value is: true
</script>
