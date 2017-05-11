import PokemonDetail from './pokemon_detail';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  pokemon: state.pokemonDetail
});

export default connect(mapStateToProps)(PokemonDetail);
