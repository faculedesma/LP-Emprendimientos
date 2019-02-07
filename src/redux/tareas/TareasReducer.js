import actionTypes from './TareasConstants';

const initialStore = {
  tareas: []
};

export default function tareasReducer(state = initialStore, action) {
  switch(action.type) {
    case actionTypes.LOAD_TAREAS: 
      return { ...state, tareas: action.tareas }

    default:
      return state;
  }
}