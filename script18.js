// 1. String Length
let str1 = "Hello";
console.log(str1.length);

let str2 = "JavaScript";
console.log(str2.length);

let str3 = "Good Morning";
console.log(str3.length);

let str4 = "OpenAI";
console.log(str4.length);

let str5 = "Programming";
console.log(str5.length);


// 2. charAt()
let str6 = "JavaScript";
console.log(str6.charAt(0));

let str7 = "Hello";
console.log(str7.charAt(1));

let str8 = "Computer";
console.log(str8.charAt(3));

let str9 = "Pakistan";
console.log(str9.charAt(5));

let str10 = "Developer";
console.log(str10.charAt(4));


// 3. toUpperCase() / toLowerCase()
let str11 = "hello";
console.log(str11.toUpperCase());

let str12 = "JAVASCRIPT";
console.log(str12.toLowerCase());

let str13 = "good morning";
console.log(str13.toUpperCase());

let str14 = "WELCOME";
console.log(str14.toLowerCase());

let str15 = "Hello World";
console.log(str15.toUpperCase());
console.log(str15.toLowerCase());


// 4. indexOf()
let str16 = "JavaScript is awesome";
console.log(str16.indexOf("is"));

let str17 = "Hello World";
console.log(str17.indexOf("World"));

let str18 = "Programming";
console.log(str18.indexOf("g"));

let str19 = "I love coding";
console.log(str19.indexOf("coding"));

let str20 = "Learn JavaScript";
console.log(str20.indexOf("Python"));


// 5. slice() / substring()
let str21 = "JavaScript";
console.log(str21.slice(0, 4));

let str22 = "Hello World";
console.log(str22.slice(6, 11));

let str23 = "Programming";
console.log(str23.slice(0, 7));

let str24 = "JavaScript is fun";
console.log(str24.substring(11, 17));

let str25 = "Good Morning";
console.log(str25.substring(0, 4));


// 6. replace()
let str26 = "Hello World";
console.log(str26.replace("World", "JavaScript"));

let str27 = "I like tea";
console.log(str27.replace("tea", "coffee"));

let str28 = "Good Morning";
console.log(str28.replace("Morning", "Evening"));

let str29 = "I love Java";
console.log(str29.replace("Java", "Python"));

let str30 = "red apple";
console.log(str30.replace("red", "green"));


// 7. split()
let str31 = "apple,banana,orange";
console.log(str31.split(","));

let str32 = "Hello World";
console.log(str32.split(" "));

let str33 = "red-blue-green";
console.log(str33.split("-"));

let str34 = "one two three four";
console.log(str34.split(" "));

let str35 = "cat,dog,bird";
console.log(str35.split(","));


// 8. trim()
let str36 = "   Hello   ";
console.log(str36.trim());

let str37 = "  JavaScript  ";
console.log(str37.trim());

let str38 = "   Good Morning   ";
console.log(str38.trim());

let str39 = "  Pakistan ";
console.log(str39.trim());

let str40 = "    Learn Coding    ";
console.log(str40.trim());


// 9. includes()
let str41 = "JavaScript is awesome";
console.log(str41.includes("awesome"));

let str42 = "Hello World";
console.log(str42.includes("World"));

let str43 = "I love programming";
console.log(str43.includes("Python"));

let str44 = "Learn JavaScript";
console.log(str44.includes("Java"));

let str45 = "Welcome Home";
console.log(str45.includes("home"));


// 10. concat()
let str46 = "Hello";
console.log(str46.concat(" World"));

let str47 = "Good";
console.log(str47.concat(" Morning"));

let str48 = "Java";
console.log(str48.concat("Script"));

let str49 = "I love";
console.log(str49.concat(" coding"));

let str50 = "Open";
console.log(str50.concat("AI", " GPT"));