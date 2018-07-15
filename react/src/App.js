import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Heroes from './Heroes/Heroes';
import Messages from './Messages/Messages';
import store from './redux/store';

class App extends Component {
  render() {
    const title = 'React Tour of Heroes';
    return (
      <Provider store={store}>
        <div className="App">
          <h1>{ title } </h1>
          <Heroes />
          <Messages />
        </div>
      </Provider>
    );
  }
}

export default App;
