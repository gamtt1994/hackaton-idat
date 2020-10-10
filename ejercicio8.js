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

const search_languages = (word, lang, Languages) => {
  let language;
  let traductor;
  for (let key in Languages) {
    if (word === Languages[key].text) {
      language = Languages[key].language;
      console.log(language);
    }
    if (lang === Languages[key].language) {
      traductor = Languages[key].text;
      console.log(traductor);
    }
  }

  console.log(
    `Identificador Idioma: ${language} - Palabra traducida al ${lang}: ${traductor}`
  );
};

search_languages(
  "Bienvenido al curso de React Native en PachaQtec",
  "Italiano",
  Languages
);
