import React from 'react';
import PropTypes from 'prop-types';

const Recommandation = ({ list }) => 
  (
    <div className="recommandation">
      <h1>推介</h1>
      <ul className="list">
        {
          list.map((item) => 
             (
              <li key={item.id}>
                <div className='recommandation__image'>
                  <img src={item.images[2].href} alt={item.name}></img>
                  </div>
                <div className='recommandation__name'>{item.name}</div>
                <div className='recommandation__category'>{item.category.label}</div>
              </li>
            )
          )
        }
      </ul>
    </div>
  );


Recommandation.propTypes = {
  list: PropTypes.array.isRequired
}

export default Recommandation;
