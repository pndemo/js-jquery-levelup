/*
Before we get to keyboard, please note that on modern devices there are other ways to input. For
instance, people use speech recognition (especially on mobile devices) or copy/paste with the mouse.
So if we want to track any input into an <input> field, then keyboard events are not enough. There’s
another event named input to handle changes of an <input> field, by any means. And it may be a
better choice for such task. Keyboard events should be used when we want to handle keyboard actions
(virtual keyboard also counts). For instance, to react on arrow keys Up and Down or hotkeys
(including combinations of keys).
*/

/*
The keydown events happens when a key is pressed down, and then keyup – when it’s released. The key
property of the event object allows to get the character, while the code property of the event
object allows to get the “physical key code”. For instance, the same key Z can be pressed with or
without Shift. That gives us two different characters: lowercase z and uppercase Z. The event.key is
exactly the character, and it will be different. But event.code is the same. If a user works with
different languages, then switching to another language would make a totally different character
instead of "Z". That will become the value of event.key, while event.code is always the same. What
if a key does not give any character? For instance, Shift or F1 or others. For those keys event.key
is approximately the same as event.code. Please note that event.code specifies exactly which key is
pressed. For instance, most keyboards have two Shift keys: on the left and on the right side. The
event.code tells us exactly which one was pressed, and event.key is responsible for the “meaning” of
the key: what it is (a “Shift”). Let’s say, we want to handle a hotkey: Ctrl+Z (or Cmd+Z for Mac).
Most text editors hook the “Undo” action on it. We can set a listener on keydown and check which key
is pressed – to detect when we have the hotkey.
*/

/*
If a key is being pressed for a long enough time, it starts to repeat: the keydown triggers again
and again, and then when it’s released we finally get keyup. So it’s kind of normal to have many
keydown and a single keyup. For all repeating keys the event object has event.repeat property set
to true.
*/

/*
Default actions vary, as there are many possible things that may be initiated by the keyboard. For
instance:

1) A character appears on the screen (the most obvious outcome).
2) A character is deleted (Delete key).
3) The page is scrolled (PageDown key).
4) The browser opens the “Save Page” dialog (Ctrl+S).

Preventing the default action on keydown can cancel most of them, with the exception of OS-based
special keys. For instance, on Windows Alt+F4 closes the current browser window. And there’s no way
to stop it by preventing the default action in JavaScript. For instance, the <input> below expects
a phone number, so it does not accept keys except digits, +, () or -.
*/
<script>
    function checkPhoneKey(key) {
        return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-';
    }
</script>
<input onkeydown="return checkPhoneKey(event.key)" placeholder="Phone, please" type="tel">
</input>

/*
Please note that special keys like Backspace, Left, Right, Ctrl+V do not work in the input. That’s a
side-effect of the strict filter checkPhoneKey. It can be modified as shown below.
*/
<script>
    function checkPhoneKey(key) {
        return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-' ||
            key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace';
    }
</script>
<input onkeydown="return checkPhoneKey(event.key)" placeholder="Phone, please" type="tel">
</input>
