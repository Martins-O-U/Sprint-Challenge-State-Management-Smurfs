import axios from 'axios'
import * as types from './types'

export const getSmurf = () => {
    return dispatch => {
        axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: types.ADD_SMURFS, payload: res.data })
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.message);
          });
    }
} 