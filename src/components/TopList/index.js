import React from 'react';
import PropTypes from 'prop-types';
import './List.scss';

const TopList = ({ list = [] }) => 
  (<div>
    <ul className="appList">
      {
        list.map((item, index) => {
          return (
            <li key={item.id}>
              <div className='appList__index'>{(index+1)}</div>
              <div className={'appList__image ' + ((index+1) % 2 === 0 ? 'even': 'odd')}>
                <img src={item.images[1].href} alt={item.name}></img>
              </div>
              <div className="appList__detail">
                <div className='appList__detail__name'>{item.name}</div>
                <div className='appList__detail__category'>{item.category.label}</div>
                <div className='appList__detail__rating'>(0)</div>
              </div>
            </li>
          )
        })
      }
    </ul>
  </div>);


TopList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default TopList;
