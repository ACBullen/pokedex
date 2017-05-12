import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { selectPokemonItem } from "../../reducers/selectors";
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => {
  return {
  item: selectPokemonItem(state, parseInt(ownProps.match.params.itemId))
};};

export default connect(mapStateToProps)(ItemDetail);
