/*3. Crea tu propia función filter que funcione igual a Array.filter. Por ejemplo:
function miFilter(arreglo, filter).*/

const filter = (array) => {
  let arrayFilter = [];
  for (key in array) {
    if (array[key].name == "Maria") {
      arrayFilter.push(array[key].name);
    }
  }
  return arrayFilter;
};

const myFilter = (array, callback) => {
  return callback(array);
};

const names = [
  { id: 1, name: "Jose", age: 15 },
  { id: 2, name: "Maria", age: 25 },
  { id: 3, name: "Joel", age: 30 },
  { id: 4, name: "Gustavo", age: 25 },
  { id: 5, name: "Alejandro", age: 40 },
];

console.log(myFilter(names, filter));
