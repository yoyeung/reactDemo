import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  useLoadMore,
  checkNotFoundOrEmpty
} from '../utils';
import ListItem from '../commons/ListItem';
import './List.scss';

const TopList = ({ list, featchData, moreFetch, fetchMoreTopList, status, featchRateinfo, appInfo }) => {
  useLoadMore(fetchMoreTopList, featchData, moreFetch);
  useEffect(() => {
    let order = list.reduce(function reduce(init, item) {
      if (!appInfo[item.id]) {
        init.push(item.id);
      }
      return init;
    }, []);
    if (order.length > 0) {
      featchRateinfo(order);
    }
   
  },[list])

  function extractData(id) {
    return appInfo[id] || {
      averageUserRating: 0,
      userRatingCount: 0
    };
  }
  
  return (<div>
    <ul className={ "appList" + ((list.length === 0) ? " loading" : "" )}>
      {
        list.length === 0 ? (
          checkNotFoundOrEmpty(status)
        ) : (
          list.map((item, index) => {
            const rankingInfo = extractData(item.id);
            return <ListItem {...rankingInfo} item={item} index={index} key={item.id}/>
          })
        )
        
      }
    </ul>
  </div>);
}
  


TopList.propTypes = {
  list: PropTypes.array.isRequired,
}
TopList.defaultProps = {
  list: []
};

export default TopList;
