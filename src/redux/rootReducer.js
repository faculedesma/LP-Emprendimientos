import { combineReducers } from 'redux';
import tareas from './tareas/TareasReducer';
import images from './images/ImagesReducer';

const rootReducer = combineReducers({
  tareas,
  images
});

export default rootReducer;
