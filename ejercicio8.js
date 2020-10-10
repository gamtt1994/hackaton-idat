/*
● Ejercicio #8:
- Teniendo una lista de objetos en distintos idiomas, idiomas usados.
- Elabora un traductor e identificador de idioma con los datos dados, de
manera sencilla.
*/

let idiomas = [
  {
    idioma: "Español",
    texto: "Bienvenido al curso de React Native en PachaQtec",
    id_idioma: 1,
  },
  {
    idioma: "Ingles",
    texto: "Welcome to the React Native course at PachaQtec",
    id_idioma: 2,
  },
  {
    idioma: "Francés",
    texto: "Bienvenue dans le cours React Native chez PachaQtec",
    id_idioma: 3,
  },
  {
    idioma: "Italiano",
    texto: "Benvenuti al corso React Native presso PachaQtec",
    id_idioma: 4,
  },
  {
    idioma: "Portugués",
    texto: "Bem-vindo ao curso React Native na PachaQtec",
    id_idioma: 5,
  },
];

let texto = "Bem-vindo ao curso React Native na PachaQtec";
let x = idiomas.filter((variable) => Object.values(variable).includes(texto));
console.log(x[0].idioma);
