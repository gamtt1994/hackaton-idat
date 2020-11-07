import React from "react";
import PropTypes from "prop-types";

const Data = (props) => {
  const { dato } = props;
  console.log("props", dato);
  return (
    <div className="dataPersonal">
      <h1>Información del Usuario</h1>
      <div>
        {dato.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-photo">
              <img className="photo" src="personal.png" />
            </div>
            <div className="card-container">
              <label>Nombre: {item.name}</label>
              <label>Correo: {item.email}</label>
              <label>Telefono: {item.cell}</label>
              <label>Comentario: {item.comentarios}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
