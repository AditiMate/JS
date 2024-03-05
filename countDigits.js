/* 
 Ques 3: Count the number of digits of a number
 34252 = 5
-123 = 3
*/

function countDigits(num) {
    num = Math.abs(num)
    let count = 0;
    do{
        count++
        num = Math.floor( num / 10)
    } while (num > 0) {
        return count
    }
}
 console.log(countDigits(123));
 console.log(countDigits(-123));