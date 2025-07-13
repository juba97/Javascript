// Discount calculation based on user role
const userIsAdmin = true;
const discount = userIsAdmin ? 25 : 0;
console.log(`The discount is ${discount}%`);

// calculate shipping cost based on distance
const userDistance = 45;
const shippingCost = userDistance <= 50 ? 10 : 15;
console.log(`The shipping cost is $${shippingCost}`);

// Conditional logic to determine discount based on user role
const userIsAdmin = false;
let userStudents = true;
let discount;

if (userIsAdmin) {
    console.log("Welcome, Admin!");
    discount = 25;
}
else if (userStudents) {
    console.log("Welcome, Student!");
    discount = 15;
}
else {
    console.log("Welcome, User!");
    discount = 0;
}
console.log(`The discount is ${discount}%`);

// 4) Will alert be shown?

if ("0") {
  console.log( 'Hello' );
}

/*Yes, it will.
Any string except an empty one (and "0" is not empty) becomes true in the logical context.
*/
