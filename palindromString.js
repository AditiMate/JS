// program to check if the string is palindrome or not

function palindromString(string){
    let len = string.length 
    for(let i = 0 ; i<= len/2; i++){
        if(string[i] !== string[len - 1 - i]){
            return "It is not palindrom"
        }

    }
    return "It is palindrom"
}

const str = "madam"
console.log(palindromString(str));