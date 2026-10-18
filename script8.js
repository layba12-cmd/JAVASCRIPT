//1. Simple greeting
const greet = () => "Hello, World!";
console.log(greet());

// 2. Greet a user
const greetUser = name => `Hello, ${name}!`;
console.log(greetUser("Ahmed"));

// 3. Add two numbers
const add = (a, b) => a + b;
console.log(add(4, 6));

// 4. Subtract numbers
const subtract = (a, b) => a - b;
console.log(subtract(10, 3));

// 5. Multiply numbers
const multiply = (a, b) => a * b;
console.log(multiply(5, 5));

// 6. Divide numbers
const divide = (a, b) =>
    b !== 0 ? a / b : "Cannot divide by zero";
console.log(divide(20, 4));

// 7. Square a number
const square = n => n ** 2;
console.log(square(7));

// 8. Cube a number
const cube = n => n ** 3;
console.log(cube(3));

// 9. Check even or odd
const isEven = n => n % 2 === 0;
console.log(isEven(12));

// 10. Find the larger number
const maximum = (a, b) => Math.max(a, b);
console.log(maximum(15, 20));

// 11. Convert to uppercase
const uppercase = str => str.toUpperCase();
console.log(uppercase("javascript"));

// 12. Calculate circle circumference
const circumference = radius => 2 * Math.PI * radius;
console.log(circumference(5));

// 13. Calculate percentage
const percentage = (part, total) =>
    total !== 0 ? (part / total) * 100 : null;
console.log(percentage(25, 100));

// 14. Sum an array
const sumArray = numbers =>
    numbers.reduce((sum, n) => sum + n, 0);
console.log(sumArray([2, 4, 6, 8]));

// 15. Double array values
const doubleNumbers = numbers => numbers.map(n => n * 2);
console.log(doubleNumbers([1, 2, 3]));

// 16. Filter even numbers
const filterEven = numbers => numbers.filter(n => n % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5, 6]));

// 17. Sort numbers ascending
const sortNumbers = numbers => [...numbers].sort((a, b) => a - b);
console.log(sortNumbers([9, 2, 7, 1]));

// 18. Get the first array element
const firstElement = array => array[0];
console.log(firstElement(["red", "green", "blue"]));

// 19. Return a full name
const fullName = (first, last) => `${first} ${last}`;
console.log(fullName("Ali", "Khan"));

// 20. Use an arrow function as a callback
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(n => n ** 2);
console.log(squaredNumbers);