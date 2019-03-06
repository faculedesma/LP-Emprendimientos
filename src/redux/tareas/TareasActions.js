import axios from 'axios';
import actionTypes from './TareasConstants';

const baseURL = 'http://localhost:3000';

const fetchTareasSuccess = tareas => dispatch => { dispatch({ type: actionTypes.FETCH_TAREAS, tareas }); };

const cleanQueryResult = () => dispatch => { dispatch({ type: actionTypes.CLEAN_RESULT_QUERY })}

const queryTareasResult = queryResult => dispatch => { dispatch({ type: actionTypes.QUERY_TAREA_RESULT, queryResult }); };

const fetchTareas = titulo => dispatch => {
  dispatch(cleanQueryResult());
  axios.get(`${baseURL}/tareas?titulo=${titulo}`)
    .then(res => {
      dispatch(fetchTareasSuccess(res.data[0]));
    })
    .catch(e => {
      console.log(e);
    });
};

const createTarea = (titulo, descripcion) => dispatch => {
  axios.post(`${baseURL}/tareas/create`,
    {
      titulo: titulo,
      descripcion: descripcion
    })
    .then(res => {
      dispatch(queryTareasResult(res.data[0][0].Mensaje));
    })
    .catch(e => {
      console.log(e);
    });
};

const deleteTarea = IdTarea => dispatch => {
  axios.post(`${baseURL}/tareas/delete`,
    {
      IdTarea: IdTarea
    })
    .then(res => {
      dispatch(queryTareasResult(res.data[0][0].Mensaje));
    })
    .catch(e => {
      console.log(e);
    });
};

export { fetchTareas, createTarea, deleteTarea };