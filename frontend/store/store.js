import  { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk';

const configueStore = () => createStore(rootReducer, {}, applyMiddleware(thunk));

export default configueStore;
