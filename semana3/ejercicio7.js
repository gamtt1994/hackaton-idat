/*7. Crea una función usando callbacks que haga el incremento de valores en
un array (aumentar en uno cada elemento del array).*/

const functionIncrementAge = (array, increment) => {
  for (let i = 0; i < array.length; i++) {
    array[i].age += increment;
  }
  return array;
};

const callback = (array, increment, callback) => {
  return callback(array, increment);
};

const names = [
  { id: 1, name: "Jose", age: 15 },
  { id: 2, name: "Maria", age: 25 },
  { id: 3, name: "Joel", age: 30 },
  { id: 4, name: "Gustavo", age: 25 },
  { id: 5, name: "Alejandro", age: 40 },
];

console.log(callback(names, 1, functionIncrementAge));
