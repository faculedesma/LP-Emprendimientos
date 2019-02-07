import * as types from './ObrasConstants';
import axios from 'axios';

function loadObras() {
    axios.get('http://localhost:3000').then(res => {
      console.log(res);
      //return res;
    }).catch(e => console.log(e));
}

export default loadObras;

