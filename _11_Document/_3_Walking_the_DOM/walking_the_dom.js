/*
The DOM allows us to do anything with elements and their contents, but first we need to reach the 
corresponding DOM object, get it into a variable, and then we are able to modify it. All operations
on the DOM start with the document object. From it we can access any node.

The topmost tree nodes are available directly as document properties:

1) <html> = document.documentElement - The topmost document node is document.documentElement. That’s
DOM node of <html> tag.
2) <body> = document.body - Another widely used DOM node is the <body> element – document.body.
2) <head> = document.head - The <head> tag is available as document.head.
*/

/*
Children: childNodes, firstChild, lastChild

1) Child nodes (or children) – elements that are direct children. In other words, they are nested
exactly in the given one. For instance, <head> and <body> are children of <html> element.
2) Descendants – all elements that are nested in the given one, including children, their children
and so on.
*/

// Below <body> has children <div> and <ul>
<html>
    <body>
    <div>Begin</div>

    <ul>
        <li>
            <b>Information</b>
        </li>
    </ul>
    </body>
</html>

// The childNodes collection provides access to all child nodes, including text nodes.
<html>
    <body>
        <div>Begin</div>

        <ul>
            <li>Information</li>
        </ul>

        <div>End</div>

        <script>
            for (let i = 0; i < document.body.childNodes.length; i++) {
            alert( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
            }
        </script>
    </body>
</html>

/*
childNodes looks like an array. But actually it’s not an array, but rather a collection – a special
array-like iterable object.

1) We can use for..of to iterate over it.
2) Array methods won’t work, because it’s not an array.
*/
for (let node of document.body.childNodes) {
    alert(node); // shows all nodes from the collection
}

alert(document.body.childNodes.filter); // undefined (there's no filter method!)
alert( Array.from(document.body.childNodes).filter ); // now it's there

/*
Siblings are nodes that are children of the same parent. For instance, <head> and <body> are
siblings.

1) <body> is said to be the “next” or “right” sibling of <head>,
2) <head> is said to be the “previous” or “left” sibling of <body>.

The parent is available as parentNode. The next node in the same parent (next sibling) is
nextSibling, and the previous one is previousSibling.
*/
<html><head></head><body><script>
    // HTML is "dense" to evade extra "blank" text nodes.

    // parent of <body> is <html>
    alert( document.body.parentNode === document.documentElement ); // true

    // after <head> goes <body>
    alert( document.head.nextSibling ); // HTMLBodyElement

    // before <body> goes <head>
    alert( document.body.previousSibling ); // HTMLHeadElement
</script></body></html>
