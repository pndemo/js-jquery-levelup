/*
DOM modifications is the key to create “live” pages.
*/

// Add a message on the page that looks nicer than alert
<style>
    .alert {
        padding: 15px;
        border: 1px solid #d6e9c6;
        border-radius: 4px;
        color: #3c763d;
        background-color: #dff0d8;
    }
</style>

<div class="alert">
    <strong>Hi there!</strong> You've read an important message.
</div>

/*
To create DOM nodes, there are two methods, use:

1) document.createElement(tag)
2) document.createTextNode(text)
*/
let div = document.createElement('div');
let textNode = document.createTextNode('Here I am');

//  Make a div with given classes and a message in it
let div = document.createElement('div');
div.className = "alert alert-success";
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

// To make the div above show up, we need to insert it somewhere into document.
document.body.appendChild(div);

/*
Below shows a brief list of methods to insert a node into a parent element.

1) parentElem.appendChild(node) - Appends node as the last child of parentElem.
2) parentElem.insertBefore(node, nextSibling) - Inserts node before nextSibling into parentElem.
3) parentElem.replaceChild(node, oldChild) - Replaces oldChild with node among children of
parentElem.
  a) node.append(...nodes or strings) – append nodes or strings at the end of node,
  b) node.prepend(...nodes or strings) – insert nodes or strings into the beginning of node,
  c) node.before(...nodes or strings) –- insert nodes or strings before the node,
  d) node.after(...nodes or strings) –- insert nodes or strings after the node,
  e) node.replaceWith(...nodes or strings) –- replaces node with the given nodes or strings.
4) elem.insertAdjacentHTML(where, html) - The first parameter is a string, specifying where to
insert.
  a) "beforebegin" – insert html before elem,
  b) "afterbegin" – insert html into elem, at the beginning,
  c) "beforeend" – insert html into elem, at the end,
  d) "afterend" – insert html after elem.
*/
<ol id="list">
    <li>0</li>
    <li>1</li>
    <li>2</li>
</ol>

<script>
    let newLi = document.createElement('li');
    newLi.innerHTML = 'Hello, world!';

    list.appendChild(newLi);
</script>

<script>
    let newLi = document.createElement('li');
    newLi.innerHTML = 'Hello, world!';

    list.insertBefore(newLi, list.children[1]);
</script>

<script>
    ol.before('before');
    ol.after('after');

    let prepend = document.createElement('li');
    prepend.innerHTML = 'prepend';
    ol.prepend(prepend);

    let append = document.createElement('li');
    append.innerHTML = 'append';
    ol.append(append);
</script>

// elem.insertAdjacentHTML(where, html)
<div id="div"></div>
<script>
    div.insertAdjacentHTML('beforebegin', '<p>Hello</p>');
    div.insertAdjacentHTML('afterend', '<p>Bye</p>');
</script>

// Would lead to
<p>Hello</p>
<div id="div"></div>
<p>Bye</p>

/*
The call elem.cloneNode(true) creates a “deep” clone of the element – with all attributes and
subelements. If we call elem.cloneNode(false), then the clone is made without child elements.
*/
<style>
    .alert {
        padding: 15px;
        border: 1px solid #d6e9c6;
        border-radius: 4px;
        color: #3c763d;
        background-color: #dff0d8;
    }
</style>

<div class="alert" id="div">
    <strong>Hi there!</strong> You've read an important message.
</div>

<script>
    let div2 = div.cloneNode(true); // clone the message
    div2.querySelector('strong').innerHTML = 'Bye there!'; // change the clone

    div.after(div2); // show the clone after the existing div
</script>

/*
DocumentFragment is a special DOM node that serves as a wrapper to pass around groups of nodes. We
can append other nodes to it, but when we insert it somewhere, then it “disappears”, leaving its
content inserted instead. For example, getListContent below generates a fragment with <li> items,
that are later inserted into <ul>.
*/
<ul id="ul"></ul>

<script>
    function getListContent() {
        let fragment = new DocumentFragment();

        for(let i=1; i<=3; i++) {
            let li = document.createElement('li');
            li.append(i);
            fragment.append(li);
        }

        return fragment;
    }

    ul.append(getListContent()); // (*)
</script>

// At the last line (*) we append DocumentFragment, resulting in:
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>

/*
To remove nodes, there are the following methods:

1) parentElem.removeChild(node) - Removes node from parentElem (assuming it’s a child).
2) node.remove() - Removes the node from its place.
*/
<style>
    .alert {
        padding: 15px;
        border: 1px solid #d6e9c6;
        border-radius: 4px;
        color: #3c763d;
        background-color: #dff0d8;
    }
</style>

<script>
    let div = document.createElement('div');
    div.className = "alert alert-success";
    div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

    document.body.append(div);
    setTimeout(() => div.remove(), 1000);
    // or setTimeout(() => document.body.removeChild(div), 1000);
</script>
