/*
Ejercicio #2: Escriba una función recursiva de JavaScript que determine
si un número es par o impar
*/

const parOrImpar = (number) => {
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 == 0) {
      console.log(`El ${number[i]} es número par`);
    } else {
      console.log(`El ${number[i]} es número impar`);
    }
  }
};

parOrImpar([2, 3, 4]);
