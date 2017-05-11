import {RECEIVE_SINGLE_POKEMON, receiveSinglePokemon} from '../actions/pokemon_actions';


const pokemonDetailReducer = (state = {}, action) =>{
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default pokemonDetailReducer;
