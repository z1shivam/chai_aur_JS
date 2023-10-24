// immediately invoked function expression
(function chai(){
    // named IIFE
    console.log("DB Connected!!")
})(); // this semicolon is important. if we don't put this semicolon, then the code will not run.

// (function definition(){})();
// to prevent pollution by global scope and to prevent overriding of variables, we use IIFE.

((name) => {
    console.log("Welcome " + name)
})("Shivam");
