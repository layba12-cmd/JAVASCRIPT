// map()
const numbers = [1, 2, 3];
const result1 = numbers.map(num => num * 2);

const numbers2 = [10, 20, 30];
const result2 = numbers2.map(num => num + 5);

const names = ['ali', 'ahmed', 'sara'];
const result3 = names.map(name => name.toUpperCase());


// filter()
const numbers3 = [1, 2, 3, 4, 5, 6];
const result4 = numbers3.filter(num => num % 2 === 0);

const numbers4 = [5, 12, 8, 20, 3];
const result5 = numbers4.filter(num => num > 10);

const names2 = ['Ali', 'Ahmed', 'Sara', 'Usman'];
const result6 = names2.filter(name => name.startsWith('A'));


// forEach()
const numbers5 = [1, 2, 3];
numbers5.forEach(num => console.log(num));

const fruits = ['Apple', 'Mango', 'Banana'];
fruits.forEach(fruit => console.log(fruit));

const numbers6 = [2, 4, 6];
numbers6.forEach(num => console.log(num * 3));


// slice()
const fruits2 = ['Apple', 'Banana', 'Mango', 'Orange'];
const result7 = fruits2.slice(1, 3);

const numbers7 = [10, 20, 30, 40, 50];
const result8 = numbers7.slice(0, 3);

const names3 = ['Ali', 'Ahmed', 'Sara', 'Usman'];
const result9 = names3.slice(-2);


// splice()
const numbers8 = [1, 2, 3, 4, 5];
numbers8.splice(2, 1);

const fruits3 = ['Apple', 'Mango'];
fruits3.splice(1, 0, 'Banana');

const numbers9 = [10, 20, 30, 40];
numbers9.splice(1, 1, 99);


// reduce()
const numbers10 = [1, 2, 3, 4];
const result10 = numbers10.reduce((acc, curr) => acc + curr, 0);

const numbers11 = [2, 3, 4];
const result11 = numbers11.reduce((acc, curr) => acc * curr, 1);

const marks = [70, 80, 90];
const result12 = marks.reduce((acc, curr) => acc + curr, 0);


// find()
const numbers12 = [1, 3, 4, 6, 8];
const result13 = numbers12.find(num => num % 2 === 0);

const numbers13 = [5, 12, 8, 20, 3];
const result14 = numbers13.find(num => num > 10);

const names4 = ['Ali', 'Ahmed', 'Sara'];
const result15 = names4.find(name => name.startsWith('S'));


// findIndex()
const numbers14 = [1, 3, 4, 6, 8];
const result16 = numbers14.findIndex(num => num % 2 === 0);

const numbers15 = [5, 12, 8, 20, 3];
const result17 = numbers15.findIndex(num => num > 10);

const names5 = ['Ali', 'Ahmed', 'Sara'];
const result18 = names5.findIndex(name => name.startsWith('S'));


// some()
const numbers16 = [1, 3, 5, 7, 8];
const result19 = numbers16.some(num => num % 2 === 0);

const numbers17 = [5, 10, 15, 20];
const result20 = numbers17.some(num => num > 18);

const names6 = ['Ali', 'Ahmed', 'Sara'];
const result21 = names6.some(name => name.startsWith('S'));


// every()
const numbers18 = [2, 4, 6];
const result22 = numbers18.every(num => num % 2 === 0);

const numbers19 = [10, 20, 30];
const result23 = numbers19.every(num => num > 5);

const names7 = ['Ali', 'Ahmed', 'Usman'];
const result24 = names7.every(name => name.length > 2);


// join()
const fruits4 = ['Apple', 'Banana', 'Mango'];
const result25 = fruits4.join(', ');

const numbers20 = [1, 2, 3, 4];
const result26 = numbers20.join('-');

const names8 = ['Ali', 'Ahmed', 'Sara'];
const result27 = names8.join(' ');


// includes()
const fruits5 = ['Apple', 'Banana', 'Mango'];
const result28 = fruits5.includes('Apple');

const numbers21 = [10, 20, 30, 40];
const result29 = numbers21.includes(50);

const names9 = ['Ali', 'Ahmed', 'Sara'];
const result30 = names9.includes('Sara');