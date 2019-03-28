import { combineReducers } from 'redux';
import tareas from './tareas/TareasReducer';
import obras from './obras/ObrasReducer';
import materiales from './materiales/MaterialesReducer';

const rootReducer = combineReducers({
  obras,
  tareas,
  materiales
});

export default rootReducer;
