import React, { Component } from 'react';
import { Map, TileLayer, ZoomControl, Polygon } from 'react-leaflet';
import AllMarkers from './AllMarkers';

class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { locations, activeMarkers } = this.props;
    return (
      <div className="map-container">
        {locations.length > 1 && (
          <Map
            className="map"
            zoomControl={false}
            center={[
              locations[locations.length - 1].lat,
              locations[locations.length - 1].lng,
            ]}
            zoom={4}
            maxBounds={[[85, 100], [-85, -280]]}
          >
            <TileLayer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
              maxZoom={10}
              minZoom={2}
            />
            <ZoomControl position="bottomright" />
            <AllMarkers />
            <Polygon positions={activeMarkers} />
          </Map>
        )}
      </div>
    );
  }
}

export default LeafletMap;
