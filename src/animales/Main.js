import React from "react";
import Card from "./Card";
import Carta from "./CardLibrito";
import Libro from "./libros";
import axios from "axios";
export default class Animales extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cantidad: "",
      resultados: []
    };
  }

  buscar() {
    const {} = this.state;
    const url = "https://zoo-animal-api.herokuapp.com/animals/rand/";
    axios
      .get(url)
      .then((res) => {
        this.setState({ resultados: res.data });
      })
      .catch((error) => {
        alert("ocurio un error");
        console.log(error);
      });
  }
  render() {
    const {} = this.state;
    return (
      <div className="presentacion">
        <h1>Ush-Library</h1>

        <div className="contenido">
          <p>
            Venta de libros on-line en la cual usted podra adquirir via PDF lo
            que mas les guste al mejor precio.
          </p>
          <div className="Selector">
            <select>
              <option value="">Elegir Genero</option>
              <option value="Fantasia">Fantasia</option>
              <option value="Fantasia Oscura">Fantasia Oscura</option>
              <option value="Misterio">Misterio</option>
              <option value="Comedia">Comedia</option>
            </select>
          </div>

          <Libro />
          <Carta />
        </div>
      </div>
    );
  }
}
