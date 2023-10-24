/*
Objects
- Objects are used to store keyed collections of various data and more complex entities.

Object literals:

*/
const mySym = Symbol("key1");

Object.create(null); // creates an empty object
const jsUser1 = {}; // empty object
const jsUser = {
    name: "Shivam",
    age: 20,
    location: "India",
    email: "shivam@google.com",
    isLoggedIn: false,
    [mySym] : "myKey1"
};

//using objects:
console.log(jsUser.name); //output: Shivam
console.log(jsUser["name"]); //output: Shivam

// symbols in js: they are used to create unique identifiers for objects. They are used as keys for object properties if we want to hide them from outside.

console.log(typeof jsUser[mySym])
console.log(jsUser[mySym])

jsUser.email = "shivamchat.google.com";

// Object.freeze(jsUser)
 // this will freeze the object and we can't change the values of the object properties.

jsUser.email = "random@google.com"; // this will not change the value of email property as the object is frozen.

console.log(jsUser)

jsUser.greeting = function() {
    console.log("Hello, I am " + jsUser.name + `hello ${this.name}`);
}

console.log(jsUser.greeting)
