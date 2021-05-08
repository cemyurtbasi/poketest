import baseService from "./baseService";

export default class PokemonService extends baseService {
  constructor() {
    super();
    this.schemaName = "pokemon";
  }

  getPokemons(entity) {
    return this.getData(this.schemaName, "", entity);
  }
  getPokemonDetail(pokemonName, entity) {
    return this.getData(this.schemaName, pokemonName, entity);
  }
}
