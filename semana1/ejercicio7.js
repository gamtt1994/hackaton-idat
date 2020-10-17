/*
Ejercicio #7: Índice de masa corporal
- Realizar un programa que nos permita calcular el índice de masa corporal
de una persona por medio de su peso y altura solicitados
*/

let weight = prompt("Ingrese su peso");
let height = prompt("Ingrese su altura");

let imc = weight / (height * height);

//cambiar por un switch
switch (imc) {
  case imc > 30.0:
    console.log(`Usted tiene obesidad  ${imc.toFixed(1)}`);
    alert(`Usted tiene obesidad  ${imc.toFixed(1)}`);
    break;
  case imc < 29.9 && imc > 25.0:
    console.log(`Usted tiene sobrepeso  ${imc.toFixed(1)}`);
    alert(`Usted tiene sobrepeso  ${imc.toFixed(1)}`);
    break;
  case imc < 24.9 && imc > 18.5:
    console.log(`Usted tiene su peso normal  ${imc.toFixed(1)}`);
    alert(`Usted tiene su peso normal  ${imc.toFixed(1)}`);
    break;
  default:
    console.log(`Usted esta bajo en peso  ${imc.toFixed(1)}`);
    alert(`Usted esta bajo en peso  ${imc.toFixed(1)}`);
}
