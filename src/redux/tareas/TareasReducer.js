import actionTypes from './TareasConstants';

const initialStore = {
  tareas: [],
  result: ''
};

export default function tareasReducer(state = initialStore, action) {
  switch(action.type) {
    case actionTypes.LOAD_TAREAS:
      return { ...state, tareas: action.tareas, result: '' };

    case actionTypes.NEW_TAREA:
      return { ...state, result: action.result };

    default:
      return state;
  }
}