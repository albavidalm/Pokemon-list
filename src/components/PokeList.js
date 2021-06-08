import React from "react";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  //console.log(props); //datos recogidos OK
  //console.log(props.list); //datos recogidos OK
  const pokeItems = props.list.map((item) => {
    return (
      <li key={item.id}>
        <Pokemon item={item} />
      </li>
    );
  });

  return <ul>{pokeItems}</ul>;
};

export default PokeList;
