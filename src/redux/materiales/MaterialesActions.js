import axios from 'axios';
import actionTypes from './MaterialesConstants';

const baseURL = 'http://192.168.0.15:3000';

const fetchMaterialesSuccess = materiales => dispatch => { dispatch({ type: actionTypes.FETCH_MATERIALES_SUCCESS, materiales }); };

const cleanQueryResult = () => dispatch => { dispatch({ type: actionTypes.CLEAN_RESULT_QUERY })}

const queryTareasResult = queryResult => dispatch => { dispatch({ type: actionTypes.QUERY_TAREA_RESULT, queryResult }); };

const fetchMateriales = (IdObra, material) => dispatch => {
  dispatch(cleanQueryResult());
  axios.get(`${baseURL}/materiales?IdObra=${IdObra}&material=${material}`)
    .then(res => {
      dispatch(fetchMaterialesSuccess(res.data[0]));
    })
    .catch(e => {
      console.log(e);
    });
};


const addMaterial = (IdObra, cantidad, nota) => dispatch => {
  axios.post(`${baseURL}/materiales/add`,
    {
      IdObra: IdObra,
      cantidad: cantidad,
      nota: nota
    })
    .then(res => {
      dispatch(queryTareasResult(res.data[0][0].Mensaje));
    })
    .catch(e => {
      console.log(e);
    });
};

const deleteMaterial = (IdMaterial, IdObra) => dispatch => {
  axios.post(`${baseURL}/materiales/delete`,
    {
      IdMaterial: IdMaterial,
      IdObra: IdObra
    })
    .then(res => {
      dispatch(queryTareasResult(res.data[0][0].Mensaje));
    })
    .catch(e => {
      console.log(e);
    });
};

const updateMaterial = material => dispatch => {
  axios.post(`${baseURL}/materiales/update`,
    {
      material: material
    })
    .then(res => {
      dispatch(queryTareasResult(res.data[0][0].Mensaje));
    })
    .catch(e => {
      console.log(e);
    });
};

const deliveredMaterial = (IdMaterial, IdObra) => dispatch => {
  axios.post(`${baseURL}/materiales/delivered`,
    {
      IdMaterial: IdMaterial,
      IdObra: IdObra
    })
    .then(res => {
      dispatch(queryTareasResult(res.data[0][0].Mensaje));
    })
    .catch(e => {
      console.log(e);
    });
};

const pendentMaterial = (IdMaterial, IdObra) => dispatch => {
  axios.post(`${baseURL}/materiales/pendent`,
    {
      IdMaterial: IdMaterial,
      IdObra: IdObra
    })
    .then(res => {
      dispatch(queryTareasResult(res.data[0][0].Mensaje));
    })
    .catch(e => {
      console.log(e);
    });
};

export { fetchMateriales, addMaterial, deleteMaterial, updateMaterial, deliveredMaterial, pendentMaterial };