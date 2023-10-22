// console.log(2 > 3) //false
// console.log(2 < 3) //true
// console.log(2 >= 3) //false
// console.log(2 <= 3) //true
// console.log(2 == 3) //false
// console.log(2 != 3) //true
// console.log(2 === 3) //false
// console.log(2 !== 3) //true

console.log("2" > 3) //false"
console.log("02" > 3) //false"

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true
// why true? because null is converted to 0 in >= operator
// = and > work differently

console.log(undefined > 0) //false
console.log(undefined == 0) //false
console.log(undefined >= 0) //false

// strict check
console.log(2 === 2) //true
console.log(2 === "2") //false

// avoid comparision between different data types
