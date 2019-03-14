import axios from 'axios';
import actionTypes from './TareasConstants';

const baseURL = 'http://192.168.0.15:3000';

const fetchTareasSuccess = tareas => dispatch => { dispatch({ type: actionTypes.FETCH_TAREAS_SUCCESS, tareas }); };

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

const fetchImagesTarea = IdTarea => dispatch => {
  axios.get(`${baseURL}/tareas?IdTarea=${IdTarea}`)
    .then(res => {
      dispatch(fetchImagesTarea(res.data[0]));
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

const updateTarea = tarea => dispatch => {
  axios.post(`${baseURL}/tareas/update`,
    {
      tarea: tarea
    })
    .then(res => {
      dispatch(queryTareasResult(res.data[0][0].Mensaje));
    })
    .catch(e => {
      console.log(e);
    });
};

const finishTarea = IdTarea => dispatch => {
  axios.post(`${baseURL}/tareas/finish`,
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

const unfinishTarea = IdTarea => dispatch => {
  axios.post(`${baseURL}/tareas/unfinish`,
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

export { fetchTareas, fetchImagesTarea, createTarea, deleteTarea, updateTarea, finishTarea, unfinishTarea };