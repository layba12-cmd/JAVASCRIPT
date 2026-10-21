//replace 

let str1 = "I like tea";
console.log(str1.replace("tea", "coffee"));
// Output: I like coffee

let str2 = "Good morning";
console.log(str2.replace("morning", "evening"));
// Output: Good evening

let str3 = "I love cats";
console.log(str3.replace("cats", "dogs"));
// Output: I love dogs

let str4 = "Java is easy";
console.log(str4.replace("easy", "powerful"));
// Output: Java is powerful

let str5 = "red car";
console.log(str5.replace("red", "blue"));
// Output: blue car

//split 

let str1 = "HTML CSS JavaScript";
console.log(str1.split(" "));
// Output: ["HTML", "CSS", "JavaScript"]

let str2 = "cat-dog-bird";
console.log(str2.split("-"));
// Output: ["cat", "dog", "bird"]

let str3 = "one/two/three";
console.log(str3.split("/"));
// Output: ["one", "two", "three"]

let str4 = "10:20:30";
console.log(str4.split(":"));
// Output: ["10", "20", "30"]

let str5 = "a*b*c";
console.log(str5.split("*"));
// Output: ["a", "b", "c"]

//trim

let str1 = "   Hello   ";
console.log(str1.trim());
// Output: "Hello"

let str2 = "  JavaScript  ";
console.log(str2.trim());
// Output: "JavaScript"

let str3 = "   Good morning";
console.log(str3.trim());
// Output: "Good morning"

let str4 = "Welcome home   ";
console.log(str4.trim());
// Output: "Welcome home"

let str5 = "   Learn coding   ";
console.log(str5.trim());
// Output: "Learn coding"

//includes

let str1 = "I am learning JavaScript";
console.log(str1.includes("JavaScript"));
// Output: true

let str2 = "The sky is blue";
console.log(str2.includes("green"));
// Output: false

let str3 = "Hello everyone";
console.log(str3.includes("Hello"));
// Output: true

let str4 = "Programming is fun";
console.log(str4.includes("Python"));
// Output: false

let str5 = "Welcome to my website";
console.log(str5.includes("website"));
// Output: true

//concat

let str1 = "Good";
let str2 = "Morning";
console.log(str1.concat(" ", str2));
// Output: Good Morning

let str3 = "Web";
let str4 = "Development";
console.log(str3.concat(" ", str4));
// Output: Web Development

let str5 = "I";
let str6 = "Love";
let str7 = "Coding";
console.log(str5.concat(" ", str6, " ", str7));
// Output: I Love Coding

let str8 = "Front";
let str9 = "End";
console.log(str8.concat(str9));
// Output: FrontEnd

let str10 = "Happy";
let str11 = "Learning";
console.log(str10.concat(" ", str11, "!"));
// Output: Happy Learning!