// 1) Find the "JavaScript" in an array
let str = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
let search = 'JavaScript';
for (let i = 0; i < str.length; i++) {
  if (str[i] === search) {
    console.log(`Found ${search} at index ${i}`);
    break;
  }
}

// 2) Find duplicate elements in an array
const arr = [20, 57, 44, 10, 100, 57, 44, 54];
for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] == arr[j]) {
            console.log(`Duplicate element found: ${arr[i]}`);
        }
    }
}

// 3) What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // ?,  4

// That’s because arrays are objects. So both shoppingCart and fruits are the references to the same array.

/*
        4) Let’s try 5 array operations.

    • Create an array styles with items “Jazz” and “Blues”.
    • Append “Rock-n-Roll” to the end.
    • Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
    • Strip off the first value of the array and show it.
    • Prepend Rap and Reggae to the array.
*/

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll"); 
styles[Math.floor(styles.length -1  / 2)] = "Classics"; 
console.log(styles.shift());       
styles.unshift("Rap", "Reggae");
console.log(styles); 

// The final array will be: ["Rap", "Reggae", "Classics", "Blues", "Rock-n-Roll"]

// 5) What is the result? Why?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?

/*
    The call arr[2]() is syntactically the good old obj[method](), in the role of obj we have arr, and in the role of method we have 2.
    So we have a call of the function arr[2] as an object method. Naturally, it receives this referencing the object arr and outputs the array
    The array has 3 values: initially it had two, plus the function.
*/
