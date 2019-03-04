import { combineReducers } from 'redux-immutable';
import photos from './photosReducer';
import albumId from './albumIdReducer';
import searchStr from './searchStrReducer';
import page from './pageReducer';

export default combineReducers({
  photos,
  albumId,
  searchStr,
  page
});