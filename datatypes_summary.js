// Primitive Datatypes
// 7 Primitive Datatypes
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

// Reference Datatypes or non primitive datatypes

// 1. Array
// 2. Object
// 3. Function
// 4. Date
// 5. RegExp
// 6. Error

// js is dynamically typed language

const id = Symbol('123')
const id2 = Symbol('123')
console.log(id === id2) //false

const bigNumber = 1234567890123456789012345678901234567890n
const heros = ['superman', 'batman', 'ironman']

const user = {
    name: 'john',
    age: 23
}

const myfunc = function() {
    console.log('hello')
}

console.log(typeof user)

// datatype of function is function Object

// ++++++++++++++++++++++++++++++++++++++++++++

/* Stack and Heap memory

stack: primitive
heap: non primitive
*/
