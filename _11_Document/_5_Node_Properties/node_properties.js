/*
DOM nodes have different properties depending on their class. For instance, an element node
corresponding to tag <a> has link-related properties, and the one corresponding to <input> has
input-related properties and so on. Text nodes are not the same as element nodes. But there are
also common properties and methods between all of them, because all classes of DOM nodes form a
single hierarchy. Each DOM node belongs to the corresponding built-in class. The root of the
hierarchy is EventTarget, that is inherited by Node, and other DOM nodes inherit from it. The
classes are:

1) EventTarget – is the root “abstract” class. Objects of that class are never created. It serves
as a base, so that all DOM nodes support so-called “events”, we’ll study them later.
2) Node – is also an “abstract” class, serving as a base for DOM nodes. It provides the core tree
functionality: parentNode, nextSibling, childNodes and so on (they are getters). Objects of Node
class are never created. But there are concrete node classes that inherit from it, namely: Text for
text nodes, Element for element nodes and more exotic ones like Comment for comment nodes.
3) Element – is a base class for DOM elements. It provides element-level navigation like
nextElementSibling, children and searching methods like getElementsByTagName, querySelector. In the
browser there may be not only HTML, but also XML and SVG documents. The Element class serves as a
base for more specific classes: SVGElement, XMLElement and HTMLElement.
4) HTMLElement – is finally the basic class for all HTML elements. It is inherited by various HTML
elements:
   a) HTMLInputElement – the class for <input> elements,
   b) HTMLBodyElement – the class for <body> elements,
   c) HTMLAnchorElement – the class for <a> elements

The full set of properties and methods of a given node comes as the result of the inheritance.
For example, let’s consider the DOM object for an <input> element. It belongs to HTMLInputElement
class. It gets properties and methods as a superposition of:

1) HTMLInputElement – this class provides input-specific properties, and inherits from…
2) HTMLElement – it provides common HTML element methods (and getters/setters) and inherits from…
3) Element – provides generic element methods and inherits from…
4) Node – provides common DOM node properties and inherits from…
4) EventTarget – gives the support for events (to be covered),
5) Finally it inherits from Object, so “pure object” methods like hasOwnProperty are also available.
*/

alert( document.body instanceof HTMLBodyElement ); // true
alert( document.body instanceof HTMLElement ); // true
alert( document.body instanceof Element ); // true
alert( document.body instanceof Node ); // true
alert( document.body instanceof EventTarget ); // true

/*
The nodeType property provides an old-fashioned way to get the “type” of a DOM node. It has a
numeric value:

1) elem.nodeType == 1 for element nodes
2) elem.nodeType == 3 for text nodes
3) elem.nodeType == 9 for the document object
*/
<body>
    <script>
        let elem = document.body;

        // let's examine what it is?
        alert(elem.nodeType); // 1 => element

        // and the first child is...
        alert(elem.firstChild.nodeType); // 3 => text

        // for the document object, the type is 9
        alert( document.nodeType ); // 9
    </script>
</body>

// Given a DOM node, we can read its tag name from nodeName or tagName properties
alert( document.body.nodeName ); // BODY
alert( document.body.tagName ); // BODY

/*
1) The tagName property exists only for Element nodes.
2) The nodeName is defined for any Node:
   a) for elements it means the same as tagName.
   b) for other node types (text, comment, etc.) it has a string with the node type.
*/
<body>
    <script>
        // for comment
        alert( document.body.firstChild.tagName ); // undefined (no element)
        alert( document.body.firstChild.nodeName ); // #comment

        // for document
        alert( document.tagName ); // undefined (not element)
        alert( document.nodeName ); // #document
    </script>
</body>

/*
The innerHTML property allows to get the HTML inside the element as a string. We can also modify it.
So it’s one of most powerful ways to change the page.
*/
<body>
    <p>A paragraph</p>
    <div>A div</div>

    <script>
        alert( document.body.innerHTML ); // read the current contents
        document.body.innerHTML = 'The new BODY!'; // replace it
    </script>
</body>

// Modify innerHTML property for example above
<body>
    <script>
        document.body.innerHTML = '<b>test</b>'; // forgot to close the tag
        alert( document.body.innerHTML ); // <b>test</b> (fixed)
    </script>
</body>

/*
The outerHTML property contains the full HTML of the element. That’s like innerHTML plus the element
itself.
*/
<div id="elem">Hello <b>World</b></div>

<script>
    alert(elem.outerHTML); // <div id="elem">Hello <b>World</b></div>
</script>

/*
The innerHTML property is only valid for element nodes. Other node types have their counterpart:
nodeValue and data properties. These two are almost the same for practical use, there are only minor
specification differences. So we’ll use data, because it’s shorter.
*/
<body>
    Hello
    <!-- Comment -->
    <script>
        let text = document.body.firstChild;
        alert(text.data); // Hello

        let comment = text.nextSibling;
        alert(comment.data); // Comment
    </script>
</body>

// The textContent provides access to the text inside the element: only text, minus all <tags>.
<div id="news">
    <h1>Headline!</h1>
    <p>Martians attack people!</p>
</div>
<script>
    // Headline! Martians attack people!
    alert(news.textContent);
</script>

/*
The “hidden” attribute and the DOM property specifies whether the element is visible or not. We can
use it in HTML or assign using JavaScript.
*/
<div>Both divs below are hidden</div>
<div hidden>With the attribute "hidden"</div>
<div id="elem">JavaScript assigned the property "hidden"</div>

<script>
    elem.hidden = true;
</script>

/*
DOM elements also have additional properties, many of them provided by the class:

1) value – the value for <input>, <select> and <textarea> (HTMLInputElement, HTMLSelectElement…).
2) href – the “href” for <a href="..."> (HTMLAnchorElement).
3) id – the value of “id” attribute, for all elements (HTMLElement).
*/
<input type="text" id="elem" value="value">

<script>
    alert(elem.type); // "text"
    alert(elem.id); // "elem"
    alert(elem.value); // value
</script>
