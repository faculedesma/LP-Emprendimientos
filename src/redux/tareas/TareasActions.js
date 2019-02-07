import axios from 'axios';

const tareasSuccess = tareas => ({ type: types.LOAD_TAREAS, tareas });

const loadTareas = dispatch => {
  axios.get('http://localhost:3000/tareas')
    .then(response => {
      console.log(response);
      dispatch(tareasSuccess(response.data))
    })
    .catch(error => {
      console.log(error);
    });;
};

export { loadTareas };