import axios from 'axios';
import actionTypes from './ObrasConstants';

const baseURL = 'http://192.168.0.15:3000';

const fetchObrasSuccess = obras => dispatch => { dispatch({ type: actionTypes.FETCH_OBRAS_SUCCESS, obras }); };

const fetchObras = () => dispatch => {
  axios.get(`${baseURL}/obras`)
    .then(res => {
      dispatch(fetchObrasSuccess(res.data[0]));
    })
    .catch(e => {
      console.log(e);
    });
};

export { fetchObras };

