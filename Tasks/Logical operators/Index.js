// 1) What is the code below going to output?

alert( null || 2 || undefined );
// The answer is 2, that’s the first truthy value.

// 2) What will the code below output?

alert(alert(1) || 2 || alert(3));

/*
    The answer: first 1, then 2.

    Explanation:
      The call to alert does not return a value. Or, in other words, it returns undefined.
      The first OR || evaluates its left operand alert(1). That shows the first message with 1.
      The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
      The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
      There will be no 3, because the evaluation does not reach alert(3).
*/ 

// 3) What is this code going to show?

alert( 1 && null && 2 );
// The answer: null, because it’s the first falsy value from the list.

// 4) What will this code show?
alert( alert(1) && alert(2) );

/* 
    The answer: 1, and then undefined.
    Explanation:
      The call to alert returns undefined (it just shows a message, so there’s no meaningful return).
      Because of that, && evaluates the left operand (outputs 1), and immediately stops,
      because undefined is a falsy value. And && looks for a falsy value and returns it, so it’s done.
*/

// 5) What will the result be?

alert( null || 2 && 3 || 4 );

/*
    The answer: 3.

    Explanation:
      The precedence of AND && is higher than ||, so it executes first.
      The result of 2 && 3 = 3, so the expression becomes:
      null || 3 || 4
      Now the result is the first truthy value: 3.
*/

/*
    6) Write an if condition to check that age is between 14 and 90 inclusively.
       “Inclusively” means that age can reach the edges 14 or 90.
*/

let firstAge = 14;
let secondAge = 90;
if (firstAge >= 14 && secondAge <= 90) {
    alert('Age is between 14 and 90 inclusively');
}

/*
    7)  Write an if condition to check that age is NOT between 14 and 90 inclusively.
        Create two variants: the first one using NOT !, the second one – without it.
*/

// The first variant:
let firstAge = 14;
let secondAge = 90;
if (!age >= 14 && age2 <= 90) {
    alert('Age is NOT between 14 and 90 inclusively');
}

// The second variant:
if (firstAge < 14 || secondAge > 90) {
    alert('Age is NOT between 14 and 90 inclusively');
}

/*  8) Which of these alerts are going to execute?
       What will the results of the expressions be inside if(...)?
*/

// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );

/*
    9) Write the code which asks for a login with prompt.

       If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
       The password is checked as follows:
          • If it equals “TheMaster”, then show “Welcome!”,
          • Another string – show “Wrong password”,
          • For an empty string or cancelled input, show “Canceled”
*/

let login = prompt("Who are you?", "");
if (login === "Admin") {
    let password = prompt("Password?", "");
    if (password === "TheMaster") {
        alert("Welcome!");
    } else if (password === "" || password === null) {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
}
else if (login === "" || login === null) {
    alert("Canceled");
} else {
    alert("I don't know you");
}