/*
Ejercicio #0: Dada una lista de números, añade una función que permita
devolver el menor de los valores de una la lista
*/

var arrangement = [-1, 6, -5.1, -5.11555, -5, 5, 89, 32];

var minValue = arrangement[0];
for (var i = 0; i < arrangement.length; i++) {
  var currentValue = arrangement[i];

  if (currentValue < minValue) {
    minValue = currentValue;
  }
}
console.log("menor numero es", minValue);
