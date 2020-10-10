/* 
Ejercicio #9:
- Teniendo una lista de números enteros, sumar todos los números pares e
impares en dicha lista y mostrarlo en variables separadas.
*/
let values = [-2, 1, 2, 3, 4, 4];
let sum_pair = 0;
let sum_odd = 0;
for (i = 0; i < values.length; i++) {
  if (values[i] % 2 == 0) {
    sum_pair = sum_pair + values[i];
  } else {
    sum_odd = sum_odd + values[i];
  }
}
console.log("La suma de los pares es: ", sum_pair);
console.log("La suma de los impares es: ", sum_odd);
