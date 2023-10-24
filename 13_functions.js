/* --notes--
functions are a way to package functionality that you want to reuse.

function functionName() { // function declaration
     code to be executed
}
functionName() // function call

parameters and arguments: parameters are the names listed in the function definition. arguments are the real values passed to (and received by) the function.

*/

function sayMyName(){
    console.log("Hello my name is Shivam Kumar.")
}

// sayMyName();

function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(2,6)
console.log(result)

// if no parameters are passed then the function will treat the vairable as undefined. if we pass more parameters than the function is expecting, then the function will ignore the extra parameters.

function calculateCartPrice(val1, val2, ...num1){ // rest operator
    return num1
}

console.log(calculateCartPrice(200,400,500,1000,500))

