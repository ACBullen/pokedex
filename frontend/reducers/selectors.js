import lodash from 'lodash';


export const selectAllPokemon = (state) => {
  return lodash.values(state.pokemon);
};

export const selectPokemonItem = (state, itemId) => {
  let items = state.pokemonDetail.items;
  if (items === undefined) {
    return '';
  }
    return items.filter( (item) => item.id === itemId )[0];

};
