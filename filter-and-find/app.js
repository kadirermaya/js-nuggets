const people = [
{name: 'selcuk', age: 34, position: 'ceo'},
{name: 'kadir', age: 32, position: 'jr dev'},
{name: 'ridvan', age: 29, position: 'sr dev'},
{name: 'mustafa', age: 26, position: 'sr dev'},
];

const motorcycles = [{brand: 'triumph', madeIn: 'europe'}, {brand: 'honda', madeIn: 'japan'},{brand: 'yamaha', madeIn: 'japan'},{brand: 'suzuki', madeIn: 'japan'}];

//filter function == filter returns a new array
// if no match returns empty array

//match
const oldPeople = people.filter((person)=>{
// if(person.age < 30){
//     return person;
// }
return person.age < 30
});
console.log(oldPeople);

const ceo = people.filter((person)=>{
if(person.position === "ceo"){
    return person
}
});
const srDevelopers = people.filter((person)=> person.position === "sr dev");
console.log(ceo);
console.log(srDevelopers);

//no match
const leadDev = people.filter((person) => person.position === "lead dev");
console.log(leadDev); // returns empty array


// find function - brings the first item of an array if there is a match

//match
const selcuk = people.find((person) => person.name === "selcuk");
console.log(selcuk);
const triumph = motorcycles.find((motorcycle) => motorcycle === 'triumph');
console.log(triumph);

//no match

const bmw = motorcycles.find((motorcycle) => motorcycle === 'bmw');
console.log(bmw);

//multi matches 
//will bring the first match
const japaneseBikes = motorcycles.find((motorcycle) => motorcycle.madeIn === 'japan')
console.log(japaneseBikes);