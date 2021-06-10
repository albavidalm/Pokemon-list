import React from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";

const PokeList = (props) => {
  const pokeItems = props.list.map((item) => {
    return (
      <li key={item.id}>
        <Pokemon item={item} />
      </li>
    );
  });
  PokeList.propTypes = { item: PropTypes.object };
  return <ul className="pokemon__list">{pokeItems}</ul>;
};

export default PokeList;
