import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Rate from 'react-star-ratings';
import {
  useLoadMore,
  checkNotFoundOrEmpty
} from '../utils';
import './List.scss';

const TopList = ({ list, featchData, noMoreFetch, fetchMoreTopList, status, featchRateinfo, appInfo }) => {
  useLoadMore(fetchMoreTopList, featchData, noMoreFetch);
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
            const {
              averageUserRating = 0,
              userRatingCount = 0
            } = extractData(item.id);
            return (
              <li key={item.id}>
                <div className='appList__index'>{(index+1)}</div>
                <div className={'appList__image ' + ((index+1) % 2 === 0 ? 'even': 'odd')}>
                  <img src={item.images[1].href} alt={item.name}></img>
                </div>
                <div className="appList__detail">
                  <div className='appList__detail__name'>{item.name}</div>
                  <div className='appList__detail__category'>{item.category.label}</div>
                  <div className='appList__detail__rating'>
                    <Rate rating={averageUserRating}
                    starRatedColor='#fe9501'
                    numberOfStars={5}
                    starDimension='13px'
                    starSpacing='2px'
                    name='rating'/> ({userRatingCount})</div>
                </div>
              </li>
            )
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
