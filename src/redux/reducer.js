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
const initial = {
  recommandList: [],
  topList: [],
  appInfo: {},
  recommandListStatus: null,
  topListStatus: null,
  showNoOfItem: 10,
  search: ''
};
const noOfDisplay = 10;
export default (state = initial, action) => {
  switch (action.type) {
  case UPDATE_RANKING_INFO_START:
    const {
      order
    } = action;

    const _order = order.reduce((init, item) => {
      init[item] = {
        fetchingAppInfo: true
      }
      return init;
    }, {});
    return {
      ...state,
      appInfo: {
        ...state.appInfo,
        ..._order
      }
    }
  case UPDATE_RANKING_INFO:
    const {
      appId,
      averageUserRating,
      userRatingCount
    } = action;
    return {
      ...state,
      appInfo: {
        ...state.appInfo,
        [appId]: {
          averageUserRating,
          userRatingCount
        }
      }
    }
  case SEARCH_TOP_FREE:
    return {
      ...state,
      search: action.value
    }
  case FETCH_RECOMMENDATION_LIST_SUCCESS:
    return {
      ...state,
      recommandListStatus: 'SUCCESS',
      recommandList: action.recommandList
    }
  case FETCH_TOP_FREE_LIST_SUCCESS:
    return {
      ...state,
      topListStatus: 'SUCCESS',
      topList: action.topList
    }
  case FETCH_RECOMMENDATION_LIST:
    return {
      ...state,
      recommandListStatus: 'LOADING'
    }
  case FETCH_TOP_FREE_LIST:
    return {
      ...state,
      topListStatus: 'LOADING'
    }
  case FETCH_RECOMMENDATION_LIST_FAIL:
    return {
      ...state,
      recommandListStatus: 'FAIL'
    }
  case FETCH_TOP_FREE_LIST_FAIL:
    return {
      ...state,
      topListStatus: 'FAIL'
    }
  case SHOW_MORE:
    if (state.showNoOfItem >= state.topList.length) {
      return state;
    }
    return {
      ...state,
      showNoOfItem: state.showNoOfItem + noOfDisplay
    }
  default:
    return state;
  }
  
}