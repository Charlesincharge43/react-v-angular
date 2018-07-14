import React, { Component } from 'react';

import Heroes from './Heroes/Heroes';

class App extends Component {
  render() {
    const title = 'React Tour of Heroes';
    return (
      <div className="App">
        <h1>{ title } </h1>
        <Heroes />
      </div>
    );
  }
}

export default App;
