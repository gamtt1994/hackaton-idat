import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Data from "../Data/index.js";

function Formulario() {
  const { register, errors, handleSubmit } = useForm();

  const [entradas, setentradas] = useState([]);

  const procesarFormulario = (data, e) => {
    console.log(data);
    setentradas([...entradas, data]);
    console.log(entradas);
    // limpiar campos
    e.target.reset();
  };

  return (
    <div className="container">
      <Data entradas={entradas} />
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

export default Formulario;
