import {
  FETCH_RECOMMENDATION_LIST,
  FETCH_TOP_FREE_LIST,
  FETCH_RECOMMENDATION_LIST_FAIL,
  FETCH_TOP_FREE_LIST_FAIL,
  FETCH_RECOMMENDATION_LIST_SUCCESS,
  FETCH_TOP_FREE_LIST_SUCCESS
} from './constant';
const initial = {
  
};
export default (state = initial, action) => {
  switch (action.type) {
  case FETCH_RECOMMENDATION_LIST_SUCCESS:
    return {
      ...state,
      recommandList: action.recommandList
    }
  case FETCH_TOP_FREE_LIST_SUCCESS:
    return {
      ...state,
      topList: action.recommandList
    }
  default:
    return state;
  }
  
}