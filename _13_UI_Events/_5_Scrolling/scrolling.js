/*
Scroll events allow to react on a page or element scrolling. There are quite a few good things we
can do here. For instance:

1) Show/hide additional controls or information depending on where in the document the user is.
2) Load more data when the user scrolls down till the end of the page.
*/

// Below is a small function to show the current scroll
window.addEventListener('scroll', function() {
    document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
});

/*
We can’t prevent scrolling by using event.preventDefault() in onscroll listener, because it triggers
after the scroll has already happened. But we can prevent scrolling by event.preventDefault() on an
event that causes the scroll. For instance:

1) wheel event – a mouse wheel roll (a “scrolling” touchpad action generates it too).
2) keydown event for pageUp and pageDown.

Sometimes that may help. But there are more ways to scroll, so it’s quite hard to handle all of
them. So it’s more reliable to use CSS to make something unscrollable, like overflow property.
*/
