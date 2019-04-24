/*
There are generally two ways to style an element:

1) Create a class in CSS and add it: <div class="...">
2) Write properties directly into style: <div style="...">.

CSS is always the preferred way – not only for HTML, but in JavaScript as well. We should only
manipulate the style property if classes “can’t handle it”. For instance, style is acceptable if we
calculate coordinates of an element dynamically and want to set them from JavaScript.
*/

/*
Changing a class is one of the most often used actions in scripts. In the ancient time, there was a
limitation in JavaScript: a reserved word like "class" could not be an object property. That
limitation does not exist now, but at that time it was impossible to have a "class" property, like
elem.class. So for classes the similar-looking property "className" was introduced: the
elem.className corresponds to the "class" attribute.
*/
<body class="main page">
    <script>
        alert(document.body.className); // main page
    </script>
</body>

/*
If we assign something to elem.className, it replaces the whole strings of classes. Sometimes that’s
what we need, but often we want to add/remove a single class. There’s another property for that:
elem.classList. The elem.classList is a special object with methods to add/remove/toggle classes.
Methods of classList:

1) elem.classList.add/remove("class") – adds/removes the class.
2) elem.classList.toggle("class") – if the class exists, then removes it, otherwise adds it.
3) elem.classList.contains("class") – returns true/false, checks for the given class.
*/
<body class="main page">
    <script>
        // add a class
        document.body.classList.add('article');

        alert(document.body.className); // main page article
    </script>
</body>

/*
The property elem.style is an object that corresponds to what’s written in the "style" attribute.
Setting elem.style.width="100px" works as if we had in the attribute style="width:100px". For
multi-word property the camelCase is used:

1) background-color  => elem.style.backgroundColor
2) z-index           => elem.style.zIndex
3) border-left-width => elem.style.borderLeftWidth
*/

/*
Sometimes we want to assign a style property, and later remove it. For instance, to hide an
element, we can set elem.style.display = "none". Then later we may want to remove the
style.display as if it were not set. Instead of delete elem.style.display we should assign an empty
string to it: elem.style.display = "".
*/

// For this code, the <body> "blinks"
document.body.style.display = "none"; // hide
setTimeout(() => document.body.style.display = "", 1000); // back to normal

/*
CSS units must be provided in style values. For instance, we should not set elem.style.top to 10,
but rather to 10px.
*/
<body>
    <script>
        // doesn't work!
        document.body.style.margin = 20;
        alert(document.body.style.margin); // '' (empty string, the assignment is ignored)

        // now add the CSS unit (px) - and it works
        document.body.style.margin = '20px';
        alert(document.body.style.margin); // 20px

        alert(document.body.style.marginTop); // 20px
        alert(document.body.style.marginLeft); // 20px
    </script>
</body>
