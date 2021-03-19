const staff = [
  {
    name: "kadir",
    age: 31,
    position: "designer",
    salary: 250,
  },
  {
    name: "selcuk",
    age: 34,
    position: "lead DEVELOPER",
    salary: 2550,
  },
  {
    name: "ridvan",
    age: 29,
    position: "sr DEVELOPER",
    salary: 750,
  },
  {
    name: "mustafa",
    age: 26,
    position: "sr DEVELOPER",
    salary: 850,
  },
];

const dailyTotal = staff.reduce((total, person) => {
  console.log(total);
  console.log(person.salary);

  total += person.salary;

  return total;
}, 0);

console.log(dailyTotal);
