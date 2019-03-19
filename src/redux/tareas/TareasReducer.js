import actionTypes from './TareasConstants';

const initialStore = {
  tareas: [],
  queryResult: ''
};

export default function tareasReducer(state = initialStore, action) {
  switch(action.type) {
    case actionTypes.FETCH_TAREAS_SUCCESS:
      return { ...state, tareas: action.tareas };

    case actionTypes.FETCH_IMAGES_SUCCESS:
      return { ...state, tareas: action.imagesPaths };

    case actionTypes.QUERY_TAREA_RESULT:
      return { ...state, queryResult: action.queryResult };
    
    case actionTypes.CLEAN_RESULT_QUERY:
      return { ...initialStore };

    default:
      return state;
  }
}