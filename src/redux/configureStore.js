import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import makeupReducer from './makeups/makeups';

const rootReducer = combineReducers({
  makeups: makeupReducer,
});

// const GET_ALL_FOUNDATIONS = 'make-up-app/makeups/GET_ALL_FOUNDATIONS';

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;

// test('renders  country  capital', () => {
//   store.dispatch({
//     type: GET_ALL_FOUNDATIONS,
//     payload: ['Congo', 'Burundi'],
//   });

//   const state = store.getState();
//   expect(state.makeups).toEqual(['Congo', 'Burundi']);
// });
