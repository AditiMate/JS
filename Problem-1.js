//To find duplicate Elements in array

const arr = [1,2,3,3,6];
const duplicate = arr.filter((ele,index,arr) => arr.indexOf(ele) !== index);
console.log(duplicate);