import React, { useState } from "react";
import PokeList from "./PokeList";
import data from "../data/data.json";
import "../stylesheets/App.css";
import image from "../images/Pokemon-Logo.png";

//console.log(data); //DATOS RECOGIDOS OK
const App = () => {
  const [list] = useState(data);
  return (
    <>
      <header className="pokemon__header">
        <h1 className="title">Mis tazos de pokemon</h1>
        <img className="title__img" src={image} alt="tazos" />
      </header>
      <PokeList list={list} />
    </>
  );
};

export default App;
