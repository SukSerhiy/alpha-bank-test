import { SET_MORE_PHOTOS } from '../actionTypes'

const setMorePhotos = payload => dispatch => {
  dispatch({
    type: SET_MORE_PHOTOS,
    payload
  });
}

export default setMorePhotos;