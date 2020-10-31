import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="dataPersonal">
        <h1>hola</h1>
      </div>
      <form className="formulario">
        <h1>Formulario</h1>
        <input
          type="text"
          placeholder="Nombre"
          className="form-control"
          name="nombre"
        />

        <input
          type="text"
          placeholder="Apellido"
          className="form-control"
          name="apellido"
        />

        <input
          type="email"
          placeholder="Correo"
          className="form-control"
          name="Correo"
        />

        <input
          type="number"
          placeholder="Telefono"
          className="form-control"
          name="Telefono"
        />

        <input
          type="date"
          placeholder="Fecha de Nacimiento"
          className="form-control"
          name="Fecha de Nacimiento"
        />

        <input
          type="text"
          placeholder="Dirección"
          className="form-control"
          name="direccion"
        />

        <button type="submit"> Enviar </button>
      </form>
    </div>
  );
}

export default App;
