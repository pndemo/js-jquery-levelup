/*
The submit event triggers when the form is submitted, it is usually used to validate the form before
sending it to the server or to abort the submission and process it in JavaScript. The method
form.submit() allows to initiate form sending from JavaScript. We can use it to dynamically create
and send our own forms to server.

There are two main ways to submit a form:

1) The first – to click <input type="submit"> or <input type="image">.
2) The second – press Enter on an input field.

Both actions lead to submit event on the form. The handler can check the data, and if there are
errors, show them and call event.preventDefault(), then the form won’t be sent to the server. In the
form below, on clicking <input type="submit">, both actions show alert and the form is not sent
anywhere due to return false.
*/
<form onsubmit="alert('submit!');return false">
    First: Enter in the input field <input type="text" value="text"></input>
    <br></br>
    Second: Click "submit": <input type="submit" value="Submit"></input>
</form>

/*
To submit a form to the server manually, we can call form.submit(). Then the submit event is not
generated. It is assumed that if the programmer calls form.submit(), then the script already did
all related processing. Sometimes that’s used to manually create and send a form as shown below.
*/
let form = document.createElement('form');
form.action = 'https://google.com/search';
form.method = 'GET';

form.innerHTML = '<input name="q" value="test">';

// the form must be in the document to submit it
document.body.append(form);
form.submit();
