const name = "Shivam";
const repoCount = 20;

console.log(name + repoCount + " value"); // we dont use this in modern days

console.log(`Hello my name is ${name} and I have ${repoCount} repos on github`);

// declaring a string
const gameName = new String("Shivam");
console.log(gameName[0]);
// to see object :
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase()); // this is not a method but a property
console.log(gameName.charAt(3)); //output: v
console.log(gameName.indexOf("v")); //output: 3
console.log(gameName.lastIndexOf("v")); //output: 3
console.log(gameName.endsWith("m")); //output: true
console.log(gameName.includes("v")); //output: true
console.log(gameName.substring(1, 4)); //output: hiv
console.log(gameName.split("")); //output: ["S", "h", "i", "v", "a", "m"]
console.log(gameName.split("v")); //output: ["Shi", "am"]
console.log(gameName.replace("vam", "vams")); //output: Shivams
console.log(gameName.replace("v", "vams")); //output: Shivamsam
console.log(gameName.slice(1, 4)); //output: hiv
console.log(gameName.slice(-1)); //output: m
console.log(gameName.slice(-3)); //output: vam
//trim: removes extra spaces
// trimStart: removes extra spaces from start
// trimEnd: removes extra spaces from end
