export function pokemonDetailModel(pokeData) {
  if (!pokeData?.name) return false;

  const { name, id, height, types, abilities } = pokeData;
  const imgUrl = `https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`;

  return {
    name,
    id,
    imgUrl,
    height,
    types: typesModel(types),
    abilities: abilitiesModel(abilities),
  };
}

function abilitiesModel(params) {
  const abilitiesArray = [];
  params.forEach((item) => {
    abilitiesArray.push(item.ability.name);
  });
  return abilitiesArray;
}

function typesModel(params) {
  const typesText = params.map((item) => item.type.name).join(", ");
  return typesText;
}
