import { SET_PHOTOS } from '../../actionTypes'

const setPhotos = payload => dispatch => {
  dispatch({
    type: SET_PHOTOS,
    payload
  });
}

export default setPhotos;