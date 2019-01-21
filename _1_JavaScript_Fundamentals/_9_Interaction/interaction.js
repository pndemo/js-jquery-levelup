// Interaction: alert, prompt, confirm functions

// alert shows a message and pauses script execution until the user presses “OK”.
alert("Hello");

/*
prompt shows a modal window with a text message, an input field for the visitor, and the buttons
OK/CANCEL.
*/
let age = prompt('How old are you?', 80);

alert(`You are ${age} years old!`);

/*
The function confirm shows a modal window with a question and two buttons: OK and CANCEL.
The result is true if OK is pressed and false otherwise.
*/
let isBoss = confirm("Are you the boss?");
alert( isBoss );
