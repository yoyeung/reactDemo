import React from 'react';
import PropTypes from 'prop-types';

const RowListItem = ({item}) => (
  <li>
    <div className='recommendation__image'>
      <img src={item.images[2].href} alt={item.name}></img>
    </div>
    <div className='recommendation__name'>{item.name}</div>
    <div className='recommendation__category'>{item.category.label}</div>
  </li>
)


RowListItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default RowListItem;