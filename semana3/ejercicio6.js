/*6. Crea una función usando callbacks, que reciba una condición, y dos
funciones que se realicen en caso la condición se cumpla o no.*/

const adult = (age) =>
  console.log(`La persona con edad de ${age} es mayor de edad`);
const boys = (age) =>
  console.log(`La persona con edad de ${age} es menor de edad`);

const evaluate = (validateAge) => {
  for (const element of validateAge) {
    if (element.age >= 18) adult(element.age);
    else boys(element.age);
  }
};

const myCallback = (number, callback) => {
  callback(number);
};

const names = [
  { id: 1, name: "Jose", age: 15 },
  { id: 2, name: "Maria", age: 25 },
  { id: 3, name: "Joel", age: 30 },
  { id: 4, name: "Gustavo", age: 25 },
  { id: 5, name: "Alejandro", age: 40 },
];

myCallback(names, evaluate);
