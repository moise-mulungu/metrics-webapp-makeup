// import { type } from '@testing-library/user-event/dist/type';
// import { wait } from '@testing-library/user-event/dist/utils';

const ADD_SUN = 'sunset-sunrise/sunSet/ADD_SUN';
const SUN_FAILED = 'sunset-sunrise/sunSet/SUN_FAILED';
const SUN_ADDED = 'sunset-sunrise/sunSet/SUN_ADDED';

export const addSunData = () => (dispatch) => {
  const sunApi = 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400';
  dispatch({
    type: ADD_SUN,
  });

  fetch(sunApi)
    .then((data) => data.json())
    .then((data) => {
      // const { results, status } = dispatch
      dispatch({
        type: SUN_ADDED,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: SUN_FAILED,
        payload: error,
      });
    });
};

const reducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_SUN:
      return {
        ...state,
        error: '',
        wait: true,
      };

    case SUN_ADDED:
      return {
        ...state,
        ...payload,
        wait: false,
      };

    case SUN_FAILED:
      return {
        ...state,
        error: payload,
        wait: false,
      };

    default:
      return state;
  }
};

export default reducer;
