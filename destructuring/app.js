const fruits = ["strawberry", "plum", "watermelon"];
const friends = ["selcuk", "ridvan", "mustafa"];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

const [selcuk, , mustafa] = friends;
console.log(selcuk, mustafa);

let first = "selcuk";
let second = "mustafa";

// let temp = second;
// second = first;
// firs = temp;

[second, first] = [first, second];

console.log(first, second);
