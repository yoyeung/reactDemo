import React, { Component } from 'react';

import RecommendationList from './containers/RecommendationList';
import ListPagination from './containers/ListPagination';
import SearchBox from './containers/SearchBox';
import './App.scss';

class App extends Component {

  filter(event) {
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="App">
        <SearchBox/>
        <RecommendationList/>
        <ListPagination/>
      </div>
    );
  }
}

export default App;
