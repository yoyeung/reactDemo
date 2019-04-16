import React, { Component } from 'react';
import * as Service from './reduce/services';
import {
  dataSimplifer
} from './utils';
import Recommandation from './components/Recommandation';
import TopList from './components/TopList';
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

  render() {
    return (
      <div className="App">
       <div className="search"><input placeholder="&#xF002; 搜尋" /></div>
       <Recommandation list={this.state.recommandList}></Recommandation>
       <TopList list={this.state.topFeatureList}></TopList>
      </div>
    );
  }
}

export default App;
