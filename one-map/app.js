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

const getAges = (person) => person.age;

const ages = people.map(getAges);
console.log(ages);

const newPeople = people.map((item) => {
  return {
    firstname: item.name.toUpperCase(),
    oldAge: item.age + 20,
    newPosition: item.position.toLowerCase(),
  };
});

console.log(newPeople);

const names = people.map((people) => `<h2>${people.name}</h2>`);
const result = document.querySelector("#result");
result.innerHTML = names.join("");
