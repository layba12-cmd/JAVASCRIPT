 // 1. Simple greeting
function greet() {
    console.log("Hello, World!");
}
greet();

// 2. Greeting with a parameter
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}
greetUser("Ali");

// 3. Add two numbers
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

// 4. Subtract two numbers
function subtract(a, b) {
    return a - b;
}
console.log(subtract(15, 5));

// 5. Multiply two numbers
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 6));

// 6. Divide two numbers
function divide(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero";
}
console.log(divide(20, 4));

// 7. Square a number
function square(n) {
    return n * n;
}
console.log(square(5));

// 8. Cube a number
function cube(n) {
    return n ** 3;
}
console.log(cube(3));

// 9. Check even or odd
function checkEvenOdd(n) {
    return n % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(7));

// 10. Find the larger number
function maximum(a, b) {
    return a > b ? a : b;
}
console.log(maximum(12, 8));

// 11. Convert Celsius to Fahrenheit
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
console.log(toFahrenheit(25));

// 12. Calculate rectangle area
function rectangleArea(length, width) {
    return length * width;
}
console.log(rectangleArea(5, 4));

// 13. Calculate circle area
function circleArea(radius) {
    return Math.PI * radius ** 2;
}
console.log(circleArea(3));

// 14. Calculate factorial
function factorial(n) {
    if (n < 0 || !Number.isInteger(n)) return null;
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

// 15. Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("JavaScript"));

// 16. Count characters
function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("Hello"));

// 17. Convert text to uppercase
function makeUppercase(str) {
    return str.toUpperCase();
}
console.log(makeUppercase("hello"));

// 18. Calculate the average
function average(a, b, c) {
    return (a + b + c) / 3;
}
console.log(average(10, 20, 30));

// 19. Check voting age
function canVote(age) {
    return age >= 18;
}
console.log(canVote(20));

// 20. Demonstrate hoisting
sayHello();

function sayHello() {
    console.log("Called before declaration!");
}