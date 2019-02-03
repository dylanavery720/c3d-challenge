require('isomorphic-fetch');

const storeAllLocations = locations => {
  return {
    type: 'STORE_LOCATIONS',
    data: locations.locations,
  };
};

const activateMarker = location => {
  return {
    type: 'ACTIVATE_MARKER',
    data: location,
  };
};

const deactivateMarker = location => {
  return {
    type: 'DEACTIVATE_MARKER',
    data: location,
  };
};

const fetchAllLocations = () => {
  return dispatch => {
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

const saveLocation = location => {
  return dispatch => {
    return fetch('/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(location),
    })
      .then(locations => {
        if (locations.ok) {
          return locations.json();
        } else {
          console.log(locations);
          throw new Error(locations.error);
        }
      })
      .then(json => dispatch(storeAllLocations(json)))
      .catch(error => console.log(error));
  };
};

export { fetchAllLocations, activateMarker, deactivateMarker, saveLocation };
