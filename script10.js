// 1. Basic IIFE
(function() {
    console.log("Hello from IIFE!");
})();

// 2. IIFE with a parameter
(function(name) {
    console.log(`Hello, ${name}!`);
})("Ali");

// 3. IIFE with two parameters
(function(a, b) {
    console.log("Sum:", a + b);
})(10, 20);

// 4. IIFE returning a value
const result = (function() {
    return 100;
})();
console.log(result);

// 5. IIFE for multiplication
(function(a, b) {
    console.log("Product:", a * b);
})(5, 6);

// 6. IIFE with a local variable
(function() {
    const message = "This variable is local";
    console.log(message);
})();

// 7. IIFE for a calculation
(function() {
    const price = 500;
    const tax = 50;
    console.log("Total:", price + tax);
})();

// 8. IIFE with a conditional
(function(age) {
    if (age >= 18) {
        console.log("Adult");
    } else {
        console.log("Minor");
    }
})(21);

// 9. IIFE with a loop
(function() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
})();

// 10. IIFE returning an object
const person = (function() {
    return {
        name: "Sara",
        age: 22
    };
})();
console.log(person);

// 11. IIFE creating a private variable
const counter = (function() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
})();
console.log(counter());
console.log(counter());
console.log(counter());

// 12. IIFE with an array
(function() {
    const numbers = [10, 20, 30];
    console.log(numbers);
})();

// 13. IIFE calculating a factorial
(function(n) {
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    console.log("Factorial:", result);
})(5);

// 14. IIFE converting Celsius to Fahrenheit
(function(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    console.log(fahrenheit);
})(30);

// 15. IIFE with a default parameter
(function(name = "Guest") {
    console.log(`Welcome, ${name}!`);
})();

// 16. IIFE with an arrow function
(() => {
    console.log("Arrow IIFE executed!");
})();

// 17. IIFE returning a function
const greet = (function() {
    return function(name) {
        return `Hello, ${name}!`;
    };
})();
console.log(greet("Ahmed"));

// 18. IIFE for filtering an array
(function() {
    const numbers = [1, 2, 3, 4, 5, 6];
    const evens = numbers.filter(function(n) {
        return n % 2 === 0;
    });

    console.log(evens);
})();

// 19. IIFE with a private configuration
const config = (function() {
    const appName = "My JavaScript App";
    const version = "1.0";

    return {
        getAppName: function() {
            return appName;
        },
        getVersion: function() {
            return version;
        }
    };
})();
console.log(config.getAppName());
console.log(config.getVersion());

// 20. Async IIFE
(async function() {
    const message = await Promise.resolve("Async IIFE completed!");
    console.log(message);
})();