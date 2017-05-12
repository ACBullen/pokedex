import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonFormContainer from './pokemon_form_container';
import { Route } from 'react-router-dom';



class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
    // console.log('hit the constructor');
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render() {
    const pokemonItems = this.props.pokemon.map(pokemon => <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />);
    return (
      <div className="pokedex">
        <ul className="sidebar">{pokemonItems}</ul>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <Route exact path="/" component={PokemonFormContainer} />
      </div>
    );
  }
}

export default PokemonIndex;
