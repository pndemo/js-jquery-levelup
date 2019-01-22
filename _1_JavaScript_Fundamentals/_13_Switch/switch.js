/*
A switch statement can replace multiple if checks. It gives a more descriptive way to compare
a value with multiple variants. If the equality is found, switch starts to execute the code
starting from the corresponding case, until the nearest break (or until the end of switch). If
no case is matched then the default code is executed (if it exists). If there is no break
then the execution continues with the next case without any checks.
*/
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}

// Several variants of case which share the same code can be grouped.
let a = 2 + 2;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3:
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
