import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loading/';
import './List.scss';

const TopList = ({ list, featchData, noMoreFetch, fetchMoreTopList, status, featchRateinfo, appInfo }) => {
  useEffect(() => {
    const onScroll = () => {
      if (
        (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200) &&
        !noMoreFetch
      ) {
        fetchMoreTopList();
      }
    }
    featchData();
    window.addEventListener('scroll', onScroll, false);
    return () => window.removeEventListener('scroll', onScroll, false);
  },[]);
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

  function checkNotFoundOrEmpty(status) {
    if (status === 'SUCCESS' || status === 'FAIL') {
      return (
        <div>沒有紀錄</div>
      )
    } else {
      return <Loader />
    }
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
            } = appInfo[item.id] || {
              averageUserRating: 0,
              userRatingCount: 0
            };
            return (
              <li key={item.id}>
                <div className='appList__index'>{(index+1)}</div>
                <div className={'appList__image ' + ((index+1) % 2 === 0 ? 'even': 'odd')}>
                  <img src={item.images[1].href} alt={item.name}></img>
                </div>
                <div className="appList__detail">
                  <div className='appList__detail__name'>{item.name}</div>
                  <div className='appList__detail__category'>{item.category.label}</div>
                  <div className='appList__detail__rating'>{averageUserRating} ({userRatingCount})</div>
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
