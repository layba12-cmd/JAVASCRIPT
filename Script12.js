//replace

let str = "Hello, World!";
console.log(str.replace("World", "JavaScript"));
// Output: Hello, JavaScript!

let str = "My name is Ali";
console.log(str.replace("Ali", "Ahmed"));
// Output: My name is Ahmed

let str = "I like red color";
console.log(str.replace("red", "blue"));
// Output: I like blue color

let str = "I have 2 books";
console.log(str.replace("2", "5"));
// Output: I have 5 books

let str = "Hello";
console.log(str.replace("H", "Y"));
// Output: Yello

//split

let str = "apple,banana,orange";
console.log(str.split(","));
// Output: ["apple", "banana", "orange"]

let str = "Hello World";
console.log(str.split(" "));
// Output: ["Hello", "World"]

let str = "2026-10-20";
console.log(str.split("-"));
// Output: ["2026", "10", "20"]

let str = "one|two|three";
console.log(str.split("|"));
// Output: ["one", "two", "three"]

let str = "Hello";
console.log(str.split(""));
// Output: ["H", "e", "l", "l", "o"]

//trim

let str = "   Hello   ";
console.log(str.trim());
// Output: "Hello"

let str = "   Ali Khan   ";
console.log(str.trim());
// Output: "Ali Khan"

let str = "   JavaScript is easy   ";
console.log(str.trim());
// Output: "JavaScript is easy"

let str = "   12345   ";
console.log(str.trim());
// Output: "12345"

let str = "   Pakistan   ";
let result = str.trim();
console.log(result.length);
// Output: 8

//include

let str = "JavaScript is awesome";
console.log(str.includes("awesome"));
// Output: true

let str = "I love programming";
console.log(str.includes("Python"));
// Output: false

let str = "My name is Ahmed";
console.log(str.includes("Ahmed"));
// Output: true

let str = "Hello World";
console.log(str.includes("W"));
// Output: true

let str = "Learning JavaScript";
console.log(str.includes("Java"));
// Output: true

//concat

let str1 = "Hello";
let str2 = "World";

console.log(str1.concat(str2));
// Output: HelloWorld

let str1 = "Ali";
let str2 = "Khan";

console.log(str1.concat(" ", str2));
// Output: Ali Khan

let str1 = "I";
let str2 = "love";
let str3 = "coding";

console.log(str1.concat(" ", str2, " ", str3));
// Output: I love coding

let str1 = "JavaScript";
let str2 = " is easy";

console.log(str1.concat(str2));
// Output: JavaScript is easy

let str1 = "Hello";
let str2 = "World";

console.log(str1.concat(", ", str2, "!"));
// Output: Hello, World!