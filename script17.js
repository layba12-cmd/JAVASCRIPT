// 1. map() 

// Example 1: Add 5 to every number
console.log([1, 2, 3].map(n => n + 5));

// Example 2: Convert numbers to strings
console.log([10, 20, 30].map(n => String(n)));

// Example 3: Convert names to lowercase
console.log(["ALI", "SARA", "AHMED"].map(name => name.toLowerCase()));

// Example 4: Increase prices by 10%
console.log([100, 200, 300].map(price => price * 1.1));

// Example 5: Get the first character of each word
console.log(["Apple", "Banana", "Cherry"].map(word => word[0]));

// 2. filter()

// Example 1: Get numbers less than 5
console.log([2, 7, 3, 9, 1].filter(n => n < 5));

// Example 2: Get numbers divisible by 3
console.log([3, 7, 9, 12, 14].filter(n => n % 3 === 0));

// Example 3: Get names starting with A
console.log(["Ali", "Sara", "Ahmed", "John"].filter(name => name.startsWith("A")));

// Example 4: Get words with exactly 4 characters
console.log(["cat", "lion", "dog", "bear"].filter(word => word.length === 4));

// Example 5: Remove empty strings
console.log(["Hello", "", "World", "", "JavaScript"].filter(word => word !== ""));

// 3. forEach() 

// Example 1: Print each city
["Lahore", "Karachi", "Islamabad"].forEach(city => console.log(city));

// Example 2: Print each number plus 10
[5, 10, 15].forEach(n => console.log(n + 10));

// Example 3: Print each name with a greeting
["Ali", "Sara"].forEach(name => console.log("Hello " + name));

// Example 4: Print each item with its index
["HTML", "CSS", "JavaScript"].forEach((item, index) => console.log(index, item));

// Example 5: Print the square of each number
[2, 3, 4, 5].forEach(n => console.log(n * n));

// 4. slice() 

// Example 1: Get the first 2 elements
console.log([10, 20, 30, 40].slice(0, 2));

// Example 2: Get elements from index 1 to 4
console.log(["a", "b", "c", "d", "e"].slice(1, 4));

// Example 3: Get the last 3 elements
console.log([10, 20, 30, 40, 50].slice(-3));

// Example 4: Get elements from index 2 to the end
console.log(["red", "green", "blue", "black"].slice(2));

// Example 5: Get the middle elements
console.log([1, 2, 3, 4, 5, 6].slice(2, 5));

// 5. splice() 

// Example 1: Remove the first element
let a1 = [10, 20, 30, 40];
a1.splice(0, 1);
console.log(a1);

// Example 2: Remove the last two elements
let a2 = [1, 2, 3, 4, 5];
a2.splice(-2, 2);
console.log(a2);

// Example 3: Replace the second element with 99
let a3 = [10, 20, 30, 40];
a3.splice(1, 1, 99);
console.log(a3);

// Example 4: Insert elements without removing anything
let a4 = ["a", "d"];
a4.splice(1, 0, "b", "c");
console.log(a4);

// Example 5: Replace the last element
let a5 = ["red", "green", "blue"];
a5.splice(2, 1, "yellow");
console.log(a5);

// 6. reduce()

// Example 1: Find the sum
console.log([5, 10, 15].reduce((sum, n) => sum + n, 0));

// Example 2: Subtract numbers from left to right
console.log([20, 5, 3].reduce((result, n) => result - n));

// Example 3: Count the words
console.log(["I", "love", "JavaScript"].reduce((count, word) => count + 1, 0));

// Example 4: Find the longest word
console.log(["cat", "elephant", "dog"].reduce(
    (longest, word) => word.length > longest.length ? word : longest
));

// Example 5: Combine numbers into a string
console.log([1, 2, 3, 4].reduce((result, n) => result + n, ""));

// 7. find()

// Example 1: Find the first number greater than 50
console.log([10, 30, 60, 80].find(n => n > 50));

// Example 2: Find the first number divisible by 5
console.log([2, 7, 15, 20].find(n => n % 5 === 0));

// Example 3: Find the first name ending in a
console.log(["Ali", "Ahmed", "Sara", "Zara"].find(name => name.endsWith("a")));

// Example 4: Find the first word containing o
console.log(["cat", "apple", "orange", "dog"].find(word => word.includes("o")));

// Example 5: Find the first negative number
console.log([5, 8, 0, -2, -7].find(n => n < 0));

// 8. findIndex() 

// Example 1: Find the index of 30
console.log([10, 20, 30, 40].findIndex(n => n === 30));

// Example 2: Find the first negative number's index
console.log([5, 3, -1, -4].findIndex(n => n < 0));

// Example 3: Find the index of the first name starting with S
console.log(["Ali", "Ahmed", "Sara", "Sana"].findIndex(name => name.startsWith("S")));

// Example 4: Find the index of the first number above 100
console.log([20, 50, 150, 200].findIndex(n => n > 100));

// Example 5: Find a missing value
console.log(["HTML", "CSS", "JavaScript"].findIndex(item => item === "Python"));

// 9. some() 

// Example 1: Is at least one number negative?
console.log([1, 2, -3, 4].some(n => n < 0));

// Example 2: Is anyone older than 18?
console.log([12, 15, 17, 21].some(age => age > 18));

// Example 3: Does any word start with Z?
console.log(["Apple", "Banana", "Zebra"].some(word => word.startsWith("Z")));

// Example 4: Is any number zero?
console.log([2, 4, 6, 0].some(n => n === 0));

// Example 5: Is any word empty?
console.log(["hello", "world", ""].some(word => word === ""));

// 10. every()

// Example 1: Are all numbers positive?
console.log([1, 2, 3, 4].every(n => n > 0));

// Example 2: Are all numbers even?
console.log([2, 4, 6, 7].every(n => n % 2 === 0));

// Example 3: Do all names start with A?
console.log(["Ali", "Ahmed", "Asad"].every(name => name.startsWith("A")));

// Example 4: Are all words non-empty?
console.log(["hello", "world", "JavaScript"].every(word => word.length > 0));

// Example 5: Are all numbers below 50?
console.log([10, 20, 30, 60].every(n => n < 50));

// 11. join() 

// Example 1: Join names with commas
console.log(["Ali", "Sara", "Ahmed"].join(","));

// Example 2: Join numbers with plus signs
console.log([1, 2, 3, 4].join("+"));

// Example 3: Join words with underscores
console.log(["learn", "javascript", "today"].join("_"));

// Example 4: Join letters without a separator
console.log(["C", "O", "D", "E"].join(""));

// Example 5: Join items using new lines
console.log(["First", "Second", "Third"].join("\n"));

// 12. includes()

// Example 1: Check whether 25 exists
console.log([10, 20, 25, 30].includes(25));

// Example 2: Check whether mango exists
console.log(["apple", "banana", "orange"].includes("mango"));

// Example 3: Check whether zero exists
console.log([1, 2, 0, 4].includes(0));

// Example 4: Check whether CSS exists
console.log(["HTML", "CSS", "JavaScript"].includes("CSS"));

// Example 5: Check whether ALI exists
console.log(["Ali", "Sara", "Ahmed"].includes("ALI"));