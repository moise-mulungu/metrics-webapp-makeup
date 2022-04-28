import { combineReducers, applyMiddleware, legacyCreateStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import makeupReducer from './makeups/makeups';

const rootReducer = combineReducers({
  makeups: makeupReducer,
});

const store = legacyCreateStore(rootReducer, applyMiddleware(logger, thunk));
export default store;
