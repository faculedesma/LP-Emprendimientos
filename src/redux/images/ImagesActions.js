import axios from 'axios';
import actionTypes from './ImagesConstants';

const baseURL = 'http://localhost:3000';

const cleanImagesPaths = () => dispatch => { dispatch({ type: actionTypes.CLEAN_IMAGES_PATHS })};

const fetchImagesPathsSuccess = imagesPaths => dispatch => { dispatch({ type: actionTypes.FETCH_IMAGES_PATHS, imagesPaths }); };

const fetchImagesPaths = IdTarea => dispatch => {
  dispatch(cleanImagesPaths());
  axios.get(`${baseURL}/tareas/images?IdTarea=${IdTarea}`)
    .then(res => {
      dispatch(fetchImagesPathsSuccess(res.data[0]));
    })
    .catch(e => {
      console.log(e);
    });
};

const saveImagePath = (IdTarea, PATH) => dispatch => {
  console.log('Guardar imagen');
  // axios.post(`${baseURL}/tareas/create`,
  //   {
  //     titulo: titulo,
  //     descripcion: descripcion
  //   })
  //   .then(res => {
  //     dispatch(queryTareasResult(res.data[0][0].Mensaje));
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   });
};

const deleteImage = IdTarea => dispatch => {
  console.log('Borrar imagen');
  // axios.post(`${baseURL}/tareas/delete`,
  //   {
  //     IdTarea: IdTarea
  //   })
  //   .then(res => {
  //     dispatch(queryTareasResult(res.data[0][0].Mensaje));
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   });
};

export { fetchImagesPaths, saveImagePath, deleteImage };