/* 
Ejercicio #9:
- Teniendo una lista de números enteros, sumar todos los números pares e
impares en dicha lista y mostrarlo en variables separadas.
*/
let valores = [-2, 1, 2, 3, 4, 4];
let sumapar = 0;
let sumaimpar = 0;
for (i = 0; i < valores.length; i++) {
  if (valores[i] % 2 == 0) {
    sumapar = sumapar + valores[i];
  } else {
    sumaimpar = sumaimpar + valores[i];
  }
}
console.log("La suma de los pares es: ", sumapar);
console.log("La suma de los impares es: ", sumaimpar);
