const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let keys = Object.keys(person);

for (const key of keys){
  console.log(key + ': ' + person[key]);
}
// Print values of person using Object.keys