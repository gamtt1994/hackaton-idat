/*
Crea tu propia función map que funcione igual a Array.map. Por ejemplo:
function miMap(arreglo, callback).
*/

const call = (array) => {
  let arrayMap = [];
  for (key in array) {
    arrayMap[key] = array[key].name;
  }
  return arrayMap;
};

const myMap = (array, callback) => {
  return callback(array);
};

const names = [
  { id: 1, name: "Jose", age: 15 },
  { id: 2, name: "Maria", age: 25 },
  { id: 3, name: "Joel", age: 30 },
  { id: 4, name: "Gustavo", age: 25 },
  { id: 5, name: "Alejandro", age: 40 },
];

console.log("Map Nombre", myMap(names, call));
