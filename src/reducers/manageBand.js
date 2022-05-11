export default function manageBand(state = {
  bands: [],
}, action) {
    switch (action.type) {
      case 'ADD_BAND':
        // we first spread the original state
        // we specify the new array
        // resulting in Array on objects
        return {...state, bands:[...state.bands, action.payload] }

      default:
        return state;
    }
};

