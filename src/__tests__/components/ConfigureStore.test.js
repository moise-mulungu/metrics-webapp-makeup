import store from '../../redux/configureStore';

const GET_ALL_FOUNDATIONS = 'make-up-app/makeups/GET_ALL_FOUNDATIONS';

test('renders  makeup items', () => {
  store.dispatch({
    type: GET_ALL_FOUNDATIONS,
    payload: ['lipstick', 'brush'],
  });

  const state = store.getState();
  expect(state.makeups).toEqual(['lipstick', 'brush']);
});
