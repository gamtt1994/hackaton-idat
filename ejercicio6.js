/*
Ejercicio #6: Identificar llamada
- Un teléfono celular cuenta con una funcionalidad de identificación de
llamadas permitiendo no solo ver qué número nos intenta contactar sino
también conocer qué contacto dado de alta en nuestro dispositivo, nos
llama
- Realizar un programa que imite esta funcionalidad, principalmente que el
usuario al ingresar el número de teléfono, el programa reconozca a quién
pertenece el mismo
*/

let celular = [
  { nombre: "Gustavo", telefono: 947230083 },
  { nombre: "Alejandro", telefono: 947230080 },
];
/*
let busqueda0 = celular.filter(function (cell) {
  if (cell.telefono == 947230083) {
    return cell;
  }
});

console.log(busqueda0);
*/

let data = [
  { name: "Gustavo", telefono: 947230081 },
  { name: "Alenadro", telefono: 947230082 },
  { name: "Miguel", telefono: 947230083 },
];

let texto = 947230081;
let x = data.filter((variable) => Object.values(variable).includes(texto));
console.log(x[0].name);
