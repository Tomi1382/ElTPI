import React from "react";
import Carta from "./CardLibrito";
import { Link } from "react-router-dom";
import productosLibro from "./productosLibro.json";
export default class Libro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="libritos">
        <div className="Card">
          <img src={libro.imagen} className="imgAnimal" alt="imgLibro" />
          <div>
            <span style={{ display: "flex", flexDirection: "column" }}>
              <b>{libro.titulo}</b>
            </span>
            <span style={{ display: "flex", flexDirection: "column" }}>
              <b>{libro.precio}</b>
            </span>
            <span style={{ display: "flex", flexDirection: "column" }}>
              <b>{libro.genero}</b>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
