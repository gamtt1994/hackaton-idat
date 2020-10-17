/*
Ejercicio #2: Escriba una función recursiva de JavaScript que determine
si un número es par o impar
*/
const parOrImpar = (number) => {
  if (number % 2 == 0) {
    console.log(`El ${number} es número par`);
  } else {
    console.log(`El ${number} es número impar`);
  }
};

parOrImpar(2);
