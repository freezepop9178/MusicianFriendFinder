import React, { Component } from 'react';
import './App.css';
import MainHeader from './modules/main-header/main-header.js';
import MapBody from './modules/map-body/map-body.js'
import Sidebar from 'react-sidebar';
import SidebarContent from './modules/sidebar-content/sidebar-content.js';
import {Route, Switch} from 'react-router-dom';
import AboutPageBody from '../src/modules/about-body/about-page.js';
import ErrorPage from '../src/modules/error-page/error-page.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }
      
  render() {
    return (
      <div className="App">
        <Sidebar sidebar={<SidebarContent/>} open={this.state.sidebarOpen} onSetOpen={this.onSetSidebarOpen} shadow={false}>
          <MainHeader toggleSidebar={this.onSetSidebarOpen}/>
          <Switch>
            <Route exact path="/" component={MapBody} />
            <Route path="/about" component={AboutPageBody} />
            <Route component={ErrorPage} />
          </Switch>
        </Sidebar>
      </div>
    );
  }
}

export default App;
