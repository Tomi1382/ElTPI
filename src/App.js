import "./styles.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Footer from "./footer.js";
import Animales from "./animales/Main";
import Card from "./animales/Card";
import Carta from "./animales/CardLibrito.js";
import Gatos from "./gatos/Main";
import Cardss from "./gatos/Cards";
import Index from "./Index/Main";
import Error from "./NotFound/Tercero";
import Libro from "./animales/libros.js";

//https://http.cat/[status_code]

//https://zoo-animal-api.herokuapp.com/animals/rand/(1=10)

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="Contenedor">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/animales" element={<Animales />} />
            <Route path="/gatos" element={<Gatos />} />
            <Route path="/notfound" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}
