//Creating and Accessing Properties

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "Black"
};
console.log(car.make);
console.log(car.year);


// Modifying Properties

const restaurant = {
    name: "Food Palace",
    location: "Islamabad",
    cuisine: "Chinese",
    rating: 4.2
};
restaurant.rating = 4.8;
console.log(restaurant);


// Adding New Properties

const game = {
    title: "PUBG",
    genre: "Battle Royale",
    platform: "Mobile"
};
game.releaseYear = 2026;
console.log(game);


//  Deleting Properties

const employee = {
    name: "Ali",
    position: "Manager",
    department: "IT",
    salary: 50000
};
delete employee.salary;
console.log(employee);


//  Calling Methods

const person = {
    name: "Ali",
    age: 22,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
person.name = "Ahmed";
person.greet();


// Using this in Methods

const player = {
    username: "Gamer123",
    score: 100,
    showScore: function() {
        console.log("Score for " + this.username + " is " + this.score);
    }
};
player.username = "PUBGPlayer";
player.score = 500;
player.showScore();


// Looping Through Properties

const house = {
    rooms: 5,
    bathrooms: 2,
    garage: true,
    yard: "Large"
};
for (let key in house) {
    console.log(key + ": " + house[key]);
}