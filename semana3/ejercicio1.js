/*
Crea tu propia función forEach que funcione igual a Array.forEach. Por
ejemplo: function miForEach(arreglo, callback){ // completa aquí }
*/

const names = [
  { id: 1, name: "Jose", age: 15 },
  { id: 2, name: "Maria", age: 25 },
  { id: 3, name: "Joel", age: 30 },
  { id: 4, name: "Gustavo", age: 25 },
  { id: 5, name: "Alejandro", age: 40 },
];

const call = (arrayElement) => {
  for (const element of arrayElement) {
    console.log(element);
  }
};

const myForeach = (arrayElement, callback) => {
  callback(arrayElement);
};

myForeach(names, call);
