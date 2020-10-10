/*
Ejercicio #1: Información Factura
- Definir la estructura de un objeto que almacena una factura
- Las facturas están formadas por la información de la propia empresa
(nombre de la empresa, dirección, teléfono, NIF), la información del cliente
(similar a la de la empresa), una lista de elementos (cada uno de los cuales
dispone de descripción, precio, cantidad) y otra información básica de la
factura (importe total, tipo de IVA, forma de pago)
- Una vez definidas las propiedades del objeto, añadir un método que
calcule el importe total de la factura y actualice el valor de la propiedad
correspondiente. Por último, añadir otro método que muestre por pantalla
el importe total de la factura
*/

function factura(
  serie,
  correlativo,
  nombreempresa,
  direccion,
  telefono,
  nif,
  nombrecliente,
  direccioncliente,
  telefonocliente,
  detalle,
  importetotal,
  iva,
  formadepago
) {
  this.serie = serie;
  this.correlativo = correlativo;
  this.nombreempresa = nombreempresa;
  this.direccion = direccion;
  this.telefono = telefono;
  this.nif = nif;
  this.nombrecliente = nombrecliente;
  this.direccioncliente = direccioncliente;
  this.telefonocliente = telefonocliente;
  this.detalle = detalle;
  this.importetotal = importetotal;
  this.iva = iva;
  this.formadepago = formadepago;
}

function lista(descripcion, precionormal, cantidad) {
  this.descripcion = descripcion;
  this.precionormal = precionormal;
  this.cantidad = cantidad;
}

let lista1 = new lista("Manzana", 12, 20);
let lista2 = new lista("Pera", 12, 15);
console.log(lista1);
console.log(lista2);

let subtotal = lista1["precionormal"] + lista2["precionormal"];
let igv = subtotal * 0.18;
let total = subtotal + igv;
let iva = total * 0.1;
let total2 = total + iva;

let factura1 = new factura(
  "B001",
  "000001",
  "El Bodeguero",
  "San juaquin",
  947230083,
  12345,
  "Gustavo Maldonado",
  "Santa rosa",
  999666231,
  [lista1, lista2],
  total,
  total2,
  "Efectivo"
);
console.log(factura1);
