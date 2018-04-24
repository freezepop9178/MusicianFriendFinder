import React, { Component } from 'react';
import './App.css';
import MainHeader from './modules/main-header/main-header.js';
import MainBody from './modules/main-body/main-body.js'
import Sidebar from 'react-sidebar';
import SidebarContent from './modules/sidebar-content/sidebar-content.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false,
      coordinates: {
        center: {
          lat: 38.9717,
          lng: -95.2353
        },
        zoom: 11,
        googleAPI: 'AIzaSyDBuUslQmMpIKOEtdiEY9Sx-C6M9xyDUYU'
      }
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  
  onSetSidebarOpen(open) {
    console.log(open);
    this.setState({sidebarOpen: open});
  }
      
  render() {
    return (
      <div className="App">
        
        <Sidebar sidebar={<SidebarContent/>}
                   open={this.state.sidebarOpen}
                   onSetOpen={this.onSetSidebarOpen}
                   shadow={false}>
          <MainHeader toggleSidebar={this.onSetSidebarOpen}/>
          <MainBody baseLocation={this.state.coordinates}/>
        </Sidebar>
      </div>
    );
  }
}

export default App;
