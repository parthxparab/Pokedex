import React from "react";
import noImage from "../img/download.jpeg";

const PokeCard = ({ pokemon }) => {
  return (
    <div
      className="card text-center mx-auto"
      style={{ maxWidth: "18rem" }}
      key={pokemon.id}
    >
      <div
        className="card-header text-center mx-auto card-title"
        style={{ maxHeight: "180px" }}
      >
        <b>{pokemon.name}</b>
      </div>
      <div className="card-body mx-auto" style={{ marginTop: "10px" }}>
        <div>
          <p className="card-subtitle mb-1 mt-1 text-muted ">
            Id: {pokemon.id}
          </p>
        </div>
        <img alt="Show" src={pokemon.sprites.front_default || noImage} />
      </div>
    </div>
  );
};

export default PokeCard;
