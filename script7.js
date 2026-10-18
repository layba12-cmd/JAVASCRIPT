// 1. Simple greeting
const greet = function() {
    return "Hello, World!";
};
console.log(greet());

// 2. Greet a user
const greetUser = function(name) {
    return `Welcome, ${name}!`;
};
console.log(greetUser("Sara"));

// 3. Add two numbers
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 7));

// 4. Subtract numbers
const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(15, 6));

// 5. Multiply numbers
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(3, 8));

// 6. Divide numbers
const divide = function(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero";
};
console.log(divide(12, 3));

// 7. Find a square
const square = function(n) {
    return n ** 2;
};
console.log(square(6));

// 8. Find a cube
const cube = function(n) {
    return n ** 3;
};
console.log(cube(2));

// 9. Check even or odd
const isEven = function(n) {
    return n % 2 === 0;
};
console.log(isEven(10));

// 10. Find the smaller number
const minimum = function(a, b) {
    return a < b ? a : b;
};
console.log(minimum(4, 9));

// 11. Convert to lowercase
const lowercase = function(str) {
    return str.toLowerCase();
};
console.log(lowercase("HELLO"));

// 12. Count words
const countWords = function(str) {
    return str.trim() ? str.trim().split(/\s+/).length : 0;
};
console.log(countWords("JavaScript is easy"));

// 13. Calculate rectangle perimeter
const perimeter = function(length, width) {
    return 2 * (length + width);
};
console.log(perimeter(5, 3));

// 14. Calculate discount price
const discountedPrice = function(price, discount) {
    return price - (price * discount / 100);
};
console.log(discountedPrice(1000, 10));

// 15. Check positive number
const isPositive = function(n) {
    return n > 0;
};
console.log(isPositive(8));

// 16. Get the first character
const firstCharacter = function(str) {
    return str.charAt(0);
};
console.log(firstCharacter("JavaScript"));

// 17. Sum an array
const sumArray = function(numbers) {
    return numbers.reduce((total, n) => total + n, 0);
};
console.log(sumArray([1, 2, 3, 4]));

// 18. Find the largest array value
const largest = function(numbers) {
    return Math.max(...numbers);
};
console.log(largest([12, 5, 30, 8]));

// 19. Repeat a string
const repeatText = function(str, times) {
    return str.repeat(times);
};
console.log(repeatText("Hi! ", 3));

// 20. Function expression with a named inner function
const factorial = function calculateFactorial(n) {
    if (n < 0 || !Number.isInteger(n)) return null;
    if (n <= 1) return 1;
    return n * calculateFactorial(n - 1);
};
console.log(factorial(5));