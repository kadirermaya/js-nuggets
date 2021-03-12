// Unique Values
const menu = [
  {
    name: "omelette",
    category: "breakfast",
  },
  {
    name: "cheese burger",
    category: "lunch",
  },
  {
    name: "kabob",
    category: "dinner",
  },
  {
    name: "bacon",
    category: "breakfast",
  },
  {
    name: "eggs",
    category: "breakfast",
  },
  {
    name: "cheesecake",
    category: "dinner",
  },
];

const categories = ["all", ...new Set(menu.map((item) => item.category))];
console.log(categories);

// map - get all instances
// new Set - narrow down
// ['all', ...] - turn it back to array

const result = document.querySelector(".result");
result.innerHTML = categories
  .map((category) => {
    return `<button>${category}</button>`;
  })
  .join(" ");
