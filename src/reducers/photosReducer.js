import { List } from 'immutable';
import { SET_PHOTOS, SET_MORE_PHOTOS } from '../actionTypes';

export default (state = List([]), action) => {
  const photos = action.payload || [];
  switch (action.type) {
    case SET_PHOTOS:
      return List(photos);
    case SET_MORE_PHOTOS:
      return state.concat(List(photos));
    default:
      return state;
  }
}