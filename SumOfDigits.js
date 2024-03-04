/* 
Ques - 2: Sum of digits of a number

1287: 1+2+8+7 = 18

1287%10 , remainder = 7 + 8 + 2, Q = 128%10 = 12

*/

function sumOfDigits( num ) {
    let sum = 0;
    while( num > 0){
       sum += num % 10;
       num = Math.floor(num / 10 ) ;
    }
    return sum;
}
console.log(sumOfDigits(1287));
