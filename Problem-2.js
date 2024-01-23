//How to find min/max in a given array
//Max
const arr=[12,32,68,1,4];
const max=(arr) => {
    return arr.reduce(function(pre,cur) {
        return pre > cur ? pre:cur;
    })
}
console.log(max(arr));


//Min
const min = (arr) => {
    return arr.reduce(function(pre,cur) {
        return pre<cur ? pre:cur
    })
}
console.log(min(arr));