// 1. map():Creates a new array by transforming elements

// Example 1: Double numbers
console.log([1, 2, 3, 4].map(n => n * 2));

// Example 2: Square numbers
console.log([1, 2, 3, 4].map(n => n * n));

// Example 3: Convert names to uppercase
console.log(["ali", "sara", "ahmed"].map(name => name.toUpperCase()));

// Example 4: Add 10 to each number
console.log([5, 10, 15].map(n => n + 10));

// Example 5: Get the length of each word
console.log(["apple", "cat", "banana"].map(word => word.length));


// 2. filter():Selects elements that pass a condition

// Example 1: Get even numbers
console.log([1, 2, 3, 4, 5, 6].filter(n => n % 2 === 0));

// Example 2: Get numbers greater than 10
console.log([5, 12, 8, 20, 15].filter(n => n > 10));

// Example 3: Get odd numbers
console.log([1, 2, 3, 4, 5].filter(n => n % 2 !== 0));

// Example 4: Get words longer than 4 characters
console.log(["cat", "apple", "banana", "dog"].filter(word => word.length > 4));

// Example 5: Get positive numbers
console.log([-5, 10, -2, 8, 0].filter(n => n > 0));


// 3. forEach(): Executes a function for each element

// Example 1: Print each number
[1, 2, 3, 4].forEach(n => console.log(n));

// Example 2: Print each fruit
["apple", "banana", "mango"].forEach(fruit => console.log(fruit));

// Example 3: Print each number multiplied by 2
[2, 4, 6].forEach(n => console.log(n * 2));

// Example 4: Add ! to each word and print
["Hello", "World"].forEach(word => console.log(word + "!"));

// Example 5: Print each name with its index
["Ali", "Sara", "Ahmed"].forEach((name, index) => {
    console.log(index + ": " + name);
});


// 4. slice():Copies a portion of an array

// Example 1: Get the first 3 elements
console.log([1, 2, 3, 4, 5].slice(0, 3));

// Example 2: Get elements from index 1 to 3
console.log(["a", "b", "c", "d"].slice(1, 3));

// Example 3: Get the last 2 elements
console.log([10, 20, 30, 40].slice(-2));

// Example 4: Copy the entire array
console.log([1, 2, 3].slice());

// Example 5: Get elements from index 2 to the end
console.log(["red", "blue", "green", "yellow"].slice(2));

// 5. splice(): Adds, removes, or replaces elements

// Example 1: Remove one element at index 2
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(2, 1);
console.log(arr1);

// Example 2: Remove the second and third elements
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(1, 2);
console.log(arr2);

// Example 3: Replace one element with 99
let arr3 = [1, 2, 3, 4];
arr3.splice(2, 1, 99);
console.log(arr3);

// Example 4: Add elements without removing anything
let arr4 = [1, 2, 5];
arr4.splice(2, 0, 3, 4);
console.log(arr4);

// Example 5: Replace the first two elements
let arr5 = ["a", "b", "c", "d"];
arr5.splice(0, 2, "x", "y");
console.log(arr5);

// 6. reduce():Reduces an array to a single value

// Example 1: Find the sum
console.log([1, 2, 3, 4].reduce((acc, n) => acc + n, 0));

// Example 2: Find the product
console.log([1, 2, 3, 4].reduce((acc, n) => acc * n, 1));

// Example 3: Find the maximum number
console.log([10, 25, 8, 40, 15].reduce((max, n) => n > max ? n : max));

// Example 4: Count the total characters
console.log(["cat", "dog", "apple"].reduce((total, word) => total + word.length, 0));

// Example 5: Count the number of even elements
console.log([1, 2, 3, 4, 5, 6].reduce((count, n) => {
    return n % 2 === 0 ? count + 1 : count;
}, 0));


// 7. find(): Returns the first matching element

// Example 1: Find the first even number
console.log([1, 3, 4, 6, 8].find(n => n % 2 === 0));

// Example 2: Find the first number greater than 10
console.log([3, 8, 12, 15, 20].find(n => n > 10));

// Example 3: Find the first negative number
console.log([5, 2, -3, -8].find(n => n < 0));

// Example 4: Find the first word longer than 4 characters
console.log(["cat", "dog", "apple", "banana"].find(word => word.length > 4));

// Example 5: Find a name starting with A
console.log(["Sara", "Ahmed", "Ali", "John"].find(name => name.startsWith("A")));

// 8. findIndex(): Returns the index of the first match

// Example 1: Find the index of the first even number
console.log([1, 3, 4, 6, 8].findIndex(n => n % 2 === 0));

// Example 2: Find the index of the first number greater than 10
console.log([3, 8, 12, 15, 20].findIndex(n => n > 10));

// Example 3: Find the index of the first negative number
console.log([5, 2, -3, -8].findIndex(n => n < 0));

// Example 4: Find the index of "banana"
console.log(["apple", "mango", "banana"].findIndex(fruit => fruit === "banana"));

// Example 5: Find the index of the first word longer than 5 characters
console.log(["cat", "apple", "banana", "dog"].findIndex(word => word.length > 5));


// 9. some():Checks if at least one element matches

// Example 1: Is there an even number?
console.log([1, 3, 5, 8].some(n => n % 2 === 0));

// Example 2: Is there a number greater than 10?
console.log([2, 4, 8, 12].some(n => n > 10));

// Example 3: Is there a negative number?
console.log([1, 2, 3, -4].some(n => n < 0));

// Example 4: Is there a word longer than 5 characters?
console.log(["cat", "apple", "banana"].some(word => word.length > 5));

// Example 5: Is the number 7 present?
console.log([1, 3, 5, 7].some(n => n === 7));

// 10. every(): Checks if all elements match

// Example 1: Are all numbers even?
console.log([2, 4, 6, 8].every(n => n % 2 === 0));

// Example 2: Are all numbers positive?
console.log([1, 2, 3, 4].every(n => n > 0));

// Example 3: Are all numbers greater than 10?
console.log([12, 15, 20].every(n => n > 10));

// Example 4: Do all words have more than 2 characters?
console.log(["apple", "banana", "cat"].every(word => word.length > 2));

// Example 5: Are all numbers less than 100?
console.log([10, 25, 50, 99].every(n => n < 100));


// 11. join():Converts array elements into a string

// Example 1: Join with a comma and space
console.log(["apple", "banana", "mango"].join(", "));

// Example 2: Join with a hyphen
console.log([1, 2, 3, 4].join("-"));

// Example 3: Join with a space
console.log(["Hello", "World"].join(" "));

// Example 4: Join with an empty separator
console.log(["J", "S"].join(""));

// Example 5: Join with a slash
console.log(["2026", "10", "26"].join("/"));

// 12. includes():Checks if a value exists in an array

// Example 1: Check if apple exists
console.log(["apple", "banana", "mango"].includes("apple"));

// Example 2: Check if number 5 exists
console.log([1, 2, 3, 4, 5].includes(5));

// Example 3: Check if orange exists
console.log(["apple", "banana", "mango"].includes("orange"));

// Example 4: Check if number 10 exists
console.log([2, 4, 6, 8].includes(10));

// Example 5: Check if JavaScript exists
console.log(["HTML", "CSS", "JavaScript"].includes("JavaScript"));