import { RECEIVE_ALL_POKEMON, ADD_NEW_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state= {}, action)=> {
  Object.freeze(state);
  switch(action.type){
      case RECEIVE_ALL_POKEMON:
        return action.pokemon;
      case ADD_NEW_POKEMON:
        let newState = Object.assign({}, state);
        newState[action.pokemon.id] = action.pokemon;
        return newState;
      default:
        return state;
  }
};

export default pokemonReducer;
