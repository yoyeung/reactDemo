import React, { Component } from 'react';
import * as Service from './services';
import {
  dataSimplifer
} from './utils';
import './App.scss';
import './RecommandSection.scss';
import './AppList.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchKey: '',
      recommandList: [],
      topFeatureList: [],
    }  
  }
  componentDidMount() {
    Service.getRecommandList()
    .then(({ data }) => {
      console.table( data.feed.entry.map( record => dataSimplifer(record)));
      if (data && data.feed && data.feed.entry) {
        this.setState((state) =>
          ({
            ...state,
            recommandList: data.feed.entry.map( record => dataSimplifer(record))
          })
        );
      }
    });
    Service.getTopFreeList()
    .then(({ data }) => {
      console.table(data.feed.entry.map( record => dataSimplifer(record)));
      if (data && data.feed && data.feed.entry) {
        this.setState((state) =>
        ({
          ...state,
          topFeatureList: data.feed.entry.map( record => dataSimplifer(record))
        })
      );
      }
      
    });
  }
  renderRecommand(list) {
    return list.map((item) => {
      return (
        <li key={item.id}>
          <div className='recommandation__image'>
            <img src={item.images[2].href} alt={item.name}></img>
            </div>
          <div className='recommandation__name'>{item.name}</div>
          <div className='recommandation__category'>{item.category.label}</div>
        </li>
      );
    });
  }
  renderTop(list) {
    return list.map((item, index) => {
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
      );
    });
  }
  render() {
    return (
      <div className="App">
       <div className="search"><input placeholder="&#xF002; 搜尋" /></div>
       <div className="recommandation">
         <h1>推介</h1>
         <ul className="list">
           {
             this.renderRecommand(this.state.recommandList)
           }
         </ul>
       </div>
       <div>
        <ul className="appList">
           {
             this.renderTop(this.state.topFeatureList)
           }
         </ul>
       </div>
      </div>
    );
  }
}

export default App;
