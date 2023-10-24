const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNums = mynum.filter((val) => ( val % 2 === 0));
// console.log(newNums)

const books = [
    { title: 'Book one', genre: 'fiction', rating: 8 },
    { title: 'Book two', genre: 'non-fiction', rating: 9 },
    { title: 'Book three', genre: 'fiction', rating: 10 },
    { title: 'Book four', genre: 'non-fiction', rating: 7 },
    { title: 'Book five', genre: 'fiction', rating: 8 },
    { title: 'Book six', genre: 'non-fiction', rating: 9 },
    { title: 'Book seven', genre: 'fiction', rating: 10 },
    { title: 'Book eight', genre: 'non-fiction', rating: 7 },
    { title: 'Book nine', genre: 'fiction', rating: 8 },
    { title: 'Book ten', genre: 'non-fiction', rating: 9 },
    { title: 'Book eleven', genre: 'fiction', rating: 10 },
]

const userFilter = "non-fiction"

const filteredBooks = books.filter( (item) => {
    return item.genre === userFilter
} )

filteredBooks.forEach( (item) => (console.log(`${item.title} - ${item.genre} - ${item.rating}`)))


// map method
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
addedNums = myNumbers.map((num) => {return num+=10})
console.log(addedNums)

// chaining
const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newNums1 = myNums1.map((num)=>{return num*4}).filter((num)=>{return num%3===0})
console.log(newNums1)
