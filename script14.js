
//Create an array called fruits
const fruits = ["apple", "banana", "cherry"];
console.log(fruits);

// Access the second element of colors
const colors = ["red", "green", "blue"];
console.log(colors[1]);

// Update the last element of numbers to 40
const numbers = [10, 20, 30];
numbers[2] = 40;
console.log(numbers);

// Add "grape" to the end of fruits
const fruits = ["apple", "banana", "cherry"];
fruits.push("grape");
console.log(fruits);

// Remove the last element from cities
const cities = ["New York", "London", "Paris"];
cities.pop();
console.log(cities);

// Add "mango" to the beginning of fruits
const fruits = ["banana", "cherry"];
fruits.unshift("mango");
console.log(fruits);

// Remove the first element from numbers
const numbers = [100, 200, 300];
numbers.shift();
console.log(numbers);

// Find the length of fruits
const fruits = ["apple", "banana", "cherry", "grape"];
console.log(fruits.length);

// Use a for loop to print each animal
const animals = ["dog", "cat", "elephant"];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// Check whether colors contains "yellow"
const colors = ["red", "green", "blue"];
console.log(colors.includes("yellow"));

// Reverse the order of letters
const letters = ["a", "b", "c", "d"];
letters.reverse();
console.log(letters);

// Sort numbers in ascending order
const numbers = [30, 10, 50, 20, 40];
numbers.sort((a, b) => a - b);
console.log(numbers);

// Find the index of "Paris"
const cities = ["New York", "London", "Paris", "Tokyo"];
console.log(cities.indexOf("Paris"));

// Remove "banana" from fruits
const fruits = ["apple", "banana", "cherry"];
fruits.splice(fruits.indexOf("banana"), 1);
console.log(fruits);

// Use slice() to get the last two elements

const numbers = [10, 20, 30, 40, 50];
const lastTwo = numbers.slice(-2);
console.log(lastTwo);

// Merge two arrays into one
const array1 = ["a", "b"];
const array2 = ["c", "d"];
const mergedArray = array1.concat(array2);
console.log(mergedArray);

// Write a function to remove duplicate elements
const numbers = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates(numbers));