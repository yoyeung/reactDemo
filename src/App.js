import React, { Component } from 'react';

import Recommendation from './components/Recommendation/';
import TopList from './components/TopList/';
import './App.scss';

class App extends Component {


  render() {
    return (
      <div className="App">
       <div className="search"><input placeholder="&#xF002; 搜尋" /></div>
       <Recommendation/>
       <TopList/>
      </div>
    );
  }
}

export default App;
