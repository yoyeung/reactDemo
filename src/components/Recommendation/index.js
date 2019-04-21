import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import RowListItem from '../commons/RowListItem';
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
              <RowListItem item={item} key={item.id} />
            ))
          )
        }
      </ul>
    </div>
  );
}


Recommendation.propTypes = {
  list: PropTypes.array.isRequired,
  featchData: PropTypes.func.isRequired,
  status: PropTypes.string
}

export default Recommendation;
