/* Swap two numbers using temp variable
let a = 4;
let b = 5;

let temp;

temp = a;
a = b;
b = temp ;

console.log(`The value of a is ${a}`);
console.log(`The value of b is ${b}`);
*/


/* Using Destructuring*/
let x = 2;
let y = 3;

//Destructuring
[x,y] = [y,x];

console.log(`The value of x is ${x}`);
console.log(`The value of y is ${y}`);
