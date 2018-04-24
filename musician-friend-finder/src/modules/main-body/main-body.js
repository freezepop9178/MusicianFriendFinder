import React from 'react';
import GoogleMapReact from 'google-map-react';
import '../../App.css';

export class MainBody extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    };

    render() {
        return(
        <div className="mainBody">
            <div className="googleMap">
                <GoogleMapReact bootstrapURLKeys={{ key: this.props.baseLocation.googleAPI }} defaultCenter={this.props.baseLocation.center} defaultZoom={this.props.baseLocation.zoom}></GoogleMapReact>
            </div>

        </div>
        );
    }
}
export default MainBody;