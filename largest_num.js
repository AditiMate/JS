/*
let num1 = 4;
let num2 = 7;
let num3 = 44;
let largest ;

if(num1 >= num2 && num1 >= num3) {
     largest =  num1;
}
else if(num2 >= num1 && num2 >= num3){
     largest = num2;
}
else{
      largest = num3;
} 
console.log(`The largest number is ${largest}`);
*/


//Using built-in function
let num1 = 4;
let num2 = 7;
let num3 = 44;

let largest = Math.max(num1,num2,num3);

console.log(`The largest number is ${largest}`);