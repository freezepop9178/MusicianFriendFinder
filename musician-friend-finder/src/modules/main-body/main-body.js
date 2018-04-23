import React from 'react';
import GoogleMapReact from 'google-map-react';
import '../../App.css';

export class MainBody extends React.Component {
    static defaultProps = {
        center: {
          lat: 38.9717,
          lng: -95.2353
        },
        zoom: 11,
        googleAPI: 'AIzaSyDBuUslQmMpIKOEtdiEY9Sx-C6M9xyDUYU'
      };

    render() {
        return(
        <div className="mainBody">
            <div className="googleMap">
                <GoogleMapReact bootstrapURLKeys={{ key: this.props.googleAPI }} defaultCenter={this.props.center} defaultZoom={this.props.zoom}></GoogleMapReact>
            </div>
            
        </div>
        );
    }
}
export default MainBody;