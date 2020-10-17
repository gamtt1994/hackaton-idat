/*
Ejercicio #0: Escriba una función de JavaScript que acepte una cadena
como parámetro y convierta la primera letra de cada palabra de la
cadena en mayúsculas
*/

const phrases = (phrase) => {
  return console.log(phrase.replace(/\b\w/g, (l) => l.toUpperCase()));
};

phrases("hola como estas");
