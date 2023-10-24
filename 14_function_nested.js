function first(){
    console.log("Shivam can code!!")
    function second(){
        console.log("Shivam can code better!!")
    }
    second()
}

// second function will not be accessible outside the first function.
console.log(addOne(5))

function addOne(num){
    return num + 1
}

// console.log(addTwo(5))
// error: addTwo is not a function. why: because addTwo is a function expression and it is not hoisted. function expressions are not hoisted.

const addTwo = function(num){
    return num + 2
}

