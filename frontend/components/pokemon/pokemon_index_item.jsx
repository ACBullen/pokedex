import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => {
  return(
    <li>
      <Link to={`/pokemon/${pokemon.id}`}>
      {pokemon.name}
      <img src={pokemon.image_url} width="50" height="50" />
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
