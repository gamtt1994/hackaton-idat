import { useForm } from "react-hook-form";
import React, { useState } from "react";
import "./App.css";

function App() {
  const { register, errors, handleSubmit } = useForm();

  const [entradas, setentradas] = useState([]);

  const procesarFormulario = (data, e) => {
    setentradas([...entradas, data]);
    // limpiar campos
    e.target.reset();
  };

  return (
    <div className="container">
      <div className="dataPersonal">
        <h1>Información del Usuario</h1>
        <div>
          {entradas.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-photo">
                <img className="photo" src="personal.png" />
              </div>
              <div className="card-container">
                <label>Nombre: {item.nombre}</label>
                <label>Apellido: {item.apellido}</label>
                <label>Correo: {item.correo}</label>
                <label>Telefono: {item.telefono}</label>
                <label>Fecha de Nacimiento: {item.FechaNacimiento}</label>
                <label>Dirección: {item.direccion}</label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form className="formulario" onSubmit={handleSubmit(procesarFormulario)}>
        <h1>Formulario</h1>
        <input
          type="text"
          placeholder="Nombre"
          ref={register({
            required: {
              value: true,
              message: "Nombre es un campo requerido",
            },
            maxLength: {
              value: 20,
              message: "El nombre debe de tener como máximo 5 carácteres!",
            },
            minLength: {
              value: 2,
              message: "El nombre debe de tener como mínimo 2 de carácteres",
            },
          })}
          name="nombre"
        />
        <span>{errors?.nombre?.message}</span>

        <input
          type="text"
          placeholder="Apellido"
          ref={register({
            required: {
              value: true,
              message: "Apellido es un campo requerido",
            },
            maxLength: {
              value: 20,
              message: "El apellido debe de tener como máximo 5 carácteres!",
            },
            minLength: {
              value: 3,
              message: "El apellido debe de tener como mínimo 3 carácteres",
            },
          })}
          name="apellido"
        />
        <span>{errors?.apellido?.message}</span>

        <input
          type="email"
          placeholder="Correo"
          ref={register({
            required: { value: true, message: "correo es requerido" },
          })}
          name="correo"
        />

        <span>{errors?.correo?.message}</span>

        <input
          type="number"
          placeholder="Telefono"
          ref={register({
            required: {
              value: true,
              message: "telefono es un campo requerido",
            },
            maxLength: {
              value: 12,
              message: "El telefono debe de tener como máximo 12 carácteres!",
            },
            minLength: {
              value: 6,
              message: "El telefono debe de tener como mínimo 6 carácteres",
            },
          })}
          name="telefono"
        />

        <span>{errors?.telefono?.message}</span>

        <input
          type="date"
          placeholder="Fecha de Nacimiento"
          ref={register({
            required: {
              value: true,
              message: "fecha de nacimiento es un campo requerido",
            },
          })}
          name="FechaNacimiento"
        />

        <span>{errors?.FechaNacimiento?.message}</span>

        <input
          type="text"
          placeholder="Dirección"
          ref={register({
            required: {
              value: true,
              message: "Dirección es un campo requerido",
            },
            maxLength: {
              value: 50,
              message: "La dirección debe de tener como máximo 50 carácteres!",
            },
            minLength: {
              value: 3,
              message:
                "La direccióno debe de tener como mínimo 3 de carácteres",
            },
          })}
          name="direccion"
        />

        <span>{errors?.direccion?.message}</span>

        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default App;
