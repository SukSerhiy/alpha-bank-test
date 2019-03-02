import Immutable, { List } from 'immutable';
import { SET_PHOTOS } from '../actionTypes';

export default (state = List([]), action) => {
  switch (action.type) {
    case SET_PHOTOS:
    const photos = action.payload;
      return Immutable.fromJS(photos);
    default:
      return state;
  }
}