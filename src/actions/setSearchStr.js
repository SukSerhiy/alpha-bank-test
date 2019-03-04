import { SET_SEARCH_STR } from '../actionTypes';

const setSearchStr = payload => dispatch => {
  dispatch({
    type: SET_SEARCH_STR,
    payload
  });
}

export default setSearchStr;