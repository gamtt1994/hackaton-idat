import React from "react";

function Data(entradas) {
  return (
    <div className="dataPersonal">
      <h1>Información del Usuario</h1>
      <div>
        {entradas.entradas.map((item, index) => (
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
  );
}

export default Data;
