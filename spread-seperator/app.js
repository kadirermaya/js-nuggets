const linkedin = "linkedin";
const letters = [...linkedin];
console.log(letters);

const kids = ["kadir", "selcuk", "ridvan"];
const father = "refik";
const uncles = ["ismail", "recep"];
const relatives = [...kids, father, ...uncles];
console.log(relatives);

//reference
// const newRelatives = relatives;
// newRelatives[0] = "kaaadir";
// console.log(newRelatives);

//copy
const newRelatives = [...relatives];
newRelatives[0] = "kaaadir";
console.log(newRelatives);
console.log(relatives);
//2018 - ES8 Objects

const person = { name: "murat", job: "scientist" };
const newPerson = { ...person, city: "chicago", name: "peter" };

console.log(person);
console.log(newPerson);
