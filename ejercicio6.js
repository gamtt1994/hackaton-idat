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

/*
let busqueda0 = celular.filter(function (cell) {
  if (cell.telefono == 947230083) {
    return cell;
  }
});

console.log(busqueda0);
*/

let contact = [
  { name: "Gustavo", telephone: 947230081 },
  { name: "Alenadro", telephone: 947230082 },
  { name: "Miguel", telephone: 947230083 },
];

const search_number = (number_telephone) => {
  let x = contact.filter((variable) =>
    Object.values(variable).includes(number_telephone)
  );
  return x[0].name;
};

console.log(search_number(947230081));
