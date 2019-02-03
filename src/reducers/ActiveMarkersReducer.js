const initialState = {
  data: [],
};

const ActiveMarkers = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTIVATE_MARKER':
      const exists =
        state.data.length > 0 &&
        state.data.filter(({ id }) => id === action.data.id).length > 0;
      state = exists
        ? state.data.filter(({ id }) => id !== action.data.id)
        : state.data.concat(action.data);
      return Object.assign({}, state, {
        data: state,
      });
    default:
      return state;
  }
};

export default ActiveMarkers;
