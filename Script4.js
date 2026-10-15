//FOR LOOP

//Example 1: Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//Example 2: Print even numbers from 2 to 10
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
//Example 3: Print the multiplication table of 5
for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}
//Example 4: Calculate the sum of numbers from 1 to 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("Sum = " + sum);
//Example 5: Print an array of fruits
let fruits = ["Apple", "Mango", "Banana"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//WHILE LOOP

//Example 1: Print numbers from 1 to 5
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
//Example 2: Print numbers from 10 to 1 in reverse
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}
//Example 3: Print odd numbers from 1 to 9
let i = 1;
while (i <= 9) {
    console.log(i);
    i += 2;
}
//Example 4: Calculate the sum of numbers from 1 to 10
let i = 1;
let sum = 0;
while (i <= 10) {
    sum += i;
    i++;
}
console.log("Sum = " + sum);

//DO WHILE LOOP

//Example 1: Print numbers from 1 to 5
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
//Example 2: Print even numbers from 2 to 10
let i = 2;
do {
    console.log(i);
    i += 2;
} while (i <= 10);
//Example 3: Print numbers from 5 to 1 in reverse
let i = 5;
do {
    console.log(i);
    i--;
} while (i >= 1);
//Example 4: Calculate the sum of numbers from 1 to 5
let i = 1;
let sum = 0;
do {
    sum += i;
    i++;
} while (i <= 5);
console.log("Sum = " + sum);
//Example 5: Run the loop once even when the condition is false
let i = 10;
do {
    console.log("Hello World");
    i++;
} while (i < 5);