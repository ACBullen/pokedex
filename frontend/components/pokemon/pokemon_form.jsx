import React from 'react';
import { withRouter } from 'react-router-dom';

const TYPES = [
  "fire",
  "electric",
  "normal",
  "ghost",
  "psychic",
  "water",
  "bug",
  "dragon",
  "grass",
  "fighting",
  "ice",
  "flying",
  "poison",
  "ground",
  "rock",
  "steel"
];

class PokemonForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      attack: '',
      defense: '',
      moves: [],
      items: [],
      image_url: '',
    };
    this.move1 = '';
    this.move2 = '';
  }

  handleChangeName(event) {
    this.update('name')(event);
  }

  handleChangeAttack(event) {
    this.update('attack')(event);
  }

  handleChangeDefense(event) {
    this.update('defense')(event);
  }

  handleChangeMove1(event) {
    event.preventDefault();
    this.move1 = event.currentTarget.value;
  }

  handleChangeMove2(event) {
    event.preventDefault();
    this.move2 = event.currentTarget.value;
  }

  handleChangeImageUrl(event) {
    this.update('image_url')(event);
  }

  handleChangeType (event){
    this.update('poke_type')(event);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.moves = [this.move1, this.move2];
    let target = this.props.createNewPokemon(this.state).then((newPokemon) => {
      this.props.history.push(`pokemon/${newPokemon.id}`);
    });

  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  render() {
    return(
      <div>
        <ul>
          <input type="text" value={this.state.name} placeholder="name" onChange={this.handleChangeName.bind(this)}></input>
          <select onChange={this.handleChangeType.bind(this)}>
              <option defaultValue>--Please Select--</option>
            {TYPES.map((type)=>{
              return <option value={type}>{type}</option>;
            })}
          </select>
          <input type="number" value={this.state.attack} placeholder="attack" onChange={this.handleChangeAttack.bind(this)}></input>
          <input type="number" value={this.state.defense} placeholder='defense' onChange={this.handleChangeDefense.bind(this)}></input>
          <input type="text" value={this.state.move1} placeholder="move 1" onChange={this.handleChangeMove1.bind(this)}></input>
          <input type="text" value={this.state.move2} placeholder="move 2" onChange={this.handleChangeMove2.bind(this)}></input>
          <input type="text" value={this.state.image_url} placeholder="image URL" onChange={this.handleChangeImageUrl.bind(this)}></input>
          <buton onClick={this.handleSubmit.bind(this)}>Submit</buton>
    </ul>
    <ul>
      {this.props.errors ? this.props.errors.map((e) => <li>{e}</li>): ''}
    </ul>
      </div>
    );
  }
}

export default PokemonForm;
