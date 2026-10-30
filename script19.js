=// 1. map()

// Question 1: Double each number
let numbers1 = [1, 2, 3, 4];
let double = numbers1.map(num => num * 2);
console.log(double); // [2, 4, 6, 8]


// Question 2: Convert names to uppercase
let names = ["ali", "ahmed", "sara"];
let upperNames = names.map(name => name.toUpperCase());
console.log(upperNames); // ["ALI", "AHMED", "SARA"]

// 2. filter()

// Question 1: Get even numbers
let numbers2 = [1, 2, 3, 4, 5, 6];
let even = numbers2.filter(num => num % 2 === 0);
console.log(even); // [2, 4, 6]


// Question 2: Get numbers greater than 10
let numbers3 = [5, 12, 8, 20, 15, 3];
let greater = numbers3.filter(num => num > 10);
console.log(greater); // [12, 20, 15]

// 3. forEach()

// Question 1: Print each number
let numbers4 = [1, 2, 3, 4];

numbers4.forEach(num => {
    console.log(num);
});


// Question 2: Add ! to each string and print
let words = ["Hello", "World"];

words.forEach(word => {
    console.log(word + "!");
});


// 4. slice()

// Question 1: Get first 3 elements
let numbers5 = [1, 2, 3, 4, 5];
let firstThree = numbers5.slice(0, 3);
console.log(firstThree); // [1, 2, 3]


// Question 2: Get elements from index 2 to 4
let letters1 = ["a", "b", "c", "d", "e"];
let selected = letters1.slice(2, 4);
console.log(selected); // ["c", "d"]

// 5. splice()

// Question 1: Remove second and third elements
let numbers6 = [1, 2, 3, 4, 5];
numbers6.splice(1, 2);
console.log(numbers6); // [1, 4, 5]


// Question 2: Replace first two elements with x and y
let letters2 = ["a", "b", "c", "d"];
letters2.splice(0, 2, "x", "y");
console.log(letters2); // ["x", "y", "c", "d"]