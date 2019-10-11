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


export const addSmurf = (smurf) => {
	return dispatch => {
        axios
        .post('http://localhost:3333/smurfs', smurf)
        .then((res) => {
            console.log(res.data)
            console.log(smurf)
			dispatch({ type: types.FORM_SUBMIT, payload: res.data });
        })
        .catch(err => console.log(err.message))
	};
};