import React from 'react';
import PokemonIndexItem from './pokemon_index_item';



class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
    // console.log('hit the constructor');
  }

  componentDidMount(){
    store.dispatch(this.props.requestAllPokemon());
  }

  render() {
    const pokemonItems = this.props.pokemon.map(pokemon => <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />);
    return (
      <ul>{pokemonItems}</ul>
    );
  }
}

export default PokemonIndex;
