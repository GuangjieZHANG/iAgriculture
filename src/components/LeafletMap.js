import React, { Component } from 'react';
import L from 'leaflet';


class LeafletMap extends Component {

    leafletMap;

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // get data here
        this.leafletMap = L.map('leafletMap', {
            center: [37.7546, 110.1658],
            zoom: 4,
            minZoom: 2,
            layers: [
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }),
            ]
        });
        L.marker([37.7546, 110.1658]).addTo(this.leafletMap)
            .bindPopup('结点一')
            .openPopup();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        /*this.leafletMap.setView(newCenter, 18, {
            minZoom: 14,
            layers: [
                L.tileLayer(mapServerURL, {
                    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }),
            ]
        });*/


    }

    render() {

        return (
            <div>
                <div id="leafletMap" style={{ height: "440px", width: "100%"}} >
                </div>
            </div>

        );
    }
}

export default LeafletMap
