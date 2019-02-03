const initialState = {
    data: [],
  };
  
  const ActiveMarkers = (state = initialState, action) => {
    switch (action.type) {
        case 'ACTIVATE_MARKER':
        console.log('activiveve')
        return Object.assign({}, state, {
          data: state.data.concat(action.data),
        });
      default:
        return state;
    }
  };
  
  export default ActiveMarkers;
  