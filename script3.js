console.log("JAVASCRIPT OPERATORS");
let a = 10;
let b = 3;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);

let x = 10;
x += 5;
console.log("Addition Assignment:", x);
x -= 3;
console.log("Subtraction Assignment:", x);
x *= 2;
console.log("Multiplication Assignment:", x);
x /= 4;
console.log("Division Assignment:", x);

//Comparison Operators
console.log("Equal (==):", 10 == "10");
console.log("Strict Equal (===):", 10 === "10");
console.log("Not Equal (!=):", 10 != 5);
console.log("Strict Not Equal (!==):", 10 !== "10");
console.log("Greater Than:", 10 > 5);
console.log("Less Than:", 10 < 5);
console.log("Greater or Equal:", 10 >= 10);
console.log("Less or Equal:", 5 <= 10);

//Logical Operators
let age = 20;
let hasID = true;
console.log("AND (&&):", age >= 18 && hasID);
console.log("OR (||):", age < 18 || hasID);
console.log("NOT (!):", !hasID);

//Ternary Operator
let marks = 75;
let result = marks >= 50 ? "Pass" : "Fail";
console.log("Ternary Result:", result);

//IF CONDITION
let number = 10;
if (number > 0) {
    console.log("Number is positive");
}

//IF Else CONDITION
let studentAge = 16;
if (studentAge >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

//If Else If Else CONDITION
let score = 82;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else if (score >= 50) {
    console.log("Grade D");
} else {
    console.log("Fail");
}