import React from 'react';
import PropTypes from 'prop-types';
import Rate from 'react-star-ratings';

const ListItem = ({item, index = 0, averageUserRating = 0, userRatingCount = 0}) => (
  <li>
    <div className='appList__index'>{(index+1)}</div>
    <div className='appList__image'>
      <img src={item.images[1].href} alt={item.name}></img>
    </div>
    <div className="appList__detail">
      <div className='appList__detail__name'>{item.name}</div>
      <div className='appList__detail__category'>{item.category.label}</div>
      <div className='appList__detail__rating'>
        <Rate rating={averageUserRating}
        starRatedColor='#fe9501'
        numberOfStars={5}
        starDimension='15px'
        starSpacing='0px'
        name='rating'/> ({userRatingCount})</div>
    </div>
  </li>
)


ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  averageUserRating: PropTypes.number,
  userRatingCount: PropTypes.number
}

export default ListItem;