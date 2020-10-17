/*
 Ejercicio #1: Escriba una función de JavaScript que acepte una cadena
como parámetro y encuentre la palabra más corta dentro de la cadena
*/

const shortWord = (phrase) => {
  var str = phrase.split(" ");
  var shortest = str.length;
  var word = null;
  str.forEach(function (str) {
    if (shortest > str.length) {
      shortest = str.length;
      word = str;
    }
  });
  console.log(word);
};
shortWord("Snowden es la mejor película de hackers");
