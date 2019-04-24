/*
Capturing and bubbling allow us to implement one of most powerful event handling patterns called
event delegation. The idea is that if we have a lot of elements handled in a similar way, then
instead of assigning a handler to each of them – we put a single handler on their common ancestor.
In the handler we get event.target, see where the event actually happened and handle it.
*/

// For HTML shown below
<table>
    <tr>
        <th colspan="3"><em>Bagua</em> Chart: Direction, Element, Color, Meaning</th>
    </tr>
    <tr>
        <td>...<strong>Northwest</strong>...</td>
        <td>...</td>
        <td>...</td>
    </tr>
    <tr>...2 more lines of this kind...</tr>
    <tr>...2 more lines of this kind...</tr>
</table>

/*
Instead of assign an onclick handler to each <td> (can be many) – we’ll setup the “catch-all”
handler on <table> element. It will use event.target to get the clicked element and highlight it.
*/
let selectedTd;

table.onclick = function(event) {
    let target = event.target; // where was the click?
    if (target.tagName != 'TD') return; // not on TD? Then we're not interested
    highlight(target); // highlight it
};

function highlight(td) {
    if (selectedTd) { // remove the existing highlight if any
        selectedTd.classList.remove('highlight');
    }
    selectedTd = td;
    selectedTd.classList.add('highlight'); // highlight the new td
}

/*
There’s a drawback however, the click may occur not on the <td>, but inside it. In the handler
table.onclick we should take such event.target and find out whether the click was inside <td> or
not using the steps below:

1) The method elem.closest(selector) returns the nearest ancestor that matches the selector. In our
case we look for <td> on the way up from the source element.
2) If event.target is not inside any <td>, then the call returns null, and we don’t have to do
anything.
3) In case of nested tables, event.target may be a <td> lying outside of the current table. So we
check if that’s actually our table’s <td>.
4) And, if it’s so, then highlight it.
*/
table.onclick = function(event) {
    let td = event.target.closest('td'); // (1)
    if (!td) return; // (2)
    if (!table.contains(td)) return; // (3)
    highlight(td); // (4)
};

/*
The event delegation may be used to optimize event handling. We use a single handler for similar
actions on many elements. Like we did it for highlighting <td>. But we can also use a single handler
as an entry point for many different things. For instance, we want to make a menu with buttons
“Save”, “Load”, “Search” and so on. And there’s an object with methods save, load, search…. The
first idea may be to assign a separate handler to each button. But there’s a more elegant solution.
We can add a handler for the whole menu and data-action attributes for buttons that has the method
to call. The handler reads the attribute and executes the method.
*/
<div id="menu">
    <button data-action="save">Save</button>
    <button data-action="load">Load</button>
    <button data-action="search">Search</button>
</div>

<script>
    class Menu {
        constructor(elem) {
            this._elem = elem;
            elem.onclick = this.onClick.bind(this); // (*)
        }

        save() {
            alert('saving');
        }

        load() {
            alert('loading');
        }

        search() {
            alert('searching');
        }

        onClick(event) {
            let action = event.target.dataset.action;
            if (action) {
                this[action]();
            }
        };
    }

    new Menu(menu);
</script>

/*
We can also use event delegation to add “behaviors” to elements declaratively, with special
attributes and classes. The pattern has two parts:

1) We add a special attribute to an element.
2) A document-wide handler tracks events, and if an event happens on an attributed element –
performs the action.
*/

// The attribute data-counter adds a behavior: “increase on click” to buttons.
Counter: <input type="button" value="1" data-counter></input>
One more counter: <input type="button" value="2" data-counter></input>

<script>
    document.addEventListener('click', function(event) {

        if (event.target.dataset.counter != undefined) { // if the attribute exists...
            event.target.value++;
        }

    });
</script>

/*
A click on an element with the attribute data-toggle-id will show/hide the element with the
given id.
*/
<button data-toggle-id="subscribe-mail">
    Show the subscription form
</button>

<form id="subscribe-mail" hidden>
    Your mail: <input type="email">
</form>

<script>
    document.addEventListener('click', function(event) {
        let id = event.target.dataset.toggleId;
        if (!id) return;
        let elem = document.getElementById(id);
        elem.hidden = !elem.hidden;
    });
</script>
