/*8. Crea una función usando callbacks que eleve al cuadrado y al cubo un
numero enviado como parámetro a dicha función.*/

const calculate = (arrayElement) => {
  for (const element of arrayElement) {
    let square = Math.pow(element.age, 2);
    let cube = Math.pow(element.age, 3);
    console.log(`La edad  de ${element.age} años al cuadrado es: ${square}`);
    console.log(`La edad de ${element.age} años al cubo es: ${cube}`);
  }
};

const myCallback = (num, callback) => {
  callback(num);
};

const names = [
  { id: 1, name: "Jose", age: 15 },
  { id: 2, name: "Maria", age: 25 },
  { id: 3, name: "Joel", age: 30 },
  { id: 4, name: "Gustavo", age: 25 },
  { id: 5, name: "Alejandro", age: 40 },
];

myCallback(names, calculate);
