/*The factorial of a number is the product of all the numbers from 1 to that number. For example,
factorial of 5 is equal to 1 * 2 * 3 * 4 * 5 = 120.

The factorial of a positive number n is given by:

factorial of n (n!) = 1 * 2 * 3 * 4.....n
The factorial of negative numbers do not exist and the factorial of 0 is 1.
*/
let number = 5;

// checking if number is negative
if(number < 0){
    console.log("The factorial of negative number does not exist");
}

// if number is 0
else if(number === 0){
    console.log("The factorial of zero is 1");
}

// if number is positive
else{
    let fact = 1;
    for(let i = 1; i <= number ; i++){
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}`);
}