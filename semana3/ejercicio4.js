/*4. Crea tu propia función reduce que funcione igual a Array.reduce. Por
ejemplo: function miReduce(arreglo, reduce).*/

const reduce = (array) => {
  let arrayReduce = 0;
  for (key in array) {
    arrayReduce += array[key].age;
  }
  return arrayReduce;
};

const myReduce = (array, callback) => {
  return callback(array);
};

const names = [
  { id: 1, name: "Jose", age: 15 },
  { id: 2, name: "Maria", age: 25 },
  { id: 3, name: "Joel", age: 30 },
  { id: 4, name: "Gustavo", age: 25 },
  { id: 5, name: "Alejandro", age: 40 },
];
console.log(myReduce(names, reduce));
