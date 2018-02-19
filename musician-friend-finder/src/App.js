import React, { Component } from 'react';
import './App.css';
import SideBarMenu from './modules/side-bar-menu/side-bar-menu.js';
import MainHeader from './modules/main-header/main-header.js';
import MainBody from './modules/main-body/main-body.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBarMenu></SideBarMenu>
        <MainHeader/>
        <MainBody/>
        <div className="mainSection">
          <div className="mainHeader">
            <h1>This is the Main Header, there will be a picture here</h1>
          </div>
        </div>
        <div className="rightSection">

        </div>
        <div className="mainBody">
          <span>This is the main landing page for the Musician Friend Finder application</span>
        </div>
      </div>
    );
  }
}

export default App;
