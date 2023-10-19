const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;
person2.firstName = "Simon";

// Modify the property `firstName` of the `person2` in "Simon".

// In questo caso si viene a modificare lo stesso oggetto poiché la variabile "person2" punta allo stesso elemento di "person1". (passaggio per valore) Per poter fare una vera e propria copia e modificare soltanto la variabile di "person2" utilizziamo un altro metodo. (passaggio per riferimento)
// const person2 = Object.assign({}, person1);
// person2.firstName = "Simon";

console.log(person1);
console.log(person2);
