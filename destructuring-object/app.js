const kadir = {
  first: "kadir",
  last: "ermaya",
  city: "columbus",
  brothers: {
    oldest: "selcuk",
    younger: "ridvan",
    youngest: "mustafa",
  },
};

// in array destructuring order is important but with object destructuring order is not important
// beacause we are accessing the properties.
const last = "some value";
const {
  last: blahBlah,
  first,
  city,
  zip,
  brothers: { oldest, youngest },
} = kadir;
console.log(first, last, city, zip, youngest);

// const firstName = kadir.first;
// const lastName = kadir.last;
// const oldestBrother = kadir.brothers.oldest;

function printPerson({
  first,
  last,
  city,
  brothers: { oldest, younger, youngest },
}) {
  console.log(first, last, oldest, younger, youngest);
}

printPerson(kadir);
