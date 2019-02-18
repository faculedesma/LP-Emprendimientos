import axios from 'axios';
import actionTypes from './TareasConstants';

const loadTareasSuccess = tareas => dispatch => { dispatch({ type: actionTypes.LOAD_TAREAS, tareas }); };

const newTareasResult = result => dispatch => { dispatch({ type: actionTypes.NEW_TAREA, result }); };

const loadTareas = () => dispatch => {
  axios.get('http://localhost:3000/tareas')
    .then(res => {
      dispatch(loadTareasSuccess(res.data));
    })
    .catch(e => {
      throw(e);
    });
};

const newTarea = (titulo, descripcion) => dispatch => {
  axios.post('http://localhost:3000/tareas/newTarea',
    {
      titulo: titulo,
      descripcion: descripcion
    })
    .then(res => {
      dispatch(newTareasResult(res.data[0].Mensaje));
    })
    .catch(e => {
      console.log(e);
    });
}

export { loadTareas, newTarea };