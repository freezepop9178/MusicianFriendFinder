import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapPins from '../map-pins/map-pins.js';
import '../../App.css';

export class MapBody extends React.Component {
    render() {
        return(
        <div className="mapBody">
            <div className="googleMap">
                <GoogleMapReact bootstrapURLKeys={{ key: this.props.googleAPI }} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
                    <MapPins lat={38.9717} lng={-95.2353} text={'Lawrence, KS'}></MapPins>
                    <MapPins lat={38.9337} lng={-95.2438} text={'Lawrence, KS'}></MapPins>
                    <MapPins lat={38.9987} lng={-95.2367} text={'Lawrence, KS'}></MapPins>
                    <MapPins lat={38.9617} lng={-95.2242} text={'Lawrence, KS'}></MapPins>
                    <MapPins lat={38.9545} lng={-95.2557} text={'Lawrence, KS'}></MapPins>
                </GoogleMapReact>
            </div>

        </div>
        );
    }
}

MapBody.defaultProps = {
    center: {
        lat: 38.9717,
        lng: -95.2353
    },
    zoom: 12,
    googleAPI: 'AIzaSyDBuUslQmMpIKOEtdiEY9Sx-C6M9xyDUYU'
}

export default MapBody;