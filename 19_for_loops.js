/*
Iterations or loops are a way to repeat a block of code multiple times.

FOR LOOP: for(initialization; condition; increment/decrement){
     code to be executed
}
*/

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
}

// nested loop
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
        // console.log(`i is ${i} and j is ${j}`)
    }
}

// multiplication table
for (let i = 1; i <= 10; i++) {
    console.log(`2 x ${i} = ${2 * i}`)
}
