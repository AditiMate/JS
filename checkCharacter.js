// program to check the number of occurrence of a characters in a string

function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == char) {
      count += 1;
    }
  }
  return count;
}

console.log(countChar("School", "o"));
