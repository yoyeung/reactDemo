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
  FETCH_TOP_FREE_LIST_SUCCESS,
  SHOW_MORE,
  SEARCH_TOP_FREE,
  UPDATE_RANKING_INFO,
  UPDATE_RANKING_INFO_START
} from './constant';

export function searchTopList(event) {
  return {
    type: SEARCH_TOP_FREE,
    value: event.target.value
  }
}

export function fetchMoreTopList() {
  return {
    type: SHOW_MORE
  }
}
export function fetchAppDetailInfo(order) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_RANKING_INFO_START,
      order
    });
    order.forEach((appId) => {
      Services.getAppInfoById(appId)
      .then(({ data }) => {
        const {
          resultCount,
          results
        } = data;
        if (resultCount === 1 && results.length === 1) {
          const {
            averageUserRating,
            userRatingCount
          } = results[0];
          dispatch({
            type: UPDATE_RANKING_INFO,
            appId,
            averageUserRating,
            userRatingCount
          })
        }
      })
    });
  }
}
export function fetchRecommendationList() {
  return (dispatch) => {
    dispatch({
      type: FETCH_RECOMMENDATION_LIST
    });
    Services.getRecommandList()
    .then(({ data }) => {
      if (data && data.feed && data.feed.entry) {
        const recommandList = data.feed.entry.map( record => dataSimplifer(record));
        dispatch({
          type: FETCH_RECOMMENDATION_LIST_SUCCESS,
          recommandList
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