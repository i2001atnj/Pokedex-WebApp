import React from "react";
import { PokemonProvider } from "./context/PokemonContext";
import { Routes, Route } from "react-router-dom";
import { Homepage, PokemonPage } from "./pages/pages";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <PokemonProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="pokemon/:id" element={<PokemonPage />} />
        </Routes>
      </PokemonProvider>
    </div>
  );
}

export default App;
