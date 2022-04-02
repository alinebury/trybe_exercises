import { CHANGE_SIGNAL } from '../actions';

const INITIAL_STATE = {
  color: 'red',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_SIGNAL:
    return {
      color: action.payload,
    };
  default:
    return state
  }
}

export default reducer;