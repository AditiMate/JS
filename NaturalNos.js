/* Ques-1 Sum of all Natural numbers  from 1 to n
   sum of 1 to 5 : 15
*/

function naturalNos(num) {
    sum = 0 ;
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
}
console.log(naturalNos(5));