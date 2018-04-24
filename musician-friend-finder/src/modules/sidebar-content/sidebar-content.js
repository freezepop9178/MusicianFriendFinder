import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SidebarContent extends Component {

    render() {
        return(
            <div className="sidebarContent">
                <span><Link to="/">Home</Link></span>
                <span><Link to="/about">About Page</Link></span>
            </div>
        );
    }
}
export default SidebarContent;