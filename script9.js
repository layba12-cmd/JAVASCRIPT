// 1. Anonymous function assigned to a variable
const greet = function() {
    return "Hello!";
};
console.log(greet());

// 2. Anonymous function with a parameter
const greetUser = function(name) {
    return `Hi, ${name}!`;
};
console.log(greetUser("Ayesha"));

// 3. Add numbers
const add = function(a, b) {
    return a + b;
};
console.log(add(3, 7));

// 4. Multiply numbers
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 5));

// 5. Pass an anonymous function as a callback
setTimeout(function() {
    console.log("Executed after one second");
}, 1000);

// 6. Use an anonymous function with forEach
[1, 2, 3].forEach(function(n) {
    console.log(n);
});

// 7. Double values using map
const doubled = [2, 4, 6].map(function(n) {
    return n * 2;
});
console.log(doubled);

// 8. Filter even numbers
const evens = [1, 2, 3, 4, 5, 6].filter(function(n) {
    return n % 2 === 0;
});
console.log(evens);

// 9. Sum values using reduce
const total = [10, 20, 30].reduce(function(sum, n) {
    return sum + n;
}, 0);
console.log(total);

// 10. Sort numbers
const sorted = [8, 3, 5, 1].sort(function(a, b) {
    return a - b;
});
console.log(sorted);

// 11. Check if a number is positive
const isPositive = function(n) {
    return n > 0;
};
console.log(isPositive(10));

// 12. Convert a string to uppercase
const uppercase = function(str) {
    return str.toUpperCase();
};
console.log(uppercase("hello"));

// 13. Find a number's square
const square = function(n) {
    return n * n;
};
console.log(square(9));

// 14. Find the maximum value
const max = function(a, b) {
    return a > b ? a : b;
};
console.log(max(20, 15));

// 15. Use a callback in a custom function
function calculate(a, b, operation) {
    return operation(a, b);
}
console.log(calculate(8, 2, function(a, b) {
    return a - b;
}));

// 16. Check string length
const getLength = function(text) {
    return text.length;
};
console.log(getLength("JavaScript"));

// 17. Remove negative numbers
const positives = [-2, 4, -1, 8, 3].filter(function(n) {
    return n >= 0;
});
console.log(positives);

// 18. Find a user's name in an array
const users = [
    { name: "Ali" },
    { name: "Sara" },
    { name: "Omar" }
];
const user = users.find(function(item) {
    return item.name === "Sara";
});
console.log(user);

// 19. Check whether a word exists
const hasJavaScript = ["HTML", "CSS", "JavaScript"].some(
    function(language) {
        return language === "JavaScript";
    }
);
console.log(hasJavaScript);

// 20. Immediately execute an anonymous function
(function() {
    console.log("Anonymous function executed!");
})();