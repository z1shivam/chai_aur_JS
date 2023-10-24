// control flow: if, else if, else statements.

const score = 200;

if(score > 100){
    const power = "fly";
    // console.log(`You are a super hero! You can ${power}`);
}

// short hand notation
if(score > 100) console.log("You are a super hero!");

// you can write multiple lines in short hand notation using comma but it is not recommended.

if(score < 100){
    console.log("score is less than 100");
} else if(score < 200){
    console.log("score is less than 200");
} else {
    console.log("score is greater than 200");
}

/*
falsie values in JavaScript:
1. false
2. 0
3. ""
4. null
5. undefined
6. NaN
7. -0
8. 0n


truthy values in JavaScript:
1. true
2. 1
3. " "
4. "false"
5. {}
6. []
7. function(){}
8. "0", 'false', 'null', 'undefined', 'NaN', '-0', '0n'

*/

// Nullish coalescing operator: ?? (double question mark)

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// console.log(val1)
// if the value of val1 is null or undefined, then the value of val1 will be 10. if the value of val1 is not null or undefined, then the value of val1 will be 5.

// ternary operator: ? (question mark)
// condition ? true : false;


