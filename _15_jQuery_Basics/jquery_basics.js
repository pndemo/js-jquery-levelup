/*
jQuery is a lightweight, "write less, do more", JavaScript library. The purpose of jQuery is to make
it much easier to use JavaScript on your website. jQuery takes a lot of common tasks that require
many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a
single line of code. jQuery also simplifies a lot of the complicated things from JavaScript, like
AJAX calls and DOM manipulation. The jQuery library contains the following features:

1) HTML/DOM manipulation
2) CSS manipulation
3) HTML event methods
4) Effects and animations
5) AJAX
6) Utilities

There are lots of other JavaScript frameworks out there, but jQuery seems to be the most popular,
and also the most extendable.
*/

/*
There are various ways to start using jQuery on a web site. One can either:

1) Download the jQuery library from jQuery.com or
2) Include jQuery from a CDN, like Google.
*/

/*
The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the
element(s). Basic syntax is: $(selector).action().

1) A $ sign to define/access jQuery
2) A (selector) to "query (or find)" HTML elements
3) A jQuery action() to be performed on the element(s)

Examples are shown below.
*/
$(this).hide() // hides the current element.
$("p").hide() // hides all <p> elements.
$(".test").hide() // hides all elements with class="test".
$("#test").hide() // hides the element with id="test".

/*
jQuery methods are placed inside a document ready event to prevent any jQuery code from running
before the document is finished loading (is ready). It is good practice to wait for the document to
be fully loaded and ready before working with it. This also allows you to have your JavaScript code
before the body of your document, in the head section.
*/
$(document).ready(function(){

    // jQuery methods go here...
  
});

// The jQuery team has also created an even shorter method for the document ready event.
$(function(){

    // jQuery methods go here...
  
});

/*
jQuery selectors allow you to select and manipulate HTML element(s). jQuery selectors are used to
"find" (or select) HTML elements based on their name, id, classes, types, attributes, values of
attributes and much more. It's based on the existing CSS Selectors, and in addition, it has some
own custom selectors. All selectors in jQuery start with the dollar sign and parentheses: $(). The
jQuery element selector selects elements based on the element name. You can select all <p> elements
on a page as shown below.
*/
$("p")

// When a user clicks on a button, all <p> elements will be hidden.
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});

// The jQuery #id selector uses the id attribute of an HTML tag to find the specific element.
$("#test")

// The jQuery .class selector finds elements with a specific class.
$(".test")

// More jQuery selectors
$("*") // Selects all elements	
$(this)	// Selects the current HTML element	
$("p.intro") // Selects all <p> elements with class="intro"	
$("p:first") // Selects the first <p> element	
$("ul li:first") // Selects the first <li> element of the first <ul>	
$("ul li:first-child") // Selects the first <li> element of every <ul>	
$("[href]")	// Selects all elements with an href attribute	
$("a[target='_blank']") // Selects all <a> elements with a target attribute value equal to "_blank"	
$("a[target!='_blank']") // Selects all <a> elements with a target attribute value NOT equal to "_blank"	
$(":button") // Selects all <button> elements and <input> elements of type="button"	
$("tr:even") // Selects all even <tr> elements	
$("tr:odd")	// Selects all odd <tr> elements

/*
If your website contains a lot of pages, and you want your jQuery functions to be easy to maintain,
you can put your jQuery functions in a separate .js file.
*/

/*
All the different visitors' actions that a web page can respond to are called events. An event
represents the precise moment when something happens. For example:

1) Moving a mouse over an element
2) Selecting a radio button
3) Clicking on an element

The term "fires/fired" is often used with events. Example: "The keypress event is fired, the moment
you press a key". Below are some common DOM events:

Mouse Events	Keyboard Events   Form Events	Document/Window Events
click	        keypress	      submit	    load
dblclick	    keydown	          change	    resize
mouseenter	    keyup	          focus	        scroll
mouseleave	 	                  blur	        unload
*/

/*
In jQuery, most DOM events have an equivalent jQuery method. To assign a click event to all
paragraphs on a page, you can do as shown below.
*/
$("p").click();

/*
The next step is to define what should happen when the event fires. You must pass a function to the
event.
*/
$("p").click(function(){
    // action goes here!!
});

/*
The most commonly used jQuery Event methods are:

1) $(document).ready() - allows us to execute a function when the document is fully loaded.
2) click() - attaches an event handler function to an HTML element. The function is executed when
the user clicks on the HTML element.
3) dblclick() - attaches an event handler function to an HTML element. The function is executed
when the user double-clicks on the HTML element.
4) mouseenter() - attaches an event handler function to an HTML element. The function is executed
when the mouse pointer enters the HTML element.
5) mouseleave() - attaches an event handler function to an HTML element. The function is executed
when the mouse pointer leaves the HTML element.
6) mousedown() - attaches an event handler function to an HTML element. The function is executed,
when the left, middle or right mouse button is pressed down, while the mouse is over the HTML
element.
7) mouseup() - attaches an event handler function to an HTML element. The function is executed, when
the left, middle or right mouse button is released, while the mouse is over the HTML element.
8) hover() - takes two functions and is a combination of the mouseenter() and mouseleave() methods.
The first function is executed when the mouse enters the HTML element, and the second function is
executed when the mouse leaves the HTML element
9) focus() - The focus() method attaches an event handler function to an HTML form field.
10) blur() - attaches an event handler function to an HTML form field. The function is executed when
the form field loses focus.
*/

// The on() method attaches one or more event handlers for the selected elements.
$("p").on({
    mouseenter: function(){
        $(this).css("background-color", "lightgray");
    }, 
    mouseleave: function(){
        $(this).css("background-color", "lightblue");
    }, 
    click: function(){
        $(this).css("background-color", "yellow");
    } 
});
