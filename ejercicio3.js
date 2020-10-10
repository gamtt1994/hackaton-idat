/*
Ejercicio #3: Valor futuro de una inversión
- Realice un programa para calcular el valor futuro de una inversión; la
fórmula para obtener este valor es la siguiente:
valor_futuro =valor*Math.pow (1+tasa/100,periodo)
*/
let valor = 2000;
let tasa = 2.5;
let periodo = 6;
let valor_futuro = valor * Math.pow(1 + tasa / 100, periodo);

console.log("Valor futuro de la inversión es: ", valor_futuro.toFixed(2));
