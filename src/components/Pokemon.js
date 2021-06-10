import React from "react";
import PropTypes from "prop-types";

const Pokemon = (props) => {
  const renderTypes = () => {
    return props.item.types.map((type, id) => {
      return (
        <li key={id} className="types__item">
          {type}
        </li>
      );
    });
  };

  Pokemon.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    types: PropTypes.array,
  };
  return (
    <article className="pokemon">
      <img
        className="pokemon__picture"
        src={props.item.url}
        alt={props.item.name}
      />
      <div className="pokemon__info">
        <h2 className="pokemon__name">{props.item.name}</h2>
        <ul className="pokemon__types">{renderTypes()}</ul>
      </div>
    </article>
  );
};

export default Pokemon;
