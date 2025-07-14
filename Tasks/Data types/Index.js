// 1) What is the output of the script?

let name = "Ilya";
alert( `hello ${1}` ); // ?
alert( `hello ${"name"}` ); // ?
alert( `hello ${name}` ); // ?

//Backticks embed the expression inside ${...} into the string.

let name = "Ilya";

// the expression is a number 1
alert( `hello ${1}` ); // hello 1

// the expression is a string "name"
alert( `hello ${"name"}` ); // hello name

// the expression is a variable, embed it
alert( `hello ${name}` ); // hello Ilya

// 2) Create a web-page that asks for a name and outputs it.

let name = prompt("What is your name?", "");
alert(name);
