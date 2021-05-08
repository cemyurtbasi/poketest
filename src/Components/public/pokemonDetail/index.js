import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "../../../Service";
import { pokemonDetailModel } from "../../../Shared/models/pokemonDetail";
import Loading from "../../../Shared/partnerComponents/loading/loading";
import PageNotFound from "../../../Shared/partnerComponents/messages/pageNotFound";
import "./css/pokemonDetail.scss";

const PokemonDetail = memo((props) => {
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const name = props.match.params.name;
    const service = new Service();
    setLoading(true);
    service.pokemon
      .getPokemonDetail(name)
      .then((pokeData) => {
        setPokemonDetail(pokemonDetailModel(pokeData));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [props.match.params.name]);

  return (
    <div className="pokemonDetail">
      {loading ? (
        <Loading />
      ) : pokemonDetail ? (
        <article className="pokemonDetail-card">
          <div className="pokemonDetail-card-head">
            <Link to="/pokemon" className="pokemonDetail-card-head__close">x</Link>
            <div className="pokemonDetail-card-head-img">
              <img src={pokemonDetail.imgUrl} alt={pokemonDetail.name} />
            </div>
            <h2 className="pokemonDetail-card-head__name">
              {pokemonDetail.name}
            </h2>
          </div>
          <div className="pokemonDetail-card-body">
            <div className="pokemonDetail-card-body-text">
              <span>ID:</span>
              <span>{pokemonDetail.id}</span>
            </div>
            <div className="pokemonDetail-card-body-text">
              <span>Types:</span>
              <span>{pokemonDetail.types}</span>
            </div>
            <div className="pokemonDetail-card-body-text">
              <span>Height:</span>
              <span>{pokemonDetail.height}</span>
            </div>
            <div className="pokemonDetail-card-body-list">
              <span>Abilities:</span>
              {pokemonDetail.abilities.map((ability, index) => (
                <span key={index}>{ability}</span>
              ))}
            </div>
          </div>
        </article>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
});

export default PokemonDetail;
