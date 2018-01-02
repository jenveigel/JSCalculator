
var numString1 = '';
var numString2 = '';
var op = '';
var eq = '';
var cl = '';
var total = 0;
var display = $('#display');

var getNum = $('.number').click(function(e){

var num = parseInt($(this).text());
  if(op == ''){
      if (typeof num == 'number'){
        numString1 += num;
        console.log(numString1);
        display = display.append(num);
      }
      else {
        console.log('error');
      }
    }
    else {
      if (typeof num == 'number'){
        numString2 += num;
        console.log(numString2);
        display = display.append(num);
      }
      else{
        console.log('error2');
      }
    }
  });

/**
  I don't like the repeated code below, but when I try to use $('.operator'),
  I couldn't figure out how to override it for equals and clear. So the
  findTotal function would always go to default because it was being called
  with 'op' being equal to "=".  :( 
  */

$('#add').click(function(e){
   op = $(this).text();
      if (typeof op === 'string'){
        display.text(numString1 + ' ' + op + ' ');
      }
});

$('#subtract').click(function(e){
   op = $(this).text();
      if (typeof op === 'string'){
        display.text(numString1 + ' ' + op + ' ');
      }
});

$('#multiply').click(function(e){
   op = $(this).text();
      if (typeof op === 'string'){
        display.text(numString1 + ' ' + op + ' ');
      }
});

$('#divide').click(function(e){
   op = $(this).text();
      if (typeof op === 'string'){
        display.text(numString1 + ' ' + op + ' ');
      }
});

$('#clear').click(function(e){
  cl = $(this).text();
    if (cl === 'C') {

  numString1 = '';
  numString2 = '';
  op = '';
  display.text('');
}
});

$('#equals').click(function(e){
  eq = $(this).text();
if (eq === '='){
  display.text(findTotal);
}
  numString1 = '';
  numString2 = '';
  op = '';

});


var findTotal = function() { //change made--removed parameters numString1, numString2 & op

  switch (op) {
    case '+':
      total = parseInt(numString1) + parseInt(numString2);
      break;
    case '-':
      total = parseInt(numString1) - parseInt(numString2);
      break;
    case 'X':
      total = parseInt(numString1) * parseInt(numString2);
      break;
    case '/':
      total = parseInt(numString1) / parseInt(numString2);
      break;
    default:
      total = 'error';
  }
  // op = ''; //change made

  return total; //change made per above
}

// Have numString1 and numString2 working/storing. = being stored as op though.

/**
  I have added notes to your code ass ISSUE (#) that are prohibiting your solution
  from working. Most of the problems at the moment stem from managing the values
  of the global variables numString1, numString2, and op.

  * When you clear, or sum, you will need to reset these values to '', that is
  the default value that the rest of your code is expecting.

  The other issue is with the `findTotal` function. There are two issues catching
  you up.

  * First, the function has three parameters which share their names with your globals.
  The problem here is that you aren't passing arguments to the function when you
  invoke it, thus locally (within the function) all three of the values are `undefined`.
  You can fix this one of two ways. Either, pass the globals to the function when you
  invoke it, or remove the named parameters entirely.

  * Second, your current return value is the jQuery object representing the #display
  div, but your logic wants you to return the summed total (and only the summed total).

  You've got everything you need, it seems like you are mostly getting tripped up by
  having to juggle the state of both the global variables and the state of
  values in the view (this is probably the most common people getting into JS have).
*/

/** ISSUE 1
  $('#display').text(total); returns the jQuery object representing the displayed
  I think you just want to return the total.
*/

/** ISSUE 2
  When you invoke findTotal() above, you aren't passing the listed parameters,
  as a result within this function `op`, `numString1`, and `numString2` are
  all `undefined`.

  You can either, remove the parameters and use the global variables, or pass
  this function arguments when you call it (I would probably just remove the
  parameters...)
*/

/** ISSUE 3
  `numString2` seems to be an empty String every time, I'm guessing it isn't
  being assigned above, we'll figure it out in ISSUE 4
*/

/** ISSUE 4
  The first thing you are doing in the function is re-assigning the global `op`
  variable to whatever operator was clicked. There are two issues with this.
  1. You are using the presence of the global variable to determine whether to
  assign a `numString1` or a `numString2` a value.

  2. You probably only want to assign mathmatical operators to `op`, not 'C',
  or '='

  The easiest solution to the problem is to only assign an operator to `op` if
  it's typeof is `string` like you are checking in your third condition.

  This also leads to an issue surrounding multiple operations, namely, you are
  never unassigning an `op` (setting it back to ''). You will want to do this
  at the end of your `findTotal` function.
*/

/** ISSUE 5
  Your logic is good for determining whether or not the user is adding a first
  or second number, but you need to use string concatenation instead of assignment
  for that number. For instance. If a user clicks '2' and then '3', the number should
  be '23', not '3'.
*/

/** ISSUE 6
  Your clear button is resetting the display, but not the values, you need to
  reset the numString1, numString2, and op values to '' when clear is pressed.
*/
