const myArr = [0,1,2,3,4] //array
console.log(myArr[2])

/* NOTES:
arrays in JS is resizable
arrays can hold any data type
indexing in arrays starts from 0

shallow copy and deep copy
shallow copy: only the reference is copied
deep copy: the whole array is copied

Array methods:
1. push: adds element at the end of the array and returns the length of the array
2. pop: removes element from the end of the array and returns the removed element
3. shift: removes element from the start of the array amd returns the removed element
4. unshift: adds element at the start of the array and returns the length of the array
5. splice: adds or removes elements from the array and returns the removed elements
6. slice: returns a new array from the given array
7. concat: joins two arrays and returns a new array

array questioner methods:
1. indexOf: returns the index of the element
2. lastIndexOf: returns the last index of the element
3. includes: returns true if the element is present in the array else returns false
4. join: joins the array elements into a string

Difference between slice and splice:
slice: returns a new array from the given array without modifying the original array.
splice: modifies the original array and returns the removed elements as a new array.
*/

const myHeroes = ["shaktiman", "nagraj", "dhruv", "doga"]
const myArr2 = new Array(1,2,3,4,5)

console.log(myArr2.join(".")) //joins the elements of the array into a string

// How to slice array:
const myArr3 = [1,2,3,4,5,6,7,8,9]
console.log(myArr3.slice(2,5)) //output: [3,4,5]

// How to use splice:
const myArr4 = [1,2,3,4,5,6,7,8,9]
console.log(myArr4.splice(2,4)) //output: [3,4,5,6]
// Here 4 is the number of elements that is to be removed from the array and 2 is the starting index.
console.log(myArr4) //output: [1,2,8,9]
