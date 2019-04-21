import React, { useEffect } from 'react';

import Loader from './commons/Loading';

export function useLoadMore(fetchMoreTopList, featchData, moreFetch) {
  const onScroll = () => {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200) &&
      moreFetch
    ) {
      fetchMoreTopList();
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll, false);
    return () => window.removeEventListener('scroll', onScroll, false);
  },[moreFetch]);

  useEffect(() => {
    featchData();  
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


