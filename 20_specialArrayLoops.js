// for of loop

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const val of arr) {
    console.log(val);
}

const greetings = "Hello World";
for (const letter of greetings) {
    console.log(letter);
}

// maps
const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('GB', 'Great Britain');

console.log(map);
for (const key of map) {
    console.log(key);
}
for (const [key, value] of map) {
    console.log(key);
}
