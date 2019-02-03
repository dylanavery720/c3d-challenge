import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../style/App.css';
import { fetchAllLocations } from '../actions/locationActions';
import App from '../components/App';

const mapStateToProps = (state) => {
  console.log(state, 'sg')
  return { locations: state.Locations.data, activeMarkers: state.ActiveMarkers.data };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAllLocations }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
