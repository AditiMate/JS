//Ques 2 - Fibonacci Number
// Fibonacci Series -> 0,1,1,2,3,5,8,13,21,34,55,89,144,233...
// F(0) = 0 , F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

//Input : n = 3 ----->>>>> Output: 2

//Using for loop
// const fib = function(n) {
//     const arr = [0,1] ;

//     for(let i = 2 ; i <= n; i++) {
//         arr.push(arr[i - 1] + arr[i - 2]);
//     }
//     console.log(arr);
// };
// fib(6);

/* 
//Recursion Solution
const fib = function (n) {
    if(n <= 1) return n;

    return fib(n - 1) + fib(n - 2);
};

console.log(fib(3));

//n = 3 => fib(2) + fib(1) => 1 + 1 => 2
//fib(2) => fib(1) + fib(0) => 1 + 0 => 1
*/

//One Liner
const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));
console.log(fib(3));