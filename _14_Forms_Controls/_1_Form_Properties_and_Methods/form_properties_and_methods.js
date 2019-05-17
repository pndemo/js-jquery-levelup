/*
Forms and control elements, such as <input> have a lot of special properties and events. Working
with forms can be much more convenient if we know them.
*/

/*
Document forms are members of the special collection document.forms. That’s a named collection: we
can use both the name and the number to get the form.
*/
document.forms.my - the form with name="my"
document.forms[0] - the first form in the document

// When we have a form, then any element is available in the named collection form.elements.
<form name="my">
    <input name="one" value="1"></input>
    <input name="two" value="2"></input>
</form>

<script>
    // get the form
    let form = document.forms.my; // <form name="my"> element

    // get the element
    let elem = form.elements.one; // <input name="one"> element

    alert(elem.value); // 1
</script>

/*
For any element, the form is available as element.form. So a form references all elements, and
elements reference the form.
*/
<form id="form">
    <input type="text" name="login">
</form>

<script>
    // form -> element
    let login = form.login;

    // element -> form
    alert(login.form); // HTMLFormElement
</script>

/*
A <select> element has 3 important properties

1) select.options – the collection of <option> elements,
2) select.value – the value of the chosen option,
3) select.selectedIndex – the number of the selected option.

So we have three ways to set the value of a <select>:

1) Find the needed <option> and set option.selected to true.
2) Set select.value to the value.
3) Set select.selectedIndex to the number of the option.
*/
<select id="select">
    <option value="apple">Apple</option>
    <option value="pear">Pear</option>
    <option value="banana">Banana</option>
</select>

<script>
    // all three lines do the same thing
    select.options[2].selected = true;
    select.selectedIndex = 2;
    select.value = 'banana';
</script>
