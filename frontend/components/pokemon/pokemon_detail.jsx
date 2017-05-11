import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
    this.pokemon = this.props.pokemon;
  }

  render(){
    return (
      <div id ="pokemon_detail">
        <img src={this.pokemon.image_url}/>
        <ul>
          <li>Id: {this.pokemon.id}</li>
          <li>{this.pokemon.name}</li>
          <li>type: {this.pokemon.type}</li>
          <li>attack: {this.pokemon.attack}</li>
          <li>defense: {this.pokemon.defense}</li>
          <li>moves: {this.pokemon.moves ? this.pokemon.moves.join(', ') : ''}</li>
          <li>{this.pokemon.items ? this.pokemon.items.map((item)=> {
            return (
              <img src={item.image_url} />
            );
          }) : ''}</li>

        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
