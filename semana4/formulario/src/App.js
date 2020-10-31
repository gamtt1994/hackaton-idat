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
              message: "El máximo de carácteres es 20",
            },
            minLength: {
              value: 2,
              message: "El mínimo de carácteres es 2",
            },
          })}
          autoComplete="none"
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
              message: "El máximo de carácteres es 20!",
            },
            minLength: {
              value: 3,
              message: "El mínimo de carácteres es 3",
            },
          })}
          name="apellido"
          autoComplete="none"
        />
        <span>{errors?.apellido?.message}</span>

        <input
          type="email"
          placeholder="Correo"
          ref={register({
            required: { value: true, message: "correo es requerido" },
          })}
          name="correo"
          autoComplete="none"
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
              message: "El máximo carácteres es 12!",
            },
            minLength: {
              value: 6,
              message: "El mínimo de carácteres es 6 ",
            },
          })}
          autoComplete="none"
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
          autoComplete="none"
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
              message: "El máximo de carácteres es 50",
            },
            minLength: {
              value: 3,
              message: "El mínimo de carácteres es 3",
            },
          })}
          autoComplete="off"
          name="direccion"
        />

        <span>{errors?.direccion?.message}</span>

        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default App;
