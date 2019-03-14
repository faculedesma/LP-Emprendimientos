import { combineReducers } from 'redux';
import tareas from './tareas/TareasReducer';

const rootReducer = combineReducers({
  tareas
});

export default rootReducer;
