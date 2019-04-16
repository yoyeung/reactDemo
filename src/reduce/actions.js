import * as Services from './services';
import {
  FETCH_RECOMMENDATION_LIST,
  FETCH_TOP_FREE_LIST,
  FETCH_RECOMMENDATION_LIST_FAIL,
  FETCH_TOP_FREE_LIST_FAIL,
  FETCH_RECOMMENDATION_LIST_SUCCESS,
  FETCH_TOP_FREE_LIST_SUCCESS
} from './constant';

function fetchRecommendationList() {
  return function (dispatch) {
    dispatch({
      type: FETCH_RECOMMENDATION_LIST
    });


  }
  
}