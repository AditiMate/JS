/*Javascript Program to Check if a Number is Odd or Even
let number = 19;

if(number % 2 == 0) {
    console.log("The number is even");
} 
else{
    console.log("The number is odd");
}
*/

//Using ternary operator
let  number = 2;
let res = (number % 2 == 0) ? 'even' : 'odd'
console.log(`The number is ${res}`);