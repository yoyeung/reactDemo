import * as Services from './services';
import {
  dataSimplifer
} from '../utils';
import {
  FETCH_RECOMMENDATION_LIST,
  FETCH_TOP_FREE_LIST,
  FETCH_RECOMMENDATION_LIST_FAIL,
  FETCH_TOP_FREE_LIST_FAIL,
  FETCH_RECOMMENDATION_LIST_SUCCESS,
  FETCH_TOP_FREE_LIST_SUCCESS
} from './constant';

export function fetchRecommendationList() {
  return (dispatch) => {
    dispatch({
      type: FETCH_RECOMMENDATION_LIST
    });
    Services.getRecommandList()
    .then(({ data }) => {
      console.table( data.feed.entry.map( record => dataSimplifer(record)));
      if (data && data.feed && data.feed.entry) {
        dispatch({
          type: FETCH_RECOMMENDATION_LIST_SUCCESS,
          recommandList: data.feed.entry.map( record => dataSimplifer(record))
        });
      } else {
        dispatch({
          type: FETCH_RECOMMENDATION_LIST_SUCCESS,
          recommandList: []
        });
      }
    }).catch((err) => {
      dispatch({
        type: FETCH_RECOMMENDATION_LIST_FAIL,
        err
      });
    });
  }
}

export function fetchTopList() {
  return (dispatch) => {
    dispatch({
      type: FETCH_TOP_FREE_LIST
    });
    Services.getTopFreeList()
    .then(({ data }) => {
      console.table( data.feed.entry.map( record => dataSimplifer(record)));
      if (data && data.feed && data.feed.entry) {
        dispatch({
          type: FETCH_TOP_FREE_LIST_SUCCESS,
          topList: data.feed.entry.map( record => dataSimplifer(record))
        });
      } else {
        dispatch({
          type: FETCH_TOP_FREE_LIST_SUCCESS,
          topList: []
        });
      }
    }).catch((err) => {
      dispatch({
        type: FETCH_TOP_FREE_LIST_FAIL,
        err
      });
    });
  }
}