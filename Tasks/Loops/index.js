// 1) What is the last value alerted by this code? Why?

let i = 3;
while (i) {
  console.log(i--);
}

/*  answer:
  Every loop iteration decreases i by 1. The check while(i) stops the loop when i = 0.
  Hence, the steps of the loop form the following sequence (“loop unrolled”):
*/

/* 2) For every loop iteration, write down which value it outputs and then compare it with the solution.
     Both loops alert the same values, or not? 
*/

// The prefix form ++i:
let i = 0;
while (++i < 5) console.log(i);

/*  answer:
        The first value is i = 1, because ++i first increments i and then returns the new value. So the first comparison is 1 < 5 and the alert shows 1.
        Then follow 2, 3, 4… – the values show up one after another. The comparison always uses the incremented value, because ++ is before the variable.
        Finally, i = 4 is incremented to 5, the comparison while(5 < 5) fails, and the loop stops. So 5 is not shown. 
*/

// The postfix form i++:
let i = 0;
while (i++ < 5) console.log(i);

/* answer:
    The first value is again i = 1. The postfix form of i++ increments i and then returns the old value, so the comparison i++ < 5 will use i = 0 (contrary to ++i < 5).
    But the alert call is separate. It’s another statement which executes after the increment and the comparison. So it gets the current i = 1.
    Then follow 2, 3, 4…
     Let’s stop on i = 4. The prefix form ++i would increment it and use 5 in the comparison. 
     But here we have the postfix form i++. So it increments i to 5, but returns the old value.
     Hence the comparison is actually while(4 < 5) – true, and the control goes on to alert.
    The value i = 5 is the last one, because on the next step while(5 < 5) is false.
*/

/* 3) For each loop write down which values it is going to show. Then compare with the answer.
      Both loops alert same values or not?
*/ 

for (let i = 0; i < 5; i++) console.log(i);
for (let i = 0; i < 5; ++i) console.log(i);

/* answer:
    That can be easily deducted from the algorithm of for:
      1) Execute once i = 0 before everything (begin).
      2) Check the condition i < 5
      3) If true – execute the loop body alert(i), and then i++
    The increment i++ is separated from the condition check (2). That’s just another statement.
    The value returned by the increment is not used here, so there’s no difference between i++ and ++i.
*/

// 4) Rewrite the code changing the for loop to while without altering its behavior (the output should stay same)

for (let i = 0; i < 3; i++) {
  console.log(i);
}

// answer:
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

/* 5) Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
      The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
      Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
*/

let number;
do {
  number = prompt("Enter a number greater than 100:", "");
}   while (number <= 100 && number !== null && number !== "");      

/* answer:
   The loop do..while repeats while both checks are truthy:
      1) The check for num <= 100 – that is, the entered value is still not greater than 100.
      2) The check && num is false when num is null or an empty string. Then the while loop stops too.
    P.S. If num is null then num <= 100 is true, so without the 2nd check the loop wouldn’t stop if the user clicks CANCEL. Both checks are required.
*/


// 6) Write the code which outputs prime numbers in the interval from 2 to n.

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert(i); // a prime
}

// 7) Print a small triangle with "*" symbols

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// 8) Print all characters in the string "hello" on a separate line.
const str = "hello";
for (let i = 0; i <= str.length; i++){
  console.log(str[i]);
}

// 9) Print the string "hello" backwards (first letter last)
let str = "hello";
let reversedStr = "";   
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}
console.log(reversedStr); // Output: "olleh"

// 9) Reverse a number

let num = 12345;
let reversed = 0;
while(num > 0){
  let digit = num % 10;
  reversed = reversed * 10  + digit;
  num = Math.floor(num / 10);
}
console.log(reversed);
