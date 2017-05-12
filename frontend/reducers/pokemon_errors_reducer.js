import { RECIEVE_POKEMON_ERRORS } from '../actions/pokemon_actions';

const pokemonErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECIEVE_POKEMON_ERRORS:

      return action.errors;
    default:

      return state;
  }
};

export default pokemonErrorReducer;
