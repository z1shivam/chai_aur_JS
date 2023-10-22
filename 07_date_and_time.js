const myDate = new Date()
console.log(myDate.toDateString())
console.log(typeof myDate) //object

let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate2 = new Date("2023-01-23 05:03:00")
console.log(myCreatedDate.toLocaleString())

let timeStamp = Date.now()
let betterTimeStamp = new Date().getTime()

console.log(Math.floor(timeStamp/1000))

let date = new Date()
console.log(date.getMonth()+1)

date.toLocaleString('en-IN', {
    weekday: "long",
    year:"2-digit"
})
