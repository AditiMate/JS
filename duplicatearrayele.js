// program to remove duplicate value from an array
function unique(arr){
    let uniquearr = [];

    for(let i of arr) {
        if (uniquearr.indexOf(i) === -1){
            uniquearr.push(i)
        }
    }
    console.log(uniquearr);
}

//function call
unique([1,2,3,2,1])


