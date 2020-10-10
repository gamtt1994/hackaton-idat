/*
Ejercicio #5: Creando un objeto círculo
- Realizar un programa que permita crear un molde para objetos de tipo
círculo al que le pasamos el radio cuando lo inicialicemos, y que tenga una
función que nos calcule su área, otra su longitud, y estos valores sean
mostrados por pantalla
*/
let radio = prompt("introdusca su nombre");

const area = (a) => {
  let xarea = Math.PI * a ** 2;
  return xarea.toFixed(2);
};

console.log("El área del circulo es :" + area(radio));
alert("El área del circulo es :" + area(radio));

const longitud = (a) => {
  let xlongitud = 2 * Math.PI * a;
  return xlongitud.toFixed(2);
};

console.log("La longitud del circulo es :" + longitud(radio));
alert("La longitud del circulo es :" + longitud(radio));
