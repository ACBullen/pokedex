import PokemonDetail from './pokemon_detail';
import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';


const mapStateToProps = (state) => ({
  pokemon: state.pokemonDetail
});

const mapDispatchToProp = (dispatch) => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProp)(PokemonDetail);
