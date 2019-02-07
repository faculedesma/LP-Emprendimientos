import * as types from './ObrasConstants';

const initialStore = {
  obras: []
};

export default function obrasReducer(state = initialStore, action) {
  switch (action.type) {
    case types.LOAD_OBRAS_SUCCESS:
      return action.obras;

    default:
      return state;
  }
}