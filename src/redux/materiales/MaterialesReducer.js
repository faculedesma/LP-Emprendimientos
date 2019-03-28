import actionTypes from './MaterialesConstants';

const initialStore = {
  materiales: [],
  queryResult: ''
};

export default function materialesReducer(state = initialStore, action) {
  switch(action.type) {
    case actionTypes.FETCH_MATERIALES_SUCCESS:
      return { ...state, materiales: action.materiales };

    case actionTypes.QUERY_TAREA_RESULT:
      return { ...state, queryResult: action.queryResult };
    
    case actionTypes.CLEAN_RESULT_QUERY:
      return { ...initialStore };

    default:
      return state;
  }
}