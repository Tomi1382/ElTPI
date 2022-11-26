import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Navbar">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/animales">Libros </Link>
          </li>
          <li>
            <Link to="/gatos"> Registro </Link>
          </li>
          <li>
            <Link to="/NotFound"> Login </Link>
          </li>
          <li>
            <div class="wrap">
              <input
                list="Stock"
                name="Stock"
                type="text"
                placeholder="Elegir libro"
              ></input>

              <datalist id="Stock">
                <option value="Libro 1"></option>
                <option value="Libro 2"></option>
                <option value="Libro 3"></option>
                <option value="libro 4"></option>
                <option value="Libro 5"></option>
                <option value="Libro 6"></option>
                <option value="Libro 7"></option>
              </datalist>
             
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
