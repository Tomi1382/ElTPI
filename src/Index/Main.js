import React from "react";
import Boton from "../Boton";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ini">
        <Boton titulo="Libros" ruta="/animales" />
        <Boton titulo="Registro" ruta="/gatos" />
        <Boton titulo="Login" ruta="/NotFound" />
      </div>
    );
  }
}
