import { combineReducers } from 'redux';
import Locations from './LocationsReducer';
import ActiveMarkers from './ActiveMarkersReducer'

const RootReducer = combineReducers({
  Locations,
  ActiveMarkers
});

export default RootReducer;
