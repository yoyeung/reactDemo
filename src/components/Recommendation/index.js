import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  checkNotFoundOrEmpty
} from '../utils';
import './Recommendation.scss';

const Recommendation = ({ list, featchData, status }) => {
    useEffect(() => {
      featchData();
    },[]);
    return (<div className="recommendation">
      <h1>推介</h1>
      <ul className={"list"  + ((list.length === 0) ? " loading" : "" )}>
        {
          list.length === 0 ? (
            checkNotFoundOrEmpty(status)
          ) : (
            list.map((item) => (
              <li key={item.id}>
                <div className='recommendation__image'>
                  <img src={item.images[2].href} alt={item.name}></img>
                </div>
                <div className='recommendation__name'>{item.name}</div>
                <div className='recommendation__category'>{item.category.label}</div>
              </li>
            ))
          )
        }
      </ul>
    </div>
  );
}


Recommendation.propTypes = {
  list: PropTypes.array.isRequired
}

export default Recommendation;
