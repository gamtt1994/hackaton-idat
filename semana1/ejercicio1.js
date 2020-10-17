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

function Company(name, address, phone) {
  this.name = name;
  this.address = address;
  this.phone = phone;
}
let company1 = new Company("Tisi Sac", "Av. separadora industrial", "1234567");

function Client(name, address, phone, dni) {
  this.name = name;
  this.address = address;
  this.phone = phone;
  this.dni = dni;
}
let client1 = new Client(
  "Gustavo Maldonado",
  "Av. san juaquin 841",
  "947230083",
  "70693876"
);

function Product(desc, price, unit) {
  this.desc = desc;
  this.price = price;
  this.unit = unit;
}

let product1 = new Product("coca cola", 2.5, 2);
let product2 = new Product("pepsi cola", 2, 2);
let product3 = new Product("inca cola", 2.5, 2);
let product4 = new Product("concordia", 1.5, 2);

let list = [];
list.push(product1);
list.push(product2);
list.push(product3);
list.push(product4);

const GetSubtotal = (list) => {
  let price = 0;
  for (let key in list) {
    price += list[key].price * list[key].unit;
  }
  return price;
};

const GetTax = (subTotal) => {
  const igv = 18;
  let tax = 0;
  tax = (subTotal * igv) / 100;
  return tax;
};

const GetTotal = (subTotal, tax) => {
  let total = 0;
  total = subTotal + tax;
  return total;
};

const ShowTotal = (total) => {
  return `Total: ${total}`;
};

function Factura(serie, correlative, company, client, detail) {
  this.serie = serie;
  this.correlative = correlative;
  this.company = company;
  this.client = client;
  this.detail = detail;
  this.subTotal = GetSubtotal(this.detail);
  this.tax = GetTax(this.subTotal);
  this.total = GetTotal(this.subTotal, this.tax);
  this.showTotal = ShowTotal(this.total);
}

let sendfactura = new Factura("B001", "00001", company1, client1, list);
console.log(sendfactura);
