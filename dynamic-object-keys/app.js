// Dynamic Object Keys

//dot notation
const myPerson = {
  name: "kadir",
}

console.log(myPerson.name);

myPerson.age = 32;
myPerson.etnicity = "Turkish";
console.log(myPerson);

//square bracket notation

const items = {
  'featured-items': ['itemOne', 'itemTwo'],
};

console.log(myPerson['name']);
console.log(items['featured-items']);

const keyName = 'console';

const key = {
  [keyName] : false,
};

key[keyName] = 'xbox';

console.log(key);

const state = {
  loading : true,
  name: '',
  job : '',
};

function updateState(key,value){
  state[key] = value
};

updateState('name', 'kadir');
updateState('job', 'photographer');
updateState('loading', 'false');
updateState('tools', ['sony a7r3', 'godox np70 flash'])

console.log(state);
