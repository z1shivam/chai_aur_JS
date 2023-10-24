myObj = {
    js: 'javascript',
    py: 'python',
    rb: 'ruby',
    php: 'php',
    cpp: 'c++'
}

for (const x in myObj) {
    console.log(x) // this will print the keys
    console.log("----")
    console.log(myObj[x]) // this will print the values.
    console.log("----")
    console.log(`${x} is the extension for ${myObj[x]}`)
}

