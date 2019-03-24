import actionTypes from './ObrasConstants';

const initialStore = {
  obras: []
};

export default function obrasReducer(state = initialStore, action) {
  switch (action.type) {
    case actionTypes.FETCH_OBRAS_SUCCESS:
      return {...state, obras: action.obras};

    default:
      return state;
  }
}