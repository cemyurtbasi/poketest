import { lazy } from "react";

const RouterPublic = lazy(() => import("./routerPublic"));

const Public = lazy(() => import("../Components/public"));
const Pokemons = lazy(() => import("../Components/public/pokemons"));
const PokemonDetail = lazy(() => import("../Components/public/pokemonDetail"));

export {
  RouterPublic,
  Pokemons,
  PokemonDetail,
  Public
};
