import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import solarData from './Home/Home';

const rootReducer = combineReducers({
  solarData,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
