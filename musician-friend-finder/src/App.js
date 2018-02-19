import React, { Component } from 'react';
import './App.css';
import SideBarMenu from './modules/side-bar-menu/side-bar-menu.js';
import MainHeader from './modules/main-header/main-header.js';
import MainBody from './modules/main-body/main-body.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader/>
        <SideBarMenu/>
        <MainBody/>
      </div>
    );
  }
}

export default App;
