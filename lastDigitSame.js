/* program to check whether the last digit of three
numbers is same */

let a = 45;
let b = 56;
let c = 60

let result1 = a % 10
let result2 = b % 10
let result3 = c % 10

if(result1 == result2 && result1 == result3){
    console.log(`${a}, ${b} & ${c} have same last digit.`);
}
else{
    console.log(`${a}, ${b} & ${c}  have different last digit.`);

}