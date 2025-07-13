// 1) What are the final values of all variables a, b, c and d after the code below?
let a = 1, b = 1;
let c = ++a; // ?
let d = b++; // ?

//The answer is:

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once

// 2) What are the values of a and x after the code below?

let a = 2;
let x = 1 + (a *= 2);

//The answer is:

a = 4 //(multiplied by 2)
x = 5 //(calculated as 1 + 4)

// 3) What are results of these expressions?

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2

//The answers is:
"" + 1 + 0 = "10" 
"" - 1 + 0 = -1 
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5"
"  -9  " - 5 = -14 
null + 1 = 1 
undefined + 1 = NaN 
" \t \n" - 2 = -2 

/*
    4) Here’s a code that asks the user for two numbers and shows their sum.
    It works incorrectly. The output in the example below is 12 (for default prompt values).
    Why? Fix it. The result should be 3.
*/ 

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

//The reason is that prompt returns user input as a string.
//So variables have values "1" and "2" respectively.

let a = "1"; // prompt("First number?", 1);
let b = "2"; // prompt("Second number?", 2);
alert(a + b); // 12

//What we should do is to convert strings to numbers before +. For example, using Number() or prepending them with +.
//For example, right before prompt:

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 3

//Or in the alert:

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3
//Using both unary and binary + in the latest code.
