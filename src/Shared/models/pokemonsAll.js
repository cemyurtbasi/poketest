export function pokemonsAllModel(pokeData) {
  if (!pokeData?.results) return false;

  const pokeArray = [];

  pokeData.results.forEach((pokemon) => {
    const { name } = pokemon;
    const imgUrl = `https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`;
    pokeArray.push({
      name,
      imgUrl,
    });
  });
  
  return {
    pokeArray,
    totalItems: pokeData.count,
  };
}
