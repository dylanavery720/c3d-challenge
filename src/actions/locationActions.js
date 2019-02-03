require('isomorphic-fetch');


const storeAllLocations = (locations) => {
  return {
    type: 'STORE_LOCATIONS',
    data: locations.locations,
  };
};

const activateMarker = (location) => {
  return {
    type: 'ACTIVATE_MARKER',
    data: location
  }
}

const fetchAllLocations = () => {
  return (dispatch) => {
    return fetch('/locations', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(locations => locations.json())
      .then(json => dispatch(storeAllLocations(json)));
  };
};


export { fetchAllLocations, activateMarker }
