import React from 'react';
import ItemDetailContainer from './item_detail_container';
import { Route, Link } from 'react-router-dom';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render(){
    this.pokemon = this.props.pokemon;
    return (
      <div id ="pokemon_detail">
        <ul>
          <img className="pkmn_img" src={this.pokemon.image_url} width='200' height='200'/>
          <li>Id: {this.pokemon.id}</li>
          <li>{this.pokemon.name}</li>
          <li>type: {this.pokemon.type}</li>
          <li>attack: {this.pokemon.attack}</li>
          <li>defense: {this.pokemon.defense}</li>
          <li>moves: {this.pokemon.moves ? this.pokemon.moves.join(', ') : ''}</li>
          <li>{this.pokemon.items ? this.pokemon.items.map((item, idx)=> {
            return (
              <Link key={idx} to={`/pokemon/${this.pokemon.id}/items/${item.id}`}>
              <img key={idx} src={item.image_url} width='100' height='100' />
              </Link>
            );
          }) : ''}</li>
        <Route component={ItemDetailContainer} path='/pokemon/:pokemonId/items/:itemId' />
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
