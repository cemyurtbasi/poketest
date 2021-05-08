import { memo } from "react";
import { Link } from "react-router-dom";
import "../css/pokemonCard.scss";

const PokemonCard = memo(({ pokeData }) => {
  const { name, imgUrl } = pokeData;
  return (
    <article className="pokemonCard">
      <Link to={"/pokemon/" + name}>
        <div className="pokemonCard-img">
          <img src={imgUrl} alt={name} />
        </div>
        <h2 className="pokemonCard__name">{name}</h2>
      </Link>
    </article>
  );
});

export default PokemonCard;
