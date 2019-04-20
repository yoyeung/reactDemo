import React, { useEffect } from 'react';

import Loader from './Loading/';

export function useLoadMore(fetchMoreTopList, featchData, noMoreFetch) {
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
}

export function checkNotFoundOrEmpty(status) {
  if (status === 'SUCCESS' || status === 'FAIL') {
    return (
      <div>沒有紀錄</div>
    )
  } else {
    return <Loader />
  }
}


