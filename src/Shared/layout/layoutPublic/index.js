import React from "react";
import { Link } from "react-router-dom";
import "./css/layoutPublic.scss";

const LayoutPublic = ({ children }) => {
  return (
    <div className="layoutPublic">
      <div className="layoutPublic-header">
        <Link to="/pokemon">Pokemons</Link>
        <Link to="/pokemon/charizard">Charizard</Link>
        <Link to="/pokemon/bulbasaur">Bulbasaur</Link>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default LayoutPublic;
