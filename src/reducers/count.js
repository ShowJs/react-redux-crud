import { INCREASE, DECREASE } from '../actions';

const initialState = { value: 0 };

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return { value: state.value + 1 };
    case DECREASE:
      return { value: state.value - 1 };
    default:
      return state;
  }
};
