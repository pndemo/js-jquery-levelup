/*
jQuery traversing, which means "move through", are used to "find" (or select) HTML elements based on
their relation to other elements. Start with one selection and move through that selection until you
reach the elements you desire.

Three useful jQuery methods for traversing up the DOM tree are:

1) parent()
2) parents()
3) parentsUntil()
*/

/*
The parent() method returns the direct parent element of the selected element. This method only
traverse a single level up the DOM tree. The following example returns the direct parent element of
each <span> elements.
*/
$(document).ready(function(){
    $("span").parent();
});

/*
The parents() method returns all ancestor elements of the selected element, all the way up to the
document's root element (<html>). The following example returns all ancestors of all <span>
elements.
*/
$(document).ready(function(){
    $("span").parents();
});

// The following example returns all ancestors of all <span> elements that are <ul> elements.
$(document).ready(function(){
    $("span").parents("ul");
});

/*
The parentsUntil() method returns all ancestor elements between two given arguments. The following
example returns all ancestor elements between a <span> and a <div> element.
*/
$(document).ready(function(){
    $("span").parentsUntil("div");
});

/*
With jQuery you can traverse down the DOM tree to find descendants of an element. A descendant is a
child, grandchild, great-grandchild, and so on. Two useful jQuery methods for traversing down the
DOM tree are:

1) children()
2) find()
*/

/*
The children() method returns all direct children of the selected element. This method only traverses
a single level down the DOM tree. The following example returns all elements that are direct
children of each <div> elements.
*/
$(document).ready(function(){
    $("div").children();
});

/*
The following example returns all <p> elements with the class name "first", that are direct children
of <div>.
*/
$(document).ready(function(){
    $("div").children("p.first");
});

/*
The find() method returns descendant elements of the selected element, all the way down to the last
descendant. The following example returns all <span> elements that are descendants of <div>.
*/
$(document).ready(function(){
    $("div").find("span");
});

// The following example returns all descendants of <div>.
$(document).ready(function(){
    $("div").find("*");
});

/*
There are many useful jQuery methods for traversing sideways in the DOM tree:

1) siblings()
2) next()
3) nextAll()
4) nextUntil()
5) prev()
6) prevAll()
7) prevUntil()
*/

/*
The siblings() method returns all sibling elements of the selected element. The following example
returns all sibling elements of <h2>.
*/
$(document).ready(function(){
    $("h2").siblings();
});

// The following example returns all sibling elements of <h2> that are <p> elements.
$(document).ready(function(){
    $("h2").siblings("p");
});

/*
The next() method returns the next sibling element of the selected element. The following example
returns the next sibling of <h2>.
*/
$(document).ready(function(){
    $("h2").next();
});

/*
The nextAll() method returns all next sibling elements of the selected element. The following
example returns all next sibling elements of <h2>.
*/
$(document).ready(function(){
    $("h2").nextAll();
});

/*
The nextUntil() method returns all next sibling elements between two given arguments. The following
example returns all sibling elements between a <h2> and a <h6> element.
*/
$(document).ready(function(){
    $("h2").nextUntil("h6");
});

/*
The prev(), prevAll() and prevUntil() methods work just like the methods above but with reverse
functionality: they return previous sibling elements (traverse backwards along sibling elements in
the DOM tree, instead of forward).
*/

/*
The most basic filtering methods are first(), last() and eq(), which allow you to select a specific
element based on its position in a group of elements. Other filtering methods, like filter() and
not() allow you to select elements that match, or do not match, a certain criteria.
*/

/*
The first() method returns the first element of the specified elements. The following example
selects the first <div> element.
*/
$(document).ready(function(){
    $("div").first();
});

/*
The last() method returns the last element of the specified elements. The following example selects
the last <div> element.
*/
$(document).ready(function(){
    $("div").last();
});

/*
The eq() method returns an element with a specific index number of the selected elements. The index
numbers start at 0, so the first element will have the index number 0 and not 1. The following
example selects the second <p> element (index number 1).
*/
$(document).ready(function(){
    $("p").eq(1);
});

/*
The filter() method lets you specify a criteria. Elements that do not match the criteria are removed
from the selection, and those that match will be returned. The following example returns all <p>
elements with class name "intro".
*/
$(document).ready(function(){
    $("p").filter(".intro");
});

/*
The not() method returns all elements that do not match the criteria. The following example returns
all <p> elements that do not have class name "intro".
*/
$(document).ready(function(){
    $("p").not(".intro");
});
