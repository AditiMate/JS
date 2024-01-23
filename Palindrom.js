 //Ques 1 - Palindrome Number
 //An integer is a palindrome when it reads the same number forward and backward.

 //Input: x = 121 ----->  Output: true
 //Input: x = 10 ----->  Output: false


 const Palindrome = function (x) {
    return x < 0 ? false : (x === +x.toString().split("").reverse().join(""));
 };

 const res = Palindrome(121);
 console.log(res);

 // 121 => "121" => ["1","2","1"] => ["1","2","1"] => "121"