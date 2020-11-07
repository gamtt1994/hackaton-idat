import React, { useState } from "react";
import Data from "../Data/index.js";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [comentario, setComentario] = useState("");
  const [dato, setData] = useState([]);
  const procesarFormulario = () => {
    var validarNombre = document.getElementById("validarnombre");
    var validarCorreo = document.getElementById("validarcorreo");
    var validarTelefono = document.getElementById("validartelefono");
    var validarComentario = document.getElementById("validarcomentario");

    if (nombre === "") {
      validarNombre.innerHTML = "Debe de ingresar su nombre";
    } else {
      validarNombre.innerHTML = "";
    }

    if (correo === "") {
      validarCorreo.innerHTML = "Debe de ingresar su correo";
    } else {
      validarCorreo.innerHTML = "";
    }

    if (telefono === "") {
      validarTelefono.innerHTML = "Debe de ingresar su telefono";
    } else {
      validarTelefono.innerHTML = "";
    }

    if (comentario === "") {
      validarComentario.innerHTML = "Debe de ingresar su comentario";
    } else {
      validarComentario.innerHTML = "";
    }

    if (nombre != "" && correo != "" && telefono != "" && comentario != "") {
      setData([
        {
          name: nombre,
          email: correo,
          cell: telefono,
          comentarios: comentario,
        },
      ]);
    }
  };

  return (
    <div className="container">
      <div className="formulario">
        <div className="contenedor">
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            id="nombre"
            autoComplete="none"
            minLength="2"
            maxlength="10"
            onChange={(e) => setNombre(e.target.value)}
          />
          <span id="validarnombre"></span>

          <input
            type="email"
            placeholder="Correo"
            name="correo"
            autoComplete="none"
            minLength="10"
            maxlength="40"
            onChange={(e) => setCorreo(e.target.value)}
          />

          <span id="validarcorreo"></span>

          <input
            type="number"
            placeholder="Telefono"
            autoComplete="none"
            name="telefono"
            minLength="6"
            maxlength="12"
            onChange={(e) => setTelefono(e.target.value)}
          />

          <span id="validartelefono"></span>

          <textarea
            type="text"
            placeholder="Comentario"
            autoComplete="none"
            name="comentario"
            minLength="6"
            maxlength="20"
            onChange={(e) => setComentario(e.target.value)}
          />

          <span id="validarcomentario"></span>
        </div>
        <div className="formbutton">
          <button onClick={() => procesarFormulario()}>
            <svg
              className="logobutton"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
            Send
          </button>
        </div>
      </div>

      <Data dato={dato} />
    </div>
  );
}

export default Formulario;
