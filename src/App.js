import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Collection from "./components/Collection";
import { PokemonProvider } from "./components/PokemonContext"; // Import PokemonProvider

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <PokemonProvider>
          <Routes>
            <Route path="/" element={<Home />} index />{" "}
            <Route path="/collection" element={<Collection />} />
          </Routes>
        </PokemonProvider>
      </div>
    </Router>
  );
}

export default App;
