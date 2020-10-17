/*
Ejercicio #0: Escriba una función de JavaScript que acepte una cadena
como parámetro y convierta la primera letra de cada palabra de la
cadena en mayúsculas
*/

const phrases = (phrase) => {
  return console.log(phrase.replace(/\b\w/g, (word) => word.toUpperCase()));
};
//La letra g realiza una busqueda global.
//Sigue buscando coincidencias en lugar de pararse al encontrar una.

//la letra w busca la coincidencias de l

//La letra b busca la posición de una palabra limitada por espacios, puntuación o inicio/final.
phrases("hola como estas");
