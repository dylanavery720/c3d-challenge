/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllMarkers from '../components/AllMarkers'
import { activateMarker } from '../actions/locationActions';
import { bindActionCreators } from 'redux';



const mapStateToProps = (state) => {
  return { locations: state.Locations.data, activateMarker: state.ActiveMarkers.data }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ activateMarker }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AllMarkers);
