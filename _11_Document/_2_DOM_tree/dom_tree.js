/*
The backbone of an HTML document are tags. According to Document Object Model (DOM), every HTML-tag
is an object. Nested tags are called “children” of the enclosing one. The text inside a tag it is an
object as well. All these objects are accessible using JavaScript.
*/

// An example of DOM
<!DOCTYPE HTML>
<html>
    <head>
        <title>About elks</title>
    </head>
    <body>
        The truth about elks.
    </body>
</html>

/*
Tags are called element nodes (or just elements). Nested tags become children of the enclosing ones.
As a result we have a tree of elements: <html> is at the root, then <head> and <body> are its
children, etc. The text inside elements forms text nodes, labelled as #text. A text node contains
only a string. It may not have children and is always a leaf of the tree. For instance, the <title>
tag has the text "About elks".

Spaces and newlines – are totally valid characters, they form text nodes and become a part of the
DOM. So, for instance, in the example above the <head> tag contains some spaces before <title>, and
that text becomes a #text node (it contains a newline and some spaces only). There are only two
top-level exclusions:

1) Spaces and newlines before <head> are ignored for historical reasons,
2) If we put something after </body>, then that is automatically moved inside the body, at the end,
as the HTML spec requires that all content must be inside <body>. So there may be no spaces after
</body>.
*/

/*
If the browser encounters malformed HTML, it automatically corrects it when making DOM. For
instance, the top tag is always <html>. Even if it doesn’t exist in the document – it will exist in
the DOM, the browser will create it. The same goes for <body>. As an example, if the HTML file is a
single word "Hello", the browser will wrap it into <html> and <body> and add the required <head>.
*/
