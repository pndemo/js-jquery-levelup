// With jQuery, you can hide and show HTML elements with the hide() and show() methods.
$("#hide").click(function(){
    $("p").hide();
});
  
$("#show").click(function(){
    $("p").show();
});

/*
The optional speed parameter specifies the speed of the hiding/showing, and can take the following
values: "slow", "fast", or milliseconds. The optional callback parameter is a function to be
executed after the hide() or show() method completes (you will learn more about callback functions
in a later chapter). The following example demonstrates the speed parameter with hide().
*/
$("button").click(function(){
    $("p").hide(1000);
});

/*
You can also toggle between hiding and showing an element with the toggle() method. Shown elements
are hidden and hidden elements are shown.
*/
$("button").click(function(){
    $("p").toggle();
});

/*
With jQuery you can fade an element in and out of visibility. jQuery has the following fade methods:

1) fadeIn()
2) fadeOut()
3) fadeToggle()
4) fadeTo()
*/

/*
The jQuery slide methods slide elements up and down. With jQuery you can create a sliding effect on
elements. jQuery has the following slide methods:

1) slideDown()
2) slideUp()
3) slideToggle()
*/

/*
The jQuery animate() method is used to create custom animations. The required params parameter
defines the CSS properties to be animated. The optional speed parameter specifies the duration of
the effect. It can take the following values: "slow", "fast", or milliseconds. The optional callback
parameter is a function to be executed after the animation completes. The following example
demonstrates a simple use of the animate() method; it moves a <div> element to the right, until it
has reached a left property of 250px.
*/
$("button").click(function(){
    $("div").animate({left: '250px'});
}); 

/*
It is also possible to define relative values (the value is then relative to the element's current
value). This is done by putting += or -= in front of the value.
*/
$("button").click(function(){
    $("div").animate({
        left: '250px',
        height: '+=150px',
        width: '+=150px'
    });
});

// You can even specify a property's animation value as "show", "hide", or "toggle".
$("button").click(function(){
    $("div").animate({
        height: 'toggle'
    });
});

/*
By default, jQuery comes with queue functionality for animations. This means that if you write
multiple animate() calls after each other, jQuery creates an "internal" queue with these method
calls. Then it runs the animate calls ONE by ONE. So, if you want to perform different animations
after each other, we take advantage of the queue functionality.
*/
$("button").click(function(){
    var div = $("div");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
});

/*
The jQuery stop() method is used to stop an animation or effect before it is finished. The stop()
method works for all jQuery effect functions, including sliding, fading and custom animations. The
optional stopAll parameter specifies whether also the animation queue should be cleared or not.
Default is false, which means that only the active animation will be stopped, allowing any queued
animations to be performed afterwards. The optional goToEnd parameter specifies whether or not to
complete the current animation immediately. Default is false. So, by default, the stop() method
kills the current animation being performed on the selected element. The following example
demonstrates the stop() method, with no parameters.
*/
$("#stop").click(function(){
    $("#panel").stop();
});

/*
JavaScript statements are executed line by line. However, with effects, the next line of code can be
run even though the effect is not finished. This can create errors. To prevent this, you can create
a callback function. A callback function is executed after the current effect is finished. Typical
syntax is $(selector).hide(speed,callback). The example below has a callback parameter that is a
function that will be executed after the hide effect is completed.
*/
$("button").click(function(){
    $("p").hide("slow", function(){
        alert("The paragraph is now hidden");
    });
});

/*
There is a technique called chaining, that allows us to run multiple jQuery commands, one after the
other, on the same element(s). To chain an action, you simply append the action to the previous
action. The following example chains together the css(), slideUp(), and slideDown() methods. The
"p1" element first changes to red, then it slides up, and then it slides down.
*/
$("#p1").css("color", "red").slideUp(2000).slideDown(2000);
