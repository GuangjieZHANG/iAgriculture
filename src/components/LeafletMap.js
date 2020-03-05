import React, { Component } from 'react';
import L from 'leaflet';

const mapCenter = {
    "st1": [37.755741, 110.165791],
    "st2": [37.756674, 110.163881],
    "st3": [37.754706, 110.163849],
    "st4": [37.753832, 110.167379],
    "st5": [37.757479, 110.169525],
};

class LeafletMap extends Component {

    leafletMap;

    constructor(props) {
        super(props);
        this.state = {device: props.device};
    }

    componentDidMount() {
        // get data here
        this.leafletMap = L.map('leafletMap', {
            center: [37.7546, 110.1658],
            zoom: 14,
            minZoom: 2,
            layers: [
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }),
            ]
        });

        const st1 = L.marker(mapCenter.st1).addTo(this.leafletMap).bindPopup('结点一').openPopup();
        const st2 = L.marker(mapCenter.st2).addTo(this.leafletMap).bindPopup('结点二').openPopup();
        const st3 = L.marker(mapCenter.st3).addTo(this.leafletMap).bindPopup('结点三').openPopup();
        const st4 = L.marker(mapCenter.st4).addTo(this.leafletMap).bindPopup('结点四').openPopup();
        const st5 = L.marker(mapCenter.st5).addTo(this.leafletMap).bindPopup('结点五').openPopup();
        st1.on('click', () => {this.setState({device: "str1"}); this.props.handleMarker("str1"); });
        st2.on('click', () => {this.setState({device: "str2"}); this.props.handleMarker("str2"); });
        st3.on('click', () => {this.setState({device: "str3"}); this.props.handleMarker("str3"); });
        st4.on('click', () => {this.setState({device: "str4"}); this.props.handleMarker("str4"); });
        st5.on('click', () => {this.setState({device: "str5"}); this.props.handleMarker("str5"); });

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
