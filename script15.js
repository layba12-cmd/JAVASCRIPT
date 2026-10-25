
// 1. map()

// Question 1: Double each number
let numbers1 = [1, 2, 3, 4];
let doubled = numbers1.map(num => num * 2);
console.log(doubled); 

// Question 2: Convert names to uppercase
let names = ["ali", "ahmed", "sara"];
let upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames); 

// 2. filter()

// Question 1: Get even numbers
let numbers2 = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers2.filter(num => num % 2 === 0);
console.log(evenNumbers); 

// Question 2: Get numbers greater than 10
let numbers3 = [5, 12, 8, 15, 20, 3];
let greaterThanTen = numbers3.filter(num => num > 10);
console.log(greaterThanTen); 

// 3. forEach()

// Question 1: Print each number
let numbers4 = [1, 2, 3, 4];
numbers4.forEach(num => {
    console.log(num);
});

// Question 2: Append ! to each string and log it
let words = ["Hello", "World"];
words.forEach(word => {
    console.log(word + "!");
});

// 4. slice()

// Question 1: Return the first 3 elements

let numbers5 = [1, 2, 3, 4, 5];
let firstThree = numbers5.slice(0, 3);
console.log(firstThree); 

// Question 2: Get elements from index 2 to index 4 (exclusive)
let letters1 = ["a", "b", "c", "d", "e"];
let selectedLetters = letters1.slice(2, 4);
console.log(selectedLetters); 

// 5. splice()

// Question 1: Remove the second and third elements
let numbers6 = [1, 2, 3, 4, 5];
numbers6.splice(1, 2);
console.log(numbers6); 

// Question 2: Replace the first two elements with "x" and "y"
let letters2 = ["a", "b", "c", "d"];
letters2.splice(0, 2, "x", "y");
console.log(letters2); 