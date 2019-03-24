import { combineReducers } from 'redux';
import tareas from './tareas/TareasReducer';
import obras from './obras/ObrasReducer';

const rootReducer = combineReducers({
  obras,
  tareas
});

export default rootReducer;
