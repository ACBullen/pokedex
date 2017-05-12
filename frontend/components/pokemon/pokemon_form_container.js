import { connect } from 'react-redux';
import {createNewPokemon} from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';

const mapStateToProps = (state) =>({
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  createNewPokemon: (params) => dispatch(createNewPokemon(params))
});


export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm);
