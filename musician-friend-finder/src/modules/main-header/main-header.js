import React, { Component } from 'react';
import '../../styles/css/fontawesome-all.css';


class MainHeader extends Component {
    render() {
        return(
            <div className="mainHeader">
                <a onClick={this.props.toggleSidebar}><i className="fas fa-list fa-2x"></i></a>
                <h1 className="pageTitle">Musician Friend Finder</h1>
            </div>
        );
    }
}
export default MainHeader;