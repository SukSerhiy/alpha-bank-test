import { SET_SEARCH_STR } from '../actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case SET_SEARCH_STR:
      return action.payload;
    default:
      return state;
  }
}