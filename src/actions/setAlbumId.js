import { SET_ALBUM_ID } from '../actionTypes';

const setAlbumId = payload => dispatch => {
  dispatch({
    type: SET_ALBUM_ID,
    payload
  });
}

export default setAlbumId;