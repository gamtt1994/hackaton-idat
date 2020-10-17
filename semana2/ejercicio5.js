/*
Ejercicio #5: Escriba una función de JavaScript para imprimir un número
entero con comas como miles de separadores
o Datos de prueba:
console.log (miles_separador (1000));
"1,000"
o console.log (miles_separador (10000.23));
"10,000.23"
o console.log (miles_separador (100000));
"100,000"
*/

const numberWithCommas = (number) => {
  console.log(number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
};

numberWithCommas(100000.235);
