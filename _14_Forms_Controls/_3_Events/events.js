/*
The change event triggers when the element has finished changing. For text inputs that means that
the event occurs when it loses focus. For instance, while we are typing in the text field below –
there’s no event. But when we move the focus somewhere else, for instance, click on a button – there
will be a change event. For other elements: select, input type=checkbox/radio it triggers right
after the selection changes.
*/
<input type="text" onchange="alert(this.value)"></input>
<input type="button" value="Button"></input>

/*
The input event triggers every time a value is modified. For instance, the code below handles every
modification of an <input> event. Unlike keyboard events it works on any value change, even those
that does not involve keyboard actions: pasting with a mouse or using speech recognition to dictate
the text.
*/
<input type="text" id="input"> oninput:</input>
<span id="result"></span>
<script>
    input.oninput = function() {
        result.innerHTML = input.value;
    };
</script>

/*
Cut, copy, paste events occur on cutting/copying/pasting a value. They belong to ClipboardEvent
class and provide access to the data that is copied/pasted. We also can use event.preventDefault()
to abort the action.
*/
<input type="text" id="input">
<script>
    input.oncut = input.oncopy = input.onpaste = function(event) {
        alert(event.type + ' - ' + event.clipboardData.getData('text/plain'));
        return false;
    };
</script>
