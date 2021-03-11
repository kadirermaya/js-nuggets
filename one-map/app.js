const people = [
  {
    name: "kadir",
    age: 31,
    position: "jr DEVELOPER",
  },
  {
    name: "selcuk",
    age: 34,
    position: "lead DEVELOPER",
  },
  {
    name: "ridvan",
    age: 29,
    position: "sr DEVELOPER",
  },
  {
    name: "mustafa",
    age: 26,
    position: "sr DEVELOPER",
  },
];

const getAges = (person) => person.age * 2;

const ages = people.map(getAges);
console.log(ages);

const newPeople = people.map((person) => {
  return {
    firstname: person.name.toUpperCase(),
    oldAge: person.age + 20,
    newPosition: person.position.toLowerCase(),
  };
});

console.log(newPeople);
