/*
DOM navigation properties are great when elements are close to each other. What if they are not?
How to get an arbitrary element of the page? There are additional searching methods for that.
*/

/*
document.getElementById or just id - If an element has the id attribute, then there’s a global
variable by the name from that id.
*/
<div id="elem">
    <div id="elem-content">Element</div>
</div>

<script>
    alert(elem); // DOM-element with id="elem"
    alert(window.elem); // accessing global variable like this also works

    // for elem-content things are a bit more complex
    // that has a dash inside, so it can't be a variable name
    alert(window['elem-content']); // ...but accessible using square brackets [...]
</script>

// The better alternative is to use a special method document.getElementById(id).
<div id="elem">
    <div id="elem-content">Element</div>
</div>

<script>
    let elem = document.getElementById('elem');
    elem.style.background = 'red';
</script>

/*
elem.getElementsByTagName(tag) looks for elements with the given tag and returns the collection of
them. The tag parameter can also be a star "*" for “any tags”.
*/

let divs = document.getElementsByTagName('div'); //  get all divs in the document

/*
elem.getElementsByClassName(className) returns elements that have the given CSS class. Elements may
have other classes too. On the other hand document.getElementsByName(name) returns elements with the
given name attribute, document-wide. Exists for historical reasons, very rarely used, we mention it
here only for completeness.
*/
<form name="my-form">
    <div class="article">Article</div>
    <div class="long article">Long article</div>
</form>

<script>
    // find by name attribute
    let form = document.getElementsByName('my-form')[0];

    // find by class inside the form
    let articles = form.getElementsByClassName('article');
    alert(articles.length); // 2, found two elements with class "article"
</script>

/*
elem.querySelectorAll(css) returns all elements inside elem matching the given CSS selector. Below
we look for all <li> elements that are last children.
*/
<ul>
    <li>The</li>
    <li>test</li>
</ul>
<ul>
    <li>has</li>
    <li>passed</li>
</ul>
<script>
    let elements = document.querySelectorAll('ul > li:last-child');

    for (let elem of elements) {
        alert(elem.innerHTML); // "test", "passed"
    }
</script>

/*
elem.querySelector(css) returns the first element for the given CSS selector. In other words, the
result is the same as elem.querySelectorAll(css)[0], but the latter is looking for all elements
and picking one, while elem.querySelector just looks for one.
*/

/*
The elem.matches(css) does not look for anything, it merely checks if elem matches the given
CSS-selector. It returns true or false. The method comes handy when we are iterating over elements
(like in array or something) and trying to filter those that interest us.
*/
<a href="http://example.com/file.zip">...</a>
<a href="http://ya.ru">...</a>

<script>
    // can be any collection instead of document.body.children
    for (let elem of document.body.children) {
        if (elem.matches('a[href$="zip"]')) {
        alert("The archive reference: " + elem.href );
        }
    }
</script>

/*
All elements that are directly above the given one are called its ancestors. In other words,
ancestors are: parent, the parent of parent, its parent and so on. The ancestors together form the
chain of parents from the element to the top. The method elem.closest(css) looks the nearest
ancestor that matches the CSS-selector. The elem itself is also included in the search. In other
words, the method closest goes up from the element and checks each of parents. If it matches the
selector, then the search stops, and the ancestor is returned.
*/
<h1>Contents</h1>

<div class="contents">
    <ul class="book">
        <li class="chapter">Chapter 1</li>
        <li class="chapter">Chapter 1</li>
    </ul>
</div>

<script>
    let chapter = document.querySelector('.chapter'); // LI

    alert(chapter.closest('.book')); // UL
    alert(chapter.closest('.contents')); // DIV

    alert(chapter.closest('h1')); // null (because h1 is not an ancestor)
</script>
