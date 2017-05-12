import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api_util';
import {HashRouter, Route } from 'react-router-dom';
import { RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon, requestSinglePokemon, receiveSinglePokemon } from './actions/pokemon_actions';
import configueStore from './store/store';
import { selectAllPokemon, selectPokemonItem } from './reducers/selectors';
import Root from './components/root';





document.addEventListener("DOMContentLoaded", () => {
  const store = configueStore();
  window.store = store;
  window.APIUtil = APIUtil;
  window.requestSinglePokemon = requestSinglePokemon;
  window.receiveSinglePokemon = receiveSinglePokemon;
  window.selectPokemonItem = selectPokemonItem;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
