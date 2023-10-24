/*
JSON: JavaScript Object Notation
JSON is a syntax for storing and exchanging data.
JSON is text, written with JavaScript object notation.
JSON is a lightweight data-interchange format.
JSON is language independent *
JSON is "self-describing" and easy to understand *
JSON uses JavaScript syntax, but the JSON format is text only. Text can be read and used as a data format by any programming language.
*/

const course = {
    name: "JavaScript in hindi",
    price: 999,
    courseInstrutor: "Hitesh Choudhary",
}

// course.courseInstrutor = "Hitesh Choudhary Sir"

const {courseInstrutor: instructor} = course // destructuring we are just extracting the value of courseInstrutor and storing it in instructor variable. with this, we are just changing the way we use the variable. instead of using course.courseInstrutor, we are using instructor.

console.log(instructor) // Hitesh Choudhary
console.log(course.courseInstrutor) // Hitesh Choudhary
// destructuring: extracting values from objects and arrays.

// JSON structure
// {
//     "name": "JavaScript in hindi",
//     "price": 999,
//     "courseInstrutor": "Hitesh Choudhary",
// }

[
    {},
    {},
    {}
]
