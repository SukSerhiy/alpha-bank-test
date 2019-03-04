import { SET_ALBUM_ID } from '../actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case SET_ALBUM_ID:
      return action.payload;
    default:
      return state;
  }
}