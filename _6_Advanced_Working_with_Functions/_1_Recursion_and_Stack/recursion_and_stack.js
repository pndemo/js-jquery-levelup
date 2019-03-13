/*
Recursion is a programming pattern that is useful in situations when a task can be naturally
split into several tasks of the same kind. When a function calls itself, that’s recursion.
*/
function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

alert( pow(2, 3) ); // 8

// A recursive (recursively-defined) data structure is a structure that replicates itself in parts.

/*
Linked lists - Imagine, we want to store an ordered list of objects. The natural choice would be an
array. But there’s a problem with arrays. The “delete element” and “insert element” operations are
expensive. Alternatively, if we really need fast insertion/deletion, we can choose another data
structure called a linked list. The linked list element is recursively defined as an object with:
- value.
- next property referencing the next linked list element or null if that’s the end.
*/
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

// The list can be easily split into multiple parts and later joined back.
let secondList = list.next.next;
list.next.next = null;
list.next.next = secondList;

/*
And surely we can insert or remove items in any place. For instance, to prepend a new value, we need
to update the head of the list.
*/
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

// prepend the new value to the list.
list = { value: "new item", next: list };

// To remove a value from the middle, change next of the previous one.
list.next = list.next.next;
