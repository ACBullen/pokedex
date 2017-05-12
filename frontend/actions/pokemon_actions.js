import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";
export const ADD_NEW_POKEMON = "ADD_NEW_POKEMON";
export const RECIEVE_POKEMON_ERRORS = "RECIEVE_POKEMON_ERRORS";

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon: pokemon
});

export const receiveSinglePokemon = (pokemon) => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokemon: pokemon
});

export const addNewPokemon = (pokemon) => ({
  type: ADD_NEW_POKEMON,
  pokemon: pokemon
});

export const receivePokemonErrors = (errors) => ({
  type: RECIEVE_POKEMON_ERRORS,
  errors: errors
});

export const requestAllPokemon = () => (dispatch) =>{
  return APIUtil.fetchAllPokemon()
    .then((pokemon)=>dispatch(receiveAllPokemon(pokemon)));
};

export const requestSinglePokemon = (id) => (dispatch) =>{
  return APIUtil.getSinglePokemon(id)
    .then((pokemon) => dispatch(receiveSinglePokemon(pokemon)));
};

export const createNewPokemon = (params) => (dispatch) =>{
  return APIUtil.createNewPokemon(params)
    .then((pokemon) => {
      dispatch(addNewPokemon(pokemon));
      return pokemon;
    }, (e) => {
      
      return dispatch(receivePokemonErrors(e.responseJSON));
    }
  );
};
