import React from "react";
import "./css/public.scss";
import PokeBall from "../../Assets/images/logo/pokeball.png";
import { Link } from "react-router-dom";

const Public = () => {
  return (
    <div className="public">
      <h1 className="public__title">Touch the Ball to, Catch Them ALL !</h1>
      <Link to="/pokemon" className="public__ball">
        <img src={PokeBall} alt="Gota catch them all" />
      </Link>
    </div>
  );
};

export default Public;
