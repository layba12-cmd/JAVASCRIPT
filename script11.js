// Function Declaration
// A Function Declaration is the most common way to define a function in JavaScript. It uses the function keyword followed by the function name and parameters. These functions are hoisted to the top of their scope, so you can call them before they are defined.
// Syntax
function functionName(parameters) {
    // function body
    return value;
}
// Example
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Alice')); // Output: Hello, Alice!

// Function Expression
// A Function Expression is when a function is assigned to a variable. Unlike function declarations, function expressions are not hoisted, meaning you cannot call the function before it is defined.
// Syntax
const variableName = function(parameters) {
    // function body
    return value;
};
// Example
const sum = function(a, b) {
    return a + b;
};
console.log(sum(5, 10)); // Output: 15

//Arrow Function (ES6)
// An Arrow Function is a more concise way to write functions introduced in ES6. It uses the => (arrow) syntax and omits the function keyword. Arrow functions do not bind their own this value, making them especially useful in callbacks or inside object methods.
// Syntax
const functionName = (parameters) => {
    // function body
    return value;
};
// Example
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // Output: 12

// Anonymous Function
// An Anonymous Function is a function without a name. It is often used as a function expression or as an argument to other functions (e.g., callbacks).
// Syntax
const variableName = function(parameters) {
    // function body
    return value;
};
// Example
setTimeout(function() {
    console.log('This is an anonymous function');
}, 1000);

// Immediately Invoked Function Expression (IIFE)
// An Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined. It is often used to create a private scope for variables, preventing them from polluting the global scope.
// Syntax
(function() {
    // function body
})();
// Example
(function() {
    console.log('This function runs immediately!');
})();