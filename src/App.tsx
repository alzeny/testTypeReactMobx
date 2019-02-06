import React, { Component } from 'react';
import { Provider } from 'mobx-react'

import './App.css';
import Routes from './routes';
import {authStore, AuthStore} from './stores/AuthStore'

export class App extends Component {

  private authStore: AuthStore = authStore;

  render() {
    return (
      <Provider authStore={this.authStore}>
        <Routes></Routes>
      </Provider>
    );
  }
}

export default App;
