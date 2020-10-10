/*
Ejercicio #0: Dada una lista de números, añade una función que permita
devolver el menor de los valores de una la lista
*/

var arreglo = [-1, 6, -5.1, -5.11555, -5, 5, 89, 32];

var maxValue = arreglo[0];
for (var i = 0; i < arreglo.length; i++) {
  var currentValue = arreglo[i];

  if (currentValue < maxValue) {
    maxValue = currentValue;
  }
}
console.log("menor numero es", maxValue);
