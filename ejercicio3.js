/*


Ejercicio #3: Valor futuro de una inversión
- Realice un programa para calcular el valor futuro de una inversión; la
fórmula para obtener este valor es la siguiente:
valor_futuro =valor*Math.pow (1+tasa/100,periodo)


*/
let value = 2000;
let interest_cup = 2.5;
let period = 6;
let value_future = value * Math.pow(1 + interest_cup / 100, period);

console.log("Valor futuro de la inversión es: ", value_future);
