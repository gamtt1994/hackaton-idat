import { data } from "../../constants/data";
import Money from "../Money/index";
import "./money.css";
import React, { useState } from "react";

function List() {
  const [valorInitial, setvalorInitial] = useState("0");
  const [moneyInitial, setmoneyInitial] = useState("PEN");
  const [moneyChange, setmoneyCange] = useState("PEN");

  const calcular = () => {
    var resultado = document.getElementById("resultado");
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === moneyInitial) {
        console.log(data[i].name);
        console.log(moneyInitial);

        if ("PEN" === moneyChange) {
          console.log(valorInitial * data[i].cambio.sol);
          resultado.innerHTML = "S/." + valorInitial * data[i].cambio.sol;
        }

        if ("USD" === moneyChange) {
          console.log(valorInitial * data[i].cambio.dolar);
          resultado.innerHTML = "$" + valorInitial * data[i].cambio.dolar;
        }

        if ("MXN" === moneyChange) {
          console.log(valorInitial * data[i].cambio.PesoMexicano);
          resultado.innerHTML =
            "$" + valorInitial * data[i].cambio.PesoMexicano;
        }
      }
    }
  };

  return (
    <div className="Container">
      <div className="Header">
        <h2>Exchange Rate</h2>
        <h1 id="resultado">S/. 0</h1>
      </div>

      <div className="Amount">
        <h3>Amount</h3>
        <input
          type="number"
          defaultValue="0"
          onChange={(e) => setvalorInitial(e.target.value)}
        />
      </div>

      <div className="From">
        <h3>From</h3>
        <div className="container">
          <select onChange={(e) => setmoneyInitial(e.target.value)}>
            {data.map((money) => (
              <Money
                key={money.id}
                id={money.id}
                name={money.name}
                imagen={money.imagen}
              />
            ))}
          </select>

          <img src="./img/change.png" alt="change" />

          <select onChange={(e) => setmoneyCange(e.target.value)}>
            {data.map((money) => (
              <Money key={money.id} id={money.id} name={money.name} />
            ))}
          </select>
        </div>
      </div>

      <div className="footerButton">
        <button onClick={() => calcular()}>Convert</button>
      </div>
    </div>
  );
}

export default List;
