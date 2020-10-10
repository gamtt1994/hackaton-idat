/*
Ejercicio #7: Índice de masa corporal
- Realizar un programa que nos permita calcular el índice de masa corporal
de una persona por medio de su peso y altura solicitados
*/

let peso = prompt("Ingrese su peso");
let altura = prompt("Ingrese su altura");

let imc = peso / (altura * altura);

if (imc > 30.0) {
  console.log(`Usted tiene obesidad  ${imc.toFixed(1)}`);
  alert(`Usted tiene obesidad  ${imc.toFixed(1)}`);
} else if (imc < 29.9 && imc > 25.0) {
  console.log(`Usted tiene sobrepeso  ${imc.toFixed(1)}`);
  alert(`Usted tiene sobrepeso  ${imc.toFixed(1)}`);
} else if (imc < 24.9 && imc > 18.5) {
  console.log(`Usted tiene su peso normal  ${imc.toFixed(1)}`);
  alert(`Usted tiene su peso normal  ${imc.toFixed(1)}`);
} else {
  console.log(`Usted esta bajo en peso  ${imc.toFixed(1)}`);
  alert(`Usted esta bajo en peso  ${imc.toFixed(1)}`);
}
