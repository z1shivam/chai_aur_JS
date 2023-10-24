/* array methods

*/

const marvelHeros = ["Thor", "IronMan", "Spider-man"]
const dcHeros = ["superman", "batman", "flash"]

marvelHeros.push(dcHeros)
console.log(marvelHeros)

array1 = ["shivam", "kumar", "singh"]
array2 = ["pranav", "kumar", "singh"]
array3 = [...array1, "shiv", ...array2]
console.log(array3)

// .flat() method: it is used to flatten the array i.e. it removes the nested arrays and returns a new array with the elements of the nested array.

const myArr = [1,2,3,[4,5,6,[7,8,9]]]
console.log(myArr.flat()) //output: [1,2,3,4,5,6,[7,8,9]]

// .isArray method: it is used to check whether the given value is an array or not. It returns true if the given value is an array else returns false.

console.log(Array.isArray(myArr)) //output: true

// checking and converting string to array
const myString = "hello"
console.log(Array.isArray(myString)) //output: false
console.log(Array.from(myString)) //output: ["h", "e", "l", "l", "o"]

// whenever it cant convert it to array it returns an empty array.

// .of method: it is used to create an array from the given arguments.

console.log(Array.of(1,2,3,4,5)) //output: [1,2,3,4,5]
