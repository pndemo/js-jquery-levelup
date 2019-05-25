/*
One very important part of jQuery is the possibility to manipulate the DOM. jQuery comes with a
bunch of DOM related methods that make it easy to access and manipulate elements and attributes.

Three simple, but useful, jQuery methods for DOM manipulation are:

1) text() - Sets or returns the text content of selected elements.
2) html() - Sets or returns the content of selected elements (including HTML markup).
3) val() - Sets or returns the value of form fields.

The following example demonstrates how to get content with the jQuery text() and html() methods.
*/
$("#btn1").click(function(){
    alert("Text: " + $("#test").text());
});
$("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
});

/*
The following example demonstrates how to get the value of an input field with the jQuery val()
method.
*/
$("#btn1").click(function(){
    alert("Value: " + $("#test").val());
});

/*
The jQuery attr() method is used to get attribute values. The following example demonstrates how to
get the value of the href attribute in a link.
*/
$("button").click(function(){
    alert($("#w3s").attr("href"));
});

/*
The following example demonstrates how to set content with the jQuery text(), html(), and val()
methods.
*/
$("#btn1").click(function(){
    $("#test1").text("Hello world!");
});
$("#btn2").click(function(){
    $("#test2").html("<b>Hello world!</b>");
});
$("#btn3").click(function(){
    $("#test3").val("Dolly Duck");
});

/*
All of the three jQuery methods above: text(), html(), and val(), also come with a callback
function. The callback function has two parameters: the index of the current element in the list
of elements selected and the original (old) value. You then return the string you wish to use as the
new value from the function. The following example demonstrates text() and html() with a callback
function.
*/
$("#btn1").click(function(){
    $("#test1").text(function(i, origText){
        return "Old text: " + origText + " New text: Hello world!
        (index: " + i + ")";
    });
});
  
$("#btn2").click(function(){
    $("#test2").html(function(i, origText){
        return "Old html: " + origText + " New html: Hello <b>world!</b>
        (index: " + i + ")";
    });
});

/*
The jQuery attr() method is also used to set/change attribute values. The following example
demonstrates how to change (set) the value of the href attribute in a link.
*/
$("button").click(function(){
    $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
});

/*
The attr() method also allows you to set multiple attributes at the same time. The following example
demonstrates how to set both the href and title attributes at the same time.
*/
$("button").click(function(){
    $("#w3s").attr({
        "href" : "https://www.w3schools.com/jquery/",
        "title" : "W3Schools jQuery Tutorial"
    });
});

/*
The jQuery method attr(), also comes with a callback function. The callback function has two
parameters: the index of the current element in the list of elements selected and the original (old)
attribute value. You then return the string you wish to use as the new attribute value from the
function. The following example demonstrates attr() with a callback function.
*/
$("button").click(function(){
    $("#w3s").attr("href", function(i, origValue){
        return origValue + "/jquery/"; 
    });
});

/*
With jQuery, it is easy to add new elements/content. The following popular jQuery methods
that are used to add new content.

1) append() - Inserts content at the end of the selected elements
2) prepend() - Inserts content at the beginning of the selected elements
3) after() - Inserts content after the selected elements
4) before() - Inserts content before the selected elements

In the following example, we create several new elements. The elements are created with text/HTML,
jQuery, and JavaScript/DOM. Then we append the new elements to the text with the append() method
(this would have worked for prepend() too).
*/
function appendText() {
    var txt1 = "<p>Text.</p>";               // Create element with HTML  
    var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
    var txt3 = document.createElement("p");  // Create with DOM
    txt3.innerHTML = "Text.";
    $("body").append(txt1, txt2, txt3);      // Append the new elements 
}

/*
Also, both the after() and before() methods can take an infinite number of new elements as
parameters. The new elements can be generated with text/HTML (like we have done in the example
above), with jQuery, or with JavaScript code and DOM elements. In the following example, we create
several new elements. The elements are created with text/HTML, jQuery, and JavaScript/DOM. Then we
insert the new elements to the text with the after() method (this would have worked for before()
too).
*/
function afterText() {
    var txt1 = "<b>I </b>";                    // Create element with HTML  
    var txt2 = $("<i></i>").text("love ");     // Create with jQuery
    var txt3 = document.createElement("b");    // Create with DOM
    txt3.innerHTML = "jQuery!";
    $("img").after(txt1, txt2, txt3);          // Insert new elements after <img>
}

/*
To remove elements and content, there are mainly two jQuery methods:

1) remove() - Removes the selected element (and its child elements).
2) empty() - Removes the child elements from the selected element.
*/
$("#div1").remove();
$("#div1").empty();

/*
The jQuery remove() method also accepts one parameter, which allows you to filter the elements to be
removed. The parameter can be any of the jQuery selector syntaxes. The following example removes all
<p> elements with class="test".
*/
$("p").remove(".test");

// The following example removes all <p> elements with class="test" or class="demo".
$("p").remove(".test, .demo");

/*
jQuery has several methods for CSS manipulation. We will look at the following methods:

1) addClass() - Adds one or more classes to the selected elements
2) removeClass() - Removes one or more classes from the selected elements
3) toggleClass() - Toggles between adding/removing classes from the selected elements
4) css() - Sets or returns the style attribute

The following example shows how to add class attributes to different elements. Of course you can
select multiple elements, when adding classes.
*/
$("button").click(function(){
    $("h1, h2, p").addClass("blue");
    $("div").addClass("important");
});

// You can also specify multiple classes within the addClass() method.
$("button").click(function(){
    $("#div1").addClass("important blue");
});

// The following example shows how to remove a specific class attribute from different elements.
$("button").click(function(){
    $("h1, h2, p").removeClass("blue");
});

/*
The following example will show how to use the jQuery toggleClass() method. This method toggles
between adding/removing classes from the selected elements.
*/
$("button").click(function(){
    $("h1, h2, p").toggleClass("blue");
});

// The css() method sets or returns one or more style properties for the selected elements.
$("p").css("background-color");
$("p").css("background-color", "yellow");

// To set multiple CSS properties, use the following syntax.
$("p").css({"background-color": "yellow", "font-size": "200%"});

/*
jQuery has several important methods for working with dimensions:

1) width()
2) height()
3) innerWidth()
4) innerHeight()
5) outerWidth()
6) outerHeight()
*/

/*
The width() method sets or returns the width of an element (excludes padding, border and margin).
The height() method sets or returns the height of an element (excludes padding, border and margin).
The following example returns the width and height of a specified <div> element.
*/
$("button").click(function(){
    var txt = "";
    txt += "Width: " + $("#div1").width() + "</br>";
    txt += "Height: " + $("#div1").height();
    $("#div1").html(txt);
});

/*
The innerWidth() method returns the width of an element (includes padding). The innerHeight()
method returns the height of an element (includes padding). The following example returns the
inner-width/height of a specified <div> element.
*/
$("button").click(function(){
    var txt = "";
    txt += "Inner width: " + $("#div1").innerWidth() + "</br>";
    txt += "Inner height: " + $("#div1").innerHeight();
    $("#div1").html(txt);
});

/*
The outerWidth() method returns the width of an element (includes padding and border). The
outerHeight() method returns the height of an element (includes padding and border). The following
example returns the outer-width/height of a specified <div> element.
*/
$("button").click(function(){
    var txt = "";
    txt += "Outer width: " + $("#div1").outerWidth() + "</br>";
    txt += "Outer height: " + $("#div1").outerHeight();
    $("#div1").html(txt);
});

/*
The outerWidth(true) method returns the width of an element (includes padding, border, and margin).
The outerHeight(true) method returns the height of an element (includes padding, border, and
margin).
*/
$("button").click(function(){
    var txt = "";
    txt += "Outer width (+margin): " + $("#div1").outerWidth(true) + "</br>";
    txt += "Outer height (+margin): " + $("#div1").outerHeight(true);
    $("#div1").html(txt);
});

/*
The following example returns the width and height of the document (the HTML document) and window
(the browser viewport).
*/
$("button").click(function(){
    var txt = "";
    txt += "Document width/height: " + $(document).width();
    txt += "x" + $(document).height() + "\n";
    txt += "Window width/height: " + $(window).width();
    txt += "x" + $(window).height();
    alert(txt);
});

// The following example sets the width and height of a specified <div> element.
$("button").click(function(){
    $("#div1").width(500).height(500);
});
