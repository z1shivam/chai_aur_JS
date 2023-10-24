// const tinderUser = new Object(); singleton object
const tinderUser = {} // non singleton object

// difference between singleton and non singleton objects:
// singleton objects are those objects which are created only once in the memory and all the references to that object are pointing to the same object.
// non singleton objects are those objects which are created multiple times in the memory and all the references to that object are pointing to different objects.

console.log(tinderUser)

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {1: "c", 2: "d", 3: "e"}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)
// syntax: Object.assign(target, source1, source2)
// target: target object which will be returned after merging the source objects into it.

// using spread operator
const obj4 = {...obj1, ...obj2}

const users = [
    {
        id: 1,
        name: "abc",
        age: 20
    },
    {
        id: 2,
        name: "xyz",
        age: 30
    },
    {
        id: 3,
        name: "pqr",
        age: 40
    }
]

users[0].age = 25
console.log(Object.keys(users[0])) // returns a array of keys of the object
console.log(Object.values(users[0])) // returns a array of values of the object
console.log(Object.entries(users[0])) // returns a array of arrays of key-value pairs of the object

console.log(users[0].hasOwnProperty("age")) // returns true if the object has the property else returns false

