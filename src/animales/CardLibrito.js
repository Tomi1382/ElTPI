import React from "react";

export default class Carta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { libro } = this.props;
    {
      Carrito.map((libro, index) => {
        return (
          <CardLibrito
            cantidad={libro.titulo}
            imagen={libro.imagen}
            precio={libro.precio}
            nombre={libro.titulo}
            id={libro.isbn}
            index={index}
            idCarrito={libro.idCarrito}
            getCarrito={(id) => this.props.getCarrito(id)}
          />
        );
      });
    }
  }
}
