/*
● Ejercicio #2: Añadiendo elementos a un array
- Añadir elementos a un array con Javascript push(Ciclo for)
- Crear un array de elementos que contenga nombres y posteriormente
agregar más elementos por medio del método “push”
*/

let data = [1];
for (i = 0; i < 10; i++) {
  data.push(i);
}
console.log(data);

let nombres = ["Gustavo", "Alejandro"];
nombres.push("Miguel");

console.log(nombres);
