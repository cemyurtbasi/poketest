import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../Shared/partnerComponents/loading/loading";
import { fetchPokemons } from "../../../Store/public/pokemonSlice";
import LogoBlue from "../../../Assets/images/logo/logo-blue.png";
import ImmyFlyLogo from "../../../Assets/images/logo/immfy-logo.png";
import PokemonCard from "./pokemonCard";
import "./css/pokemons.scss";
import { Link } from "react-router-dom";

const Pokemons = memo(() => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchResult, setSearchResult] = useState(null);
  const pageSize = 18;

  //Redux tool kit variables that i set for reaching inside page
  //If loading i will set loadfing component
  const { items, loading, hasErrors, hasMessage, totalItems } = useSelector(
    (state) => state.pokemons
  );
  console.log({ items, loading, hasErrors, hasMessage, totalItems });

  const dispatch = useDispatch();

  useEffect(() => {
    //as documentation of api says; first variable is offset(skip), second is pageSize
    dispatch(fetchPokemons(currentPage * pageSize, pageSize));

    // this line of comment is to prevent warnings of compiler / i want this useEffect to work only first render and currentPage changes
    // eslint-disable-next-line
  }, [currentPage]);

  const hangleSearchChange = useCallback(
    (e) => {
      if (items?.length > 0)
        setSearchResult(
          items.filter((pokemon) => pokemon.name.includes(e.target.value))
        );
    },
    [items]
  );

  const changePageControl = useCallback((differance) => {
    setCurrentPage((prev) => {
      return prev + differance;
    });
  }, []);

  const componentControl = useMemo(() => {
    if (loading) return <Loading />;

    if (searchResult) {
      return searchResult.map((pokemon, index) => {
        return <PokemonCard pokeData={pokemon} key={index} />;
      });
    }

    return items.map((pokemon, index) => {
      return <PokemonCard pokeData={pokemon} key={index} />;
    });
  }, [searchResult, items, loading]);

  return (
    <div className="pokemons">
      <section className="pokemons-header">
        <Link to="/" className="pokemons-header-immyflyLogo">
          <img src={ImmyFlyLogo} alt="logo" title="Get Back To Home Page" />
        </Link>
        <div className="pokemons-header-logo">
          <img src={LogoBlue} alt="logo" title="Pokemons To List" />
        </div>

        <div className="pokemons-header-text">
          <h1>Generation 1</h1>
          <p>
            {totalItems} pokemon ({pageSize} showing)
          </p>
        </div>

        <div className="pokemons-header-searchPaging">
          <input
            className="pokemons-header-searchPaging__search"
            type="text"
            placeholder="Search By Name"
            onChange={hangleSearchChange}
          />
          <div className="pokemons-header-searchPaging-paging">
            <span
              className="pokemons-header-searchPaging-paging__prev"
              onClick={() => changePageControl(-1)}
              style={{ visibility: currentPage === 0 && "hidden" }}
            >
              {"<-"}
            </span>
            <input
              type="number"
              min={1}
              value={currentPage + 1}
              className="pokemons-header-searchPaging-paging__page"
              onChange={(e) =>
                changePageControl(e.target.value - currentPage - 1)
              }
              max={totalItems / pageSize}
            />
            <span
              className="pokemons-header-searchPaging-paging__next"
              onClick={() => changePageControl(1)}
              style={{
                visibility:
                  currentPage * pageSize >= totalItems - pageSize && "hidden",
              }}
            >
              {"->"}
            </span>
          </div>
        </div>
      </section>
      <section className="pokemons-content">{componentControl}</section>
    </div>
  );
});

export default Pokemons;
