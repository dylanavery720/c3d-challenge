/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllMarkers from '../components/AllMarkers';
import { activateMarker, deactivateMarker } from '../actions/locationActions';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  return {
    locations: state.Locations.data,
    activeMarkers: state.ActiveMarkers.data,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ activateMarker, deactivateMarker }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllMarkers);
