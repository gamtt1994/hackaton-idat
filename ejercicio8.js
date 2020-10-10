/*
● Ejercicio #8:
- Teniendo una lista de objetos en distintos idiomas, idiomas usados.
- Elabora un traductor e identificador de idioma con los datos dados, de
manera sencilla.
*/

let Languages = [
  {
    language: "Español",
    text: "Bienvenido al curso de React Native en PachaQtec",
    id_language: 1,
  },
  {
    language: "Ingles",
    text: "Welcome to the React Native course at PachaQtec",
    id_language: 2,
  },
  {
    languageanguage: "Francés",
    text: "Bienvenue dans le cours React Native chez PachaQtec",
    id_language: 3,
  },
  {
    language: "Italiano",
    text: "Benvenuti al corso React Native presso PachaQtec",
    id_language: 4,
  },
  {
    language: "Portugués",
    text: "Bem-vindo ao curso React Native na PachaQtec",
    id_language: 5,
  },
];

const search_languages = (languages) => {
  let x = Languages.filter((variable) =>
    Object.values(variable).includes(languages)
  );
  return x[0].language;
};

console.log(search_languages("Bem-vindo ao curso React Native na PachaQtec"));
