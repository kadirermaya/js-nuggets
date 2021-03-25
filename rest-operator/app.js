//rest operator
//gathers/collets itesms
//destructuring, functions
//placement important, careful with the same name
//rest when declare funtion, spread when invoke the function

//arrays

const fruits= ['apple', 'orange', 'lemon', 'banana'];
const [first,...restOfTheFruits] = fruits;

console.log(first,restOfTheFruits);
const specificFruit = restOfTheFruits.find((fruit) => fruit === 'orange');
console.log(specificFruit);

//objects

const person = {name: 'kadir', lastName: 'ermaya', job: 'developer'};
const {job,...rest} = person;
console.log(job,rest);

//funtions

const getAverage = (name,...scores) =>{
    console.log(name);
    console.log(scores);
    const average = scores.reduce((total,item)=> {return total += item},0)/scores.length;
    console.log(average);
}
const testScores = [23,45,67,89];
getAverage(person.name,...testScores);