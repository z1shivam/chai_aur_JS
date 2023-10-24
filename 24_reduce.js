/*
array.reduce()
----------------
- The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
*/

const myNums = [1,2,3]
total = myNums.reduce((acc, currval)=>{
    // console.log(`acc is ${acc} and currval is ${currval}`)
    return acc + currval
}, 6)
// console.log(total)

total2 = myNums.reduce((acc,curr) => acc + curr, 0)

const shoppingCart = [
    {
        itemName : "javascript",
        price: 299
    },
    {
        itemName: "Python",
        price: 289
    },
    {
        itemName: "C++",
        price: 149
    }
]

itemTotal = shoppingCart.reduce((acc, curr) => curr.price + acc, 0)
console.log(itemTotal)
