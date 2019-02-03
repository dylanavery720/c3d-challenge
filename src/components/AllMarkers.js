/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapMarker from './Marker'

class AllMarkers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeMarkers: []
    };
  }

  onClick(e, location) {
    // e.preventDefault();
    this.props.activateMarker(location)
  }

  render() {
    const markerArray = this.props.locations.map((marker, i) => {
      return (
        <MapMarker
          key={i}
          location={[+marker.lat, +marker.lng]}
          name={marker.name}
          onClick={(e) => this.onClick(e, marker)}
        />
      )
    })

    return (
      <div className="paths-container">
        {markerArray}
      </div>
    );
  }
}

export default AllMarkers;
