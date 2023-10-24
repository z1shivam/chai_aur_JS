// arrow function: arrived in ES6. It is a shorter way to write a function expression. It is always anonymous. It is always a function expression. It does not have its own bindings to this or super, and should not be used as methods. It should not be used as constructors.

const user = {
    username: "Shivam",
    price: 999,
    welcomeMessage: function(){
        console.log("Welcome to the course " + this.username)
        //this keyword is used to access the properties of the object.
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Shivam Kumar"
// user.welcomeMessage()

// console.log(this)

// global object in browser is window object.

function chai(){
    console.log(this)
}

// chai()

const chai2 = () => {
    let username = "Shivam"
    console.log(this.username)
    console.log(this) // empty paranthesis
}
// chai2()

const chai3 = (num1, num2) => {
    return num1 + num2
}
console.log(chai3(1, 2))

// implicit return: if we are returning a single line of code, we can remove the curly braces and the return keyword.
const chai4 = (num1, num2) => (num1 + num2)

// agar curly braces use kiya to return keyword use karna padega. agar curly braces use nahi kiya to return keyword use nahi karna padega.

// explicit or implicit me farq: explicit me return keyword use karna padega. implicit me return keyword use nahi karna padega.

// what is the difference between normal function and arrow function?
