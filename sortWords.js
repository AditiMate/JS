// program to sort words in alphabetical order
let string = "This is javascript"

const words = string.split(' ')

words.sort()

console.log(`The sorted words are ${string}`);

for( const element of words){
    console.log(element);
}
