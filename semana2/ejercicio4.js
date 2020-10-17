/*
Ejercicio #4: Escriba una función de JavaScript para contar el número
de vocales en una cadena dada
*/
const checkPhrase = (phare) => {
  var text = phare.toLowerCase().split("");
  for (k = 0; k < text.length; k++) {
    switch (text[k]) {
      case "a" || "A":
        a++;
        break;
      case "e" || "e":
        e++;
        break;
      case "i" || "I":
        i++;
        break;
      case "o" || "O":
        o++;
        break;
      case "u" || "U":
        u++;
        break;
    }
  }
  total = a + e + i + o + u;
  console.log(total);
};

var a = (e = i = o = u = 0);
vectorLetras = checkPhrase("hola A como estas");
