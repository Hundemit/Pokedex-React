import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar-Components/Navbar";
import PokemonCardContainer from "./Components/Pokemon-Card-Components/Pokemon-Card-Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonDetails from "./Components/Pokemon-Details-Components/PokemonDetails";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

class App extends Component {
  state = { pokemons: [] };

  render() {
    return (
      <div className="bg-white border-gray-200 dark:bg-gray-900">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/pokedex/:site" element={<PokemonCardContainer />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
