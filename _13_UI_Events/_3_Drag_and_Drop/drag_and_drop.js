/*
Drag’n’Drop is a great interface solution. Taking something, dragging and dropping is a clear and
simple way to do many things, from copying and moving (see file managers) to ordering. The basic
Drag’n’Drop algorithm looks like this:

1) Catch mousedown on a draggable element.
2) Prepare the element for moving (maybe create a copy of it or whatever).
3) Then on mousemove move it by changing left/top and position:absolute.
4) On mouseup (button release) – perform all actions related to a finished Drag’n’Drop.
*/
