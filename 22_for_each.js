const coding = ["js", "py", "rb", "php", "cpp"]
coding.forEach((x) => {
    console.log(x)
})

// what is a callback function?
// A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed.

coding.forEach( (item , index, arr) => {
    console.log(item, index, arr)
})

const myCoding = [
    {
        languageName: "JavaScript",
        languageFile: "js"
    },
    {
        languageName: "Python",
        languageFile: "py"
    },
    {
        languageName: "Ruby",
        languageFile: "rb"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
    console.log(item.languageFile)
} )
