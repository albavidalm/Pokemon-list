import React from "react";
import PokeList from "./PokeList";
import data from "../data/data.json";
import "../stylesheets/App.css";

//console.log(data); //DATOS RECOGIDOS OK
const App = () => {
  return (
    <>
      <h1 className="title">Mi lista de pokemon</h1>
      <PokeList list={data} />
    </>
  );
};

export default App;
