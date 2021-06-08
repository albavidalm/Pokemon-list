import React from "react";

const Pokemon = (props) => {
  const renderTypes = () => {
    //console.log(props.item.types);
    props.item.types.map((type) => {
      console.log(type);
      return <li>{type}</li>;
    });
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
        <p>{renderTypes()}</p>
      </div>
    </article>
  );
};

export default Pokemon;
