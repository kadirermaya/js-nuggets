const people = [
{name: 'selcuk', age: 34, position: 'ceo'},
{name: 'kadir', age: 32, position: 'jr dev'},
{name: 'ridvan', age: 29, position: 'sr dev'},
{name: 'mustafa', age: 26, position: 'sr dev'},
];

//filter == filter returns a new array

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
const srDevelopers = people.filter((person)=>{
    if(person.position === "sr dev"){
        return person
    }
    });
console.log(ceo);
console.log(srDevelopers);